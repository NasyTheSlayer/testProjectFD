import { CSSProperties } from 'react';
import { Train } from '@/types/train';
import TableRow from './TableRow';

interface RowRendererProps {
  index: number;
  style: CSSProperties;
  data: {
    trains: Train[];
    isAuthenticated: boolean;
    onEdit: (train: Train) => void;
    onDelete: (id: string) => void;
  };
}

const RowRenderer = ({ index, style, data }: RowRendererProps) => {
  const { trains, isAuthenticated, onEdit, onDelete } = data;
  
  if (index >= trains.length) return null;
  
  return (
    <TableRow
      index={index}
      style={style}
      train={trains[index]}
      isAuthenticated={isAuthenticated}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default RowRenderer; 