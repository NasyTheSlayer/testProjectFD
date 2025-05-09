import { Icon } from "@chakra-ui/react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

interface SortIconProps {
  columnKey: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
}

const SortIcon = ({ columnKey, sortBy, sortOrder }: SortIconProps) => {
  const isActive = sortBy === columnKey;

  return (
    <Icon
      as={isActive ? (sortOrder === "asc" ? FaSortUp : FaSortDown) : FaSortUp}
      color={isActive ? "orange.400" : "gray.300"}
      ml={1}
    />
  );
};

export default SortIcon;
