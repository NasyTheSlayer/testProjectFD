import { Icon } from '@chakra-ui/react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import { SortIconProps } from '../inerfaces/SortIconProps';

interface SortIconComponentProps extends SortIconProps {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

const SortIcon = ({ columnKey, sortBy, sortOrder }: SortIconComponentProps) => {
  if (sortBy !== columnKey) {
    return <Icon as={FaSortUp} color="gray.300" ml={1} />;
  }
  return (
    <Icon 
      as={sortOrder === 'asc' ? FaSortUp : FaSortDown} 
      color="orange.400" 
      ml={1} 
    />
  );
};

export default SortIcon; 