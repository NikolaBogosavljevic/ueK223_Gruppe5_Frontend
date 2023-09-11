import api from '../config/Api';
import { User } from '../types/models/User.model';
export type Image_Post = {
  id: number;
  image: string;
  description: string;
  likes: number;
  author: User;
};

type AddImageRequest = {
  image: string;
  description: string | null;
 
 
};
const ImageService = {
  getImage: async (imageID: string): Promise<Image_Post> => {
    const { data } = await api.get<Image_Post>(`/imagepost/${imageID}`);
    return data;
  },

  updateImage: (image: Image_Post) => {
    return api.put(`/imagepost/${image.id}`, image);
  },

  createImage: async (params: AddImageRequest) => {
    const res = await api.post("/imagepost/", params);
    if (res && res.status === 200) {
      console.log("image successfully created");
    }
  },

  getAllImages: async () => {
    try {
      const response = await api.get("/imagepost/");
      return response.data;
    } catch (error) {
      console.error("ERRORRRRRRRR", error);
      return [];
    }
  },


};

export default ImageService;
