import { ColumnConfig } from "../inerfaces/ColumnConfig";

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toLocaleString();
};

export const columns: ColumnConfig[] = [
  { label: "Number", key: "number", basis: "15%" },
  { label: "Departure", key: "departure", basis: "15%", sortable: true },
  { label: "Arrival", key: "destination", basis: "15%", sortable: true },
  { label: "Carrier", key: "carrier", basis: "15%" },
  {
    label: "Departure time",
    key: "departureTime",
    basis: "15%",
    sortable: true,
    formatter: formatDateTime,
  },
  {
    label: "Arrival time",
    key: "arrivalTime",
    basis: "15%",
    sortable: true,
    formatter: formatDateTime,
  },
];
