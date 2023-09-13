import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserService from "../../../Services/UserService";
import { User } from "../../../types/models/User.model";
import NavBar from "../../atoms/NavBar";
import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import ImageService, { Image_Post } from "../../../Services/ImageService";
import LikeButton from "../../atoms/LikeButton";

const UserPosts = ()=> {
    const{id}=useParams();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        UserService.getUser(id ?? "").then((data) => {
         setUser(data);
        });
      }, []);

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


     
    return(
        <div>
            <NavBar />
            {
            <Box>
              
            </Box>
}
        </div>
    )
}


export default UserPosts;