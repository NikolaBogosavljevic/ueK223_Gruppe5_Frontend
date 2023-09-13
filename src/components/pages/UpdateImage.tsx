import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import ImageService, { Image_Post } from "../../Services/ImageService";
import { useEffect, useState } from "react";
import React from "react";


export default function UpdateImage(){
  const{imageId}=useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState<Image_Post[]>([]);

const formik = useFormik({
  initialValues: {
      id: imageId??"",
  image: "",
  description: ""
  },
  onSubmit: (values) => {
    handleSubmit(values.image, values.description);
  },
});

useEffect(() => {
    ImageService.getImageById(imageId ?? "").then((data) => {
     setImages(data);
     console.log(images)
      formik.setValues({
        id: imageId ?? "",
        image: data.image, 
        description: data.description, 
      });
    });
  }, []);

  
const handleSubmit = (image:string,description:string)=>{
    console.log("test",imageId)
    ImageService.updateImage({
        id: imageId??"", image: image, description: description,
        likes: 0,
        author: {
            id: "",
            email: "",
            firstName: "",
            lastName: "",
            roles: []
        }
        })
     .then((response) => {
        console.log("response", response);
        navigate(`/editimage/${imageId}`);
      })
      .catch((e) => {
        postMessage(e.response.data);
      });
  }
return(
    <form onSubmit={formik.handleSubmit}>
      <div>
        <h1>Update Image</h1>
        <label htmlFor="image">image</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
      </div>
      <button type="submit">send</button>
    </form>
);
}