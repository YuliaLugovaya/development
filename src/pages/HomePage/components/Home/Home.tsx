import React, { FC } from "react";
import { Box, Button, CardMedia, Divider, Typography } from "@mui/material";
import { styles } from "./Home.styled";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { LanguageState, initialState } from "store/languages/languagesTypes";
import welcome from "assets/images/photos/welcome.jpg";
import { portfolioData } from "config/portfolio";
import { PortfolioCard } from "pages/PortfolioPage/components/PortfolioCard/PortfolioCard";

export const Home: FC = () => {
  const navigate = useNavigate();
  const goToPortfolio = () => {
    navigate(`${routes.home.root}/${routes.home.portfolio}`);
  };
  const goToAbout = () => {
    navigate(`${routes.home.root}/${routes.home.about}`);
  };
  const currentLanguage = useSelector(
    (rootReducer: { languages: LanguageState }) =>
      rootReducer.languages
        ? rootReducer.languages.language
        : initialState.language,
  );

  return (
    <Box sx={styles.homeContainer}>
      <Box sx={styles.homeWelcome} component="section">
        <Box sx={styles.homeWelcomeDescription}>
          <Typography sx={styles.homeTitle}>
            {currentLanguage === "en" ? "front-end" : "front-end"}
          </Typography>
          <Typography sx={styles.homeSubtitle}>
            {currentLanguage === "en"
              ? "Developer's portfolio site. I create websites and web applications using clean and efficient code."
              : "Сайт-портфолио разработчика. Создаю сайты и веб-приложения с помощью чистого и эффективного кода."}
          </Typography>
          <Button
            onClick={goToAbout}
            sx={{ ...styles.homeButton, alignSelf: "start" }}
          >
            {currentLanguage === "en" ? "More about me" : "Больше обо мне"}
          </Button>
        </Box>
        <Box sx={styles.homeImage}>
          <CardMedia component="img" alt="photo" image={welcome}></CardMedia>
        </Box>
      </Box>
      <Box sx={styles.homeWorksWrapper} component="section">
        <Divider>
          <Typography sx={styles.homeSubtitle}>
            {" "}
            {currentLanguage === "en"
              ? "Some of my recent work"
              : "Некоторые из моих недавних работ"}
          </Typography>
        </Divider>
        <Box sx={styles.homeCardsWrapper}>
          <Box sx={styles.homeCardsContainer}>
            {portfolioData.slice(0, 3).map((card) => (
              <Box key={card.id} sx={styles.homeCards}>
                <PortfolioCard data={card} />
              </Box>
            ))}
          </Box>
        </Box>
        <Button onClick={goToPortfolio} sx={styles.homeButton}>
          {currentLanguage === "en" ? "More works" : "Больше работ"}
        </Button>
      </Box>
    </Box>
  );
};
