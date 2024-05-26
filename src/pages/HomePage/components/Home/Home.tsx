import React, { FC } from "react";
import { Box, Button, CardMedia } from "@mui/material";
import { styles } from "./Home.styled";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home: FC = () => {
  // const navigate = useNavigate();
  // const goCalendar = () => {
  //   navigate(`${routes.home.root}/${routes.home.calendar}`);
  // };

  return (
    <Box sx={styles.homeContainer}>
      Домашняя
      {/* <Button onClick={goCalendar} sx={styles.homeButton}>
        Перейти в календарь
      </Button> */}
    </Box>
  );
};
