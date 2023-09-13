import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import ImageService from "../../Services/ImageService";
import { useContext } from "react";
import ActiveUserContext from "../../Contexts/ActiveUserContext";

export default function CreateImage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(ActiveUserContext);

  const formik = useFormik({
    initialValues: {
      image: "",
      description: "",
    },
    onSubmit: (values) => {
      handleSubmit(values.image, values.description);
    },
  });

  const handleSubmit = (image:string, description:string) => {
    if(context.user){ImageService.createImage({ image:image, description:description, author:context.user})
      .then((response) => {
        console.log("response", response);
        navigate("/");
      })
      .catch((e) => {
        postMessage(e.response.data);
      });}
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <h1>New Image</h1>
        <label htmlFor="image">Image</label>
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
      <button type="submit">add</button>
      <button  > <a href="/"/>cancel</button>

    </form>
  );
}