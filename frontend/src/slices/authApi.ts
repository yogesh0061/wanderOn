import apiClient from "../apiClient";

export interface credentials {
  email: string;
  password: string;
}

export interface signupCredentials {
  email: string;
  name: string;
  password: string;
}


export const loginApi = async (credentials: credentials) => {
  const response = await apiClient.post("api/auth/signin", credentials);
  
  return response.data;
};

export const signupApi = async (credentials: signupCredentials) => {
  const response = await apiClient.post("api/auth/signup", credentials);
  
  return response.data;
};

export const verifyToken = async () => {
  const response = await apiClient.post("api/auth/verifyToken");
  
  return response.data;
};



