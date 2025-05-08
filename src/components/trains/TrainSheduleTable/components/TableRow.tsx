import { Box, Flex, Button } from '@chakra-ui/react';
import { Train } from '@/types/train';
import { RowProps } from '../inerfaces/RowProps';
import { deleteButtonStyle, gradientButtonStyle } from '@/styles/tables/buttonStyles';
import { columns } from '../constants/constants';

interface TableRowProps extends RowProps {
  trains: Train[];
}

const TableRow = ({ index, style, trains, onEdit, onDelete, isAuthenticated }: TableRowProps) => {
  if (index >= trains.length) return null;
  const train = trains[index];

  return (
    <Flex
      key={train.id}
      _hover={{ bg: 'gray.50' }}
      borderBottom="1px"
      borderColor="gray.200"
      style={style}
      width="100%"
    >
      {columns.map(({ key, basis, formatter }) => (
        <Box key={key} p={4} flexBasis={basis}>
          {formatter ? formatter(train[key]) : train[key]}
        </Box>
      ))}

      {isAuthenticated && (
        <Box p={4} flexBasis="15%">
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
    </Flex>
  );
};

export default TableRow; 