import { 
  Input, 
  Button, 
  Flex,
  Box
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import { gradientButtonStyle } from '@/styles/tables/buttonStyles';

const MotionBox = motion(Box);

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortBy: string | null;
  resetSort: () => void;
  isAuthenticated: boolean;
  handleAdd: () => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  sortBy,
  resetSort,
  isAuthenticated,
  handleAdd
}: SearchBarProps) {
  return (
    <MotionBox
      initial={{y: -50, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: 0.5}}
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="sm"
      mb={6}
    >
      <Flex gap={4} mb={4}>
        <Input
          placeholder="Search by train number or departure..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          flex={1}
        />
        {sortBy && (
          <Button
            onClick={resetSort}
            colorScheme="blue"
            variant="outline"
            ml={2}
          >
            Reset Sort
          </Button>
        )}
        {isAuthenticated && (
          <Button
            {...gradientButtonStyle}
            onClick={handleAdd}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="md"
          >
            <FaPlus style={{marginRight: '8px'}}/>
            Add New Schedule
          </Button>
        )}
      </Flex>
    </MotionBox>
  );
} 