import api from '@/lib/api/axios';

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user?: {
    id: number;
    name: string;
    email: string;
  };
};

export async function login(payload: LoginRequest): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/api/login', payload);

  return response.data;
}
