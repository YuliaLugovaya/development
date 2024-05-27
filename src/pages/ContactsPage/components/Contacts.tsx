import React, { FC } from "react";
import { Box, Button, CardMedia } from "@mui/material";
import { styles } from "./Contacts.styled";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { LanguageState, initialState } from "store/languages/languagesTypes";

export const Contacts: FC = () => {
  const navigate = useNavigate();
  const goToPortfolio = () => {
    navigate(`${routes.home.root}/${routes.home.portfolio}`);
  };
  const currentLanguage = useSelector(
    (rootReducer: { languages: LanguageState }) =>
      rootReducer.languages
        ? rootReducer.languages.language
        : initialState.language,
  );

  return (
    <Box sx={styles.portfolioContainer}>
      <Box>Contacts</Box>
      {/* <Box>
        {" "}
        {currentLanguage === "en"
          ? "Some of my recent work"
          : "Некоторые из моих недавних работ"}
      </Box>
      <Button onClick={goToPortfolio} sx={styles.homeButton}>
        {currentLanguage === "en" ? "More works" : "Больше работ"}
      </Button> */}
    </Box>
  );
};
