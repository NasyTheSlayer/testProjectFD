export interface ApiResponse<T = unknown> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
  error?: string;
  timestamp: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}
