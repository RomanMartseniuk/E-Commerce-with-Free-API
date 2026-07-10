import axios from "axios";
import { toast } from "sonner";

export const api = axios.create({
   baseURL: "https://api.escuelajs.co/api/v1",
   timeout: 10000,
});

api.interceptors.response.use(
   (response) => response,
   (error) => {
      if (error.code === "ECONNABORTED") {
         error.message = "Request timeout";
      } else if (!error.response) {
         error.message = "Network error";
      } else {
         error.message =
            error.response.data?.message ??
            "Something went wrong";
      }

      return Promise.reject(error);
   }
);


export async function request<T>(url: string): Promise<T> {
   try {
      const { data } = await api.get<T>(url);
      return data;
   } catch (error) {
      if (axios.isAxiosError(error)) {
         toast.error("Error", {
            description: error.message,
         });
      } else {
         toast.error("Error", {
            description: "Unknown error",
         });
      }

      throw error;
   }
}