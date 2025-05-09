export interface Train {
  id: string;
  number: string;
  departure: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  carrier: string;
}

export interface Meta {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export type TrainsScheduleData = {
  data: {
    items: Train[];
    meta: Meta;
  };
};
