'use client';

import {Box} from '@chakra-ui/react';
import {FixedSizeList as List} from 'react-window';
import {useRef} from 'react';
import {Train} from '@/types/train';
import {useAuth} from '@contexts/AuthContext';
import TableHeader from './components/TableHeader';
import RowRenderer from './components/RowRenderer';

interface TrainScheduleTableProps {
  trains: Train[];
  sortBy: string;
  sortOrder: 'asc' | 'desc';
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
  onDelete
}: TrainScheduleTableProps) => {
  const tableContainerRef = useRef(null);
  const {isAuthenticated} = useAuth();

  const rowData = {
    trains,
    isAuthenticated,
    onEdit,
    onDelete
  };

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
      <TableHeader 
        sortBy={sortBy} 
        sortOrder={sortOrder} 
        onSort={onSort} 
        isAuthenticated={isAuthenticated} 
      />

      <Box
        flex="1"
        overflow="auto"
        ref={tableContainerRef}
      >
        <List
          height={containerHeight}
          itemCount={trains.length}
          itemSize={65}
          width="100%"
          itemData={rowData}
        >
          {RowRenderer}
        </List>
      </Box>
    </Box>
  );
};

export default TrainScheduleTable;
