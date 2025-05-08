import api from './axios';
import {Train, TrainsScheduleData} from '../types/train';

export async function fetchTrains(page: number = 1): Promise<TrainsScheduleData> {
  const res = await api.get(`/trains/?page=${page}`);
  return res.data;
}
