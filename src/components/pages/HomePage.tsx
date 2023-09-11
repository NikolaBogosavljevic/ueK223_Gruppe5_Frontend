import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageService, { Image_Post } from "../../Services/ImageService";
import NavBar from "../atoms/NavBar";
import LikeButton from "../atoms/LikeButton";
import { User } from "../../types/models/User.model";
import { useContext } from "react";
import ActiveUserContext from "../../Contexts/ActiveUserContext";

export default function Homepage() {
  const context = useContext(ActiveUserContext);

  const [images, setImage] = React.useState([]);
  React.useEffect(() => {
    const service = ImageService;
    service
      .getAllImages()
      .then((data: React.SetStateAction<never[]>) => {
        console.log(data);
        setImage(data);
      })
      .catch((error: any) => {
        console.error("Fehler beim Abrufen der Bilder: ", error);
      });
  }, []);

  function userCanEditPost(post:Image_Post, user:User){
    if(post.author ){
    return user.id === post.author.id ||
    context.checkRole("ADMIN")
    }
  }

  return (
    <div>
      <NavBar />
      {
        <Box>
          <Grid container spacing={1}>
            {images.map((image: Image_Post, index) => (
              <Grid
                item
                key={index}
                xs={2}
                marginTop={"10px"}
                marginLeft={"45px"}
              >
                <Paper elevation={0} sx={{ padding: 2 }}>
                  <img
                    src={image.image}
                    alt={`Bild ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "0px",
                      padding: "1px",
                      margin: "10px",
                    }}
                  />
                  <p> {image.author ? image.author.firstName: "undefined"} </p>

                  <p> {image.description} </p>

                  <LikeButton />
               {context.user && userCanEditPost(image, context.user ) &&   <button>test</button>} 
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      }
    </div>
  );
}




