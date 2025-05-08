import { 
  Box, 
  Text 
} from '@chakra-ui/react';
import { Select } from '@chakra-ui/select';
import {
  FormControl, 
  FormLabel, 
  FormErrorMessage
} from '@chakra-ui/form-control';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TrainScheduleFormData } from '@/libs/validation/trainSheduleSchema';

interface CitySelectFieldProps {
  name: 'departure' | 'destination';
  label: string;
  register: UseFormRegister<TrainScheduleFormData>;
  errors: FieldErrors<TrainScheduleFormData>;
  value: string;
  cities: string[];
}

export default function CitySelectField({
  name,
  label,
  register,
  errors,
  value,
  cities
}: CitySelectFieldProps) {
  return (
    <FormControl isInvalid={!!errors[name]} flex="1">
      <FormLabel fontWeight="medium" textAlign="center">{label}</FormLabel>
      <Box
        borderRadius="md"
        overflow="hidden"
        boxShadow="sm"
        border="1px solid"
        borderColor="gray.300"
        height="56px"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        position="relative"
      >
        <Box position="absolute" left="10px" top="50%" transform="translateY(-50%)" zIndex={2} color="gray.500">
          <FaMapMarkerAlt/>
        </Box>
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          pointerEvents="none"
        >
          <Text color={value ? "black" : "gray.500"}>{value || "Select city"}</Text>
        </Box>
        <Select
          style={{width: "100%", height: "100%", padding: "50px"}}
          {...register(name, {required: `${label} location is required`})}
          placeholder="Select city"
          position="absolute"
          top="0"
          left="0"
          opacity="0"
          cursor="pointer"
          zIndex={3}
        >
          {cities.map((city, index) => (
            <option key={`${name}-${city}-${index}`} value={city}>{city}</option>
          ))}
        </Select>
      </Box>
      {errors[name] && <FormErrorMessage>{errors[name]?.message?.toString()}</FormErrorMessage>}
    </FormControl>
  );
} 