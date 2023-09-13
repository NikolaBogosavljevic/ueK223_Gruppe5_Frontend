import api from '../config/Api';
import { User } from '../types/models/User.model';
export type Image_Post = {
  id: string;
  image: string;
  description: string;
  likes: number;
  author: User;
};

type AddImageRequest = {
  image: string;
  description: string | null;
 author: User;
 
};
const ImageService = {

  updateImage: async (params: Image_Post) => {
    const res = await api.put(`/imagepost/${params.id}`, {...params,"Image": params.image, "Description": params.description});
    if (res && res.status === 200) {
      console.log("image successfully updated");
    }
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
  getImageById: async (imageId: string) => {
    const data = await api.get(`/imagepost/${imageId}`);
    console.log(data);
    return data.data;
  },

  deleteImage: (image: Image_Post) => {
    return api.delete(`/image/${image.id}`);
  },
};

export default ImageService;
