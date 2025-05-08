import { Train } from '@/types/train';

export interface RowProps {
  index: number;
  style: React.CSSProperties;
  train?: Train;
  onEdit: (train: Train) => void;
  onDelete: (id: string) => void;
  isAuthenticated: boolean;
} 