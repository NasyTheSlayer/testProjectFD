"use client";

import { Input, Box, Flex, Portal } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useToast } from "@chakra-ui/toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/libs/axios";
import ModalHeader from "./components/ModalHeader";
import FormInputField from "./components/FormInputField";
import CitySelectField from "./components/CitySelectField";
import DateTimeField from "./components/DateTimeField";
import ModalFooter from "./components/ModalFooter";
import {
  TrainScheduleFormData,
  trainScheduleSchema,
} from "@/libs/validation/trainSheduleSchema";
import {
  CARRIER,
  initialValues,
  ukrainianCities,
} from "@/components/trains/TrainSheduleModal/constants/constants";
import { AxiosError } from "axios";
import { ApiResponse } from "@/types/api";
import { Train } from "@/types/train";

interface TrainScheduleModalProps {
  isOpen: boolean;
  onCloseAction: () => void;
  mode: "add" | "edit";
  scheduleData?: Train;
  onSuccessAction: () => void;
}

const formatDateForInput = (dateString?: string) =>
  dateString ? new Date(dateString).toISOString().slice(0, 16) : "";

const TrainScheduleModal = ({
  isOpen,
  onCloseAction,
  mode,
  scheduleData,
  onSuccessAction,
}: TrainScheduleModalProps) => {
  const editValues =
    mode === "edit"
      ? {
          departure: scheduleData?.departure || "",
          destination: scheduleData?.destination || "",
          departureTime: formatDateForInput(scheduleData?.departureTime),
          arrivalTime: formatDateForInput(scheduleData?.arrivalTime),
          number: scheduleData?.number || "",
          carrier: CARRIER,
        }
      : initialValues;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<TrainScheduleFormData>({
    resolver: zodResolver(trainScheduleSchema),
    defaultValues: editValues,
  });

  const toast = useToast();

  const departureValue = watch("departure");
  const destinationValue = watch("destination");

  const showToast = (
    title: string,
    description: string,
    status: "success" | "error",
  ) => {
    toast({
      title,
      description,
      status,
      duration: 3000,
      isClosable: true,
    });
  };

  const onSubmit = async (data: TrainScheduleFormData) => {
    try {
      if (mode === "add") {
        await api.post("/trains", data);
        showToast("Success", "Train schedule added successfully", "success");
        reset(initialValues);
      } else {
        await api.put(`/trains/${scheduleData.id}`, data);
        showToast("Success", "Train schedule updated successfully", "success");
      }
      onSuccessAction();
      onCloseAction();
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ApiResponse>;
      showToast(
        "Error",
        axiosError.response?.data?.message || "Something went wrong",
        "error",
      );
    }
  };

  if (!isOpen) return null;

  // Common box style for modal overlay
  const overlayStyle = {
    position: "absolute" as const,
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
  };

  return (
    <Portal>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="modal"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          {...overlayStyle}
          bg="blackAlpha.400"
          backdropFilter="blur(5px)"
          onClick={onCloseAction}
        />
        <Box
          bg="white"
          borderRadius="xl"
          boxShadow="2xl"
          maxW="800px"
          w="95%"
          overflow="hidden"
          position="relative"
          zIndex="modal"
          border="1px solid"
          borderColor="gray.200"
        >
          <Box
            {...overlayStyle}
            height="6px"
            backgroundImage="linear-gradient(90deg, #3182ce 0%, #4557b8 33%, #634db1 66%, #805ad5 100%)"
            backgroundSize="200% 100%"
            borderTopRadius="xl"
            boxShadow="none"
          />

          <ModalHeader
            title={
              mode === "add" ? "Add New Train Schedule" : "Edit Train Schedule"
            }
            onClose={onCloseAction}
          />

          <Box py={6} px={6} bg="white">
            <form id="train-schedule-form" onSubmit={handleSubmit(onSubmit)}>
              <Flex direction="column" gap={6}>
                <Flex gap={6} direction={["column", "column", "row"]}>
                  <FormInputField
                    name="number"
                    label="Train Number"
                    register={register}
                    errors={errors}
                    placeholder="Enter train number"
                    required
                    maxLength={10}
                  />

                  <FormControl isInvalid={!!errors.carrier} flex="1">
                    <FormLabel fontWeight="medium" textAlign="center">
                      Carrier
                    </FormLabel>
                    <Box
                      borderRadius="md"
                      overflow="hidden"
                      boxShadow="sm"
                      border="1px solid"
                      borderColor="gray.300"
                      height="56px"
                      width="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      position="relative"
                      bg="gray.100"
                    >
                      <Input
                        value={CARRIER}
                        readOnly
                        textAlign="center"
                        size="lg"
                        bg="gray.100"
                        border="none"
                        _hover={{ cursor: "default" }}
                        _focus={{ outline: "none" }}
                        height="100%"
                        width="100%"
                      />
                      <input
                        type="hidden"
                        {...register("carrier")}
                        value={CARRIER}
                      />
                    </Box>
                  </FormControl>
                </Flex>

                <Flex gap={6} direction={["column", "column", "row"]}>
                  <CitySelectField
                    name="departure"
                    label="From"
                    register={register}
                    errors={errors}
                    value={departureValue}
                    cities={ukrainianCities}
                  />

                  <CitySelectField
                    name="destination"
                    label="To"
                    register={register}
                    errors={errors}
                    value={destinationValue}
                    cities={ukrainianCities}
                  />
                </Flex>

                <Flex gap={6} direction={["column", "column", "row"]}>
                  <DateTimeField
                    name="departureTime"
                    label="Departure Time"
                    register={register}
                    errors={errors}
                  />

                  <DateTimeField
                    name="arrivalTime"
                    label="Arrival Time"
                    register={register}
                    errors={errors}
                  />
                </Flex>
              </Flex>
            </form>
          </Box>

          <ModalFooter onClose={onCloseAction} mode={mode} />
        </Box>
      </Box>
    </Portal>
  );
};

export default TrainScheduleModal;
