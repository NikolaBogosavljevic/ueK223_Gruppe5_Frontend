import { AxiosInstance } from "axios";
import { User } from "../types/models/User.model";
import api from "../config/Api";
export type Image_Post = {
  id: number;
  image: string;
  description: string;
  likes: number;
  author: User;
};
const ImageService = {
  getImage: async () => {
    try {
      const response = await api.get("/imagepost/getAll");
      return response.data;
    } catch (error) {
      console.error("ERRORRRRRRRR", error);
      return [];
    }
  }
};
export default ImageService;
