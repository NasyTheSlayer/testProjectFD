export interface ColumnConfig {
  label: string;
  key: string;
  basis: string;
  sortable?: boolean;
  formatter?: (value: any) => string | React.ReactNode;
}