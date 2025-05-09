import { BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ColumnConfig {
  key: string;
  label: string;
  flexBasis: string;
  sortable: boolean;
  fontWeight?: string;
  formatter?: (value: unknown) => string | ReactNode;
}

export const formatDateTime = (dateString: string) => {
  return new Date(dateString).toLocaleString();
};

export const columns: ColumnConfig[] = [
  {
    key: "number",
    label: "Number",
    flexBasis: "15%",
    sortable: false,
    fontWeight: "medium",
  },
  { key: "departure", label: "Departure", flexBasis: "15%", sortable: true },
  { key: "destination", label: "Arrival", flexBasis: "15%", sortable: true },
  { key: "carrier", label: "Carrier", flexBasis: "15%", sortable: false },
  {
    key: "departureTime",
    label: "Departure time",
    flexBasis: "15%",
    sortable: true,
    formatter: formatDateTime,
  },
  {
    key: "arrivalTime",
    label: "Arrival time",
    flexBasis: "15%",
    sortable: true,
    formatter: formatDateTime,
  },
];

export const cellStyles: BoxProps = {
  p: 4,
  textAlign: "left",
  flexBasis: "15%",
};

export const tableCellStyles = {
  ...cellStyles,
  as: "td",
};

export const tableHeaderCellStyles = {
  ...cellStyles,
  as: "div",
};
