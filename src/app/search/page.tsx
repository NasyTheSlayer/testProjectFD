"use client";

import { Box, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchTrains } from "@/libs/api";
import { useAuth } from "@/contexts/auth/useAuth";
import TrainScheduleModal from "@/components/trains/TrainSheduleModal/TrainScheduleModal";
import api from "@/libs/axios";
import { useToast } from "@chakra-ui/toast";
import { useTrainSearch } from "@/hooks/useTrainSearch";
import ErrorDisplay from "@/components/feedback/ErrorDisplay";
import { Train, TrainsScheduleData } from "@/types/train";
import LoadingAnimation from "@/components/feedback/LoadingAnimation";
import SearchBar from "@/components/search/SearchBar";
import TrainTable from "@/components/trains/TrainTable/TrainTable";
import Pagination from "@/components/search/Pagination";
import { AxiosError } from "axios";
import { ApiResponse } from "@/types/api";

const SearchPage = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [windowHeight, setWindowHeight] = useState(0);
  const [page, setPage] = useState(1);
  const { open, onOpen, onClose } = useDisclosure();
  const { isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const toast = useToast();

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data, isLoading, error } = useQuery<TrainsScheduleData>({
    queryKey: ["trains", page],
    queryFn: () => fetchTrains(page),
  });

  const {
    searchTerm,
    setSearchTerm,
    sortBy,
    sortOrder,
    handleSort,
    resetSort,
    sortedTrains,
  } = useTrainSearch({ data: data?.data.items || [] });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/trains/${id}`),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["trains"] });
      toast({
        title: "Success",
        description: "Train schedule deleted successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    },
    onError: (error: AxiosError<ApiResponse>) => {
      toast({
        title: "Error",
        description:
          error.response?.data?.message || "Failed to delete train schedule",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    },
  });

  const handleEdit = (schedule: Train) => {
    setSelectedSchedule(schedule);
    onOpen();
  };

  const handleAdd = () => {
    setSelectedSchedule(null);
    onOpen();
  };

  const handleDelete = async (id: string) => {
    deleteMutation.mutate(id);
  };

  const handleNextPage = () => {
    if (data?.data.meta && page < data.data.meta.pages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  if (error) return <ErrorDisplay />;

  return (
    <Box
      height={`${windowHeight}px`}
      bg="gray.50"
      p={4}
      pt={8}
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <Box
        maxW="1200px"
        mx="auto"
        width="100%"
        flex="1"
        display="flex"
        flexDirection="column"
      >
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          resetSort={resetSort}
          isAuthenticated={isAuthenticated}
          handleAdd={handleAdd}
        />

        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <>
            <TrainTable
              trains={sortedTrains}
              sortBy={sortBy}
              sortOrder={sortOrder}
              onSort={handleSort}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />

            {data?.data.meta && data.data.meta.pages > 0 && (
              <Pagination
                page={page}
                totalPages={data.data.meta.pages}
                onNextPage={handleNextPage}
                onPrevPage={handlePrevPage}
              />
            )}
          </>
        )}
      </Box>

      <TrainScheduleModal
        key={selectedSchedule ? `edit-${selectedSchedule.id}` : "add-new"}
        isOpen={open}
        onCloseAction={onClose}
        mode={selectedSchedule ? "edit" : "add"}
        scheduleData={selectedSchedule}
        onSuccessAction={async () =>
          await queryClient.invalidateQueries({ queryKey: ["trains"] })
        }
      />
    </Box>
  );
};

export default SearchPage;
