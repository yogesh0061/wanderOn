import apiClient from "../apiClient";

export interface credentials {
  userName: string;
  password: string;
}


export const loginApi = async (credentials: credentials) => {
  const response = await apiClient.post("/login", credentials);
  
  return response.data;
};



