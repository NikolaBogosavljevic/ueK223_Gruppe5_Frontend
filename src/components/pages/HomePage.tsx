import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageService, { Image_Post } from "../../Services/ImageService";
import NavBar from "../atoms/NavBar";
import LikeButton from "../atoms/LikeButton";

export default function Homepage() {
  const [images, setImage] = React.useState([]);
  React.useEffect(() => {
    const service = ImageService;
    service
      .getImage()
      .then((data: React.SetStateAction<never[]>) => {
        console.log(data);
        setImage(data);
      })
      .catch((error: any) => {
        console.error("Fehler beim Abrufen der Bilder: ", error);
      });
  }, []);
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
                  <p> {image.author.firstName} </p>

                  <p> {image.description} </p>

                  <LikeButton />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      }
    </div>
  );
}
