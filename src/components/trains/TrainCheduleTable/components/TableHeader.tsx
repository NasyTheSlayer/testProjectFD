import React from 'react';
import { Box } from '@chakra-ui/react';
import { columns } from '../constants/constants';
import SortIcon from './SortIcon';

interface TableHeaderProps {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSort: (field: string) => void;
  isAuthenticated: boolean;
}

const TableHeader = ({ sortBy, sortOrder, onSort, isAuthenticated }: TableHeaderProps) => {
  return (
    <Box
      width="100%"
      display="flex"
      bg="gray.50"
      fontWeight="bold"
      borderBottom="1px"
      borderColor="gray.200"
    >
      {columns.map(({ key, label, flexBasis, sortable }) => (
        <Box
          key={key}
          p={4}
          textAlign="left"
          flexBasis={flexBasis}
          cursor={sortable ? 'pointer' : 'default'}
          onClick={sortable ? () => onSort(key) : undefined}
        >
          {label}
          {sortable && <SortIcon columnKey={key} sortBy={sortBy} sortOrder={sortOrder} />}
        </Box>
      ))}
      
      {isAuthenticated && (
        <Box p={4} textAlign="left" flexBasis="15%">
          Actions
        </Box>
      )}
    </Box>
  );
};

export default TableHeader; 