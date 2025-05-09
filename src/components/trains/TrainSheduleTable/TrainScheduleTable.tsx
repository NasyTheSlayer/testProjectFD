"use client";

import { Box, Flex } from "@chakra-ui/react";
import { FixedSizeList as List } from "react-window";
import { useRef } from "react";
import { Train } from "@/types/train";
import { useAuth } from "@/contexts/auth/useAuth";
import { columns } from "./constants/constants";
import SortIcon from "./components/SortIcon";
import TableRow from "./components/TableRow";

interface TrainScheduleTableProps {
  trains: Train[];
  sortBy: string;
  sortOrder: "asc" | "desc";
  containerHeight: number;
  onSort: (field: string) => void;
  onEdit: (train: Train) => void;
  onDelete: (id: string) => void;
}

const TrainScheduleTable = ({
  trains,
  sortBy,
  sortOrder,
  containerHeight,
  onSort,
  onEdit,
  onDelete,
}: TrainScheduleTableProps) => {
  const tableContainerRef = useRef(null);
  const { isAuthenticated } = useAuth();

  const RowRenderer = (props) => (
    <TableRow
      {...props}
      trains={trains}
      onEdit={onEdit}
      onDelete={onDelete}
      isAuthenticated={isAuthenticated}
    />
  );

  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="sm"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      flex="1"
      maxH="600px"
    >
      <Flex
        width="100%"
        bg="gray.50"
        fontWeight="bold"
        borderBottom="1px"
        borderColor="gray.200"
      >
        {columns.map(({ label, key, basis, sortable }) => (
          <Box
            key={key}
            p={4}
            textAlign="left"
            flexBasis={basis}
            cursor={sortable ? "pointer" : "default"}
            onClick={sortable ? () => onSort(key) : undefined}
          >
            {label}
            {sortable && (
              <SortIcon columnKey={key} sortBy={sortBy} sortOrder={sortOrder} />
            )}
          </Box>
        ))}

        {isAuthenticated && (
          <Box p={4} textAlign="left" flexBasis="15%">
            Actions
          </Box>
        )}
      </Flex>

      <Flex flex="1" overflow="auto" ref={tableContainerRef} direction="column">
        <div>
          <List
            height={containerHeight}
            itemCount={trains.length}
            itemSize={65}
            width="100%"
          >
            {RowRenderer}
          </List>
        </div>
      </Flex>
    </Box>
  );
};

export default TrainScheduleTable;
