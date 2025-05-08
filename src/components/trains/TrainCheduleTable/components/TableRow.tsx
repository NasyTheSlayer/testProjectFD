import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react';
import { Train } from '@/types/train';
import { columns } from '../constants/constants';
import { deleteButtonStyle, gradientButtonStyle } from '@/styles/tables/buttonStyles';

interface TableRowProps {
  index: number;
  style: React.CSSProperties;
  train: Train;
  isAuthenticated: boolean;
  onEdit: (train: Train) => void;
  onDelete: (id: string) => void;
}

const TableRow = ({ index, style, train, isAuthenticated, onEdit, onDelete }: TableRowProps) => {
  return (
    <Box
      as="tr"
      key={train.id}
      _hover={{ bg: 'gray.50' }}
      borderBottom="1px"
      borderColor="gray.200"
      style={style}
      display="flex"
      width="100%"
    >
      {columns.map(({ key, flexBasis, formatter, fontWeight }) => (
        <Box 
          as="td" 
          key={key} 
          p={4} 
          flexBasis={flexBasis}
          fontWeight={fontWeight}
        >
          {formatter ? formatter(train[key]) : train[key]}
        </Box>
      ))}
      
      {isAuthenticated && (
        <Box as="td" p={4} flexBasis="15%">
          <Flex gap={2}>
            <Button
              size="sm"
              {...gradientButtonStyle}
              onClick={() => onEdit(train)}
              borderRadius="md"
            >
              Edit
            </Button>
            <Button
              size="sm"
              {...deleteButtonStyle}
              onClick={() => onDelete(train.id)}
              borderRadius="md"
            >
              Delete
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default TableRow; 