import axiosInstance from "./axiosInstance";

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/api/Authenticatio/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (
  userName: string,
  email: string,
  password: string,
) => {
  try {
    const isAdmin = true;
    const response = await axiosInstance.post("/api/User/register", {
      userName,
      email,
      password,
      isAdmin,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
