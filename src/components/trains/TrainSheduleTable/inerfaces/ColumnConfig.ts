import { ReactNode } from "react";

export interface ColumnConfig {
  label: string;
  key: string;
  basis: string;
  sortable?: boolean;
  formatter?: (value: unknown) => string | ReactNode;
}
