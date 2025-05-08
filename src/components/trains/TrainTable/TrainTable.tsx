import TrainScheduleTable from '../TrainSheduleTable/TrainScheduleTable';
import { Train } from '@/types/train';

interface TrainTableProps {
  trains: Train[];
  sortBy: string | null;
  sortOrder: 'asc' | 'desc';
  onSort: (field: string) => void;
  onEdit: (schedule: Train) => void;
  onDelete: (id: string) => void;
}

export default function TrainTable({
  trains,
  sortBy,
  sortOrder,
  onSort,
  onEdit,
  onDelete
}: TrainTableProps) {
  return (
    <TrainScheduleTable
      trains={trains}
      sortBy={sortBy}
      sortOrder={sortOrder}
      containerHeight={500}
      onSort={onSort}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
} 