import {
  Flex,
  Button,
  Text,
  Stack
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { gradientButtonStyle } from '@/styles/tables/buttonStyles';

interface PaginationProps {
  page: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export default function Pagination({
  page,
  totalPages,
  onNextPage,
  onPrevPage
}: PaginationProps) {
  return (
    <Flex justifyContent="center" mt={6} mb={4}>
      <Stack direction="row" gap={4} align="center">
        <Button 
          onClick={onPrevPage} 
          disabled={page <= 1}
          {...gradientButtonStyle}
          borderRadius="md"
          size="sm"
        >
          <FaChevronLeft style={{marginRight: '8px'}} /> Previous
        </Button>
        
        <Text fontWeight="medium" minW="100px" textAlign="center">
          Page {page} of {totalPages}
        </Text>
        
        <Button 
          onClick={onNextPage} 
          disabled={page >= totalPages}
          {...gradientButtonStyle}
          borderRadius="md"
          size="sm"
        >
          Next <FaChevronRight style={{marginLeft: '8px'}} />
        </Button>
      </Stack>
    </Flex>
  );
} 