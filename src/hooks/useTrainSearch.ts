import {useState} from 'react';
import {Train} from '../types/train';

interface UseTrainSearchProps {
  data: Train[]
}

export function useTrainSearch({data}: UseTrainSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const resetSort = () => {
    setSortBy(null);
    setSortOrder('asc');
  };

  const filteredTrains = data?.filter(train =>
    train.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.departure.toLowerCase().includes(searchTerm.toLowerCase()) ||
    train.destination.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const sortedTrains = sortBy 
    ? [...filteredTrains].sort((a, b) => {
        if (sortBy === 'departureTime' || sortBy === 'arrivalTime') {
          const aDate = new Date(a[sortBy]).getTime();
          const bDate = new Date(b[sortBy]).getTime();
          return sortOrder === 'asc' ? aDate - bDate : bDate - aDate;
        } else if (sortBy === 'departureStation') {
          return sortOrder === 'asc'
            ? a.departure.localeCompare(b.departure)
            : b.departure.localeCompare(a.departure);
        } else if (sortBy === 'arrivalStation') {
          return sortOrder === 'asc'
            ? a.destination.localeCompare(b.destination)
            : b.destination.localeCompare(a.destination);
        } else {
          return sortOrder === 'asc'
            ? a[sortBy].toString().localeCompare(b[sortBy].toString())
            : b[sortBy].toString().localeCompare(a[sortBy].toString());
        }
      })
    : filteredTrains;

  return {
    searchTerm,
    setSearchTerm,
    sortBy,
    sortOrder,
    handleSort,
    resetSort,
    sortedTrains
  };
}
