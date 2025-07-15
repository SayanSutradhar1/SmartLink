import type { ApiResponse } from "@/interfaces/api.interface";
import axios from "axios";

const CLIENT_BASE_URL = import.meta.env.VITE_SWALAY_CLIENT!;

export const apiGet = async (endPoint: string) => {
  try {
    const axiosResponse = await axios.get<ApiResponse>(`${CLIENT_BASE_URL}${endPoint}`);
    return axiosResponse.data
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: "Internal Server Error",
      error: (error as Error).message,
    } as ApiResponse
  }
};
