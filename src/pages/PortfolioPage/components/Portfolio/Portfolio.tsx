import React, { FC } from "react";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import { styles } from "./Portfolio.styled";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageState, initialState } from "store/languages/languagesTypes";
import { PortfolioCard } from "../PortfolioCard/PortfolioCard";
import { portfolioData } from "config/portfolio";
import portfolio from "assets/images/photos/portfolio.jpg";

export const Portfolio: FC = () => {
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
      <Box sx={styles.portfolioWelcome} component="section">
        <Box sx={styles.portfolioWelcomeDescription}>
          <Typography sx={styles.portfolioTitle}>
            {currentLanguage === "en" ? "portfolio" : "портфолио"}
          </Typography>
          <Typography sx={styles.portfolioSubtitle}>
            {currentLanguage === "en"
              ? "Check out some of my projects case studies."
              : "Посмотрите примеры некоторых моих проектов."}
          </Typography>
          <Typography sx={styles.portfolioText}>
            {currentLanguage === "en"
              ? "I developed a wide variety of projects including web sites, spa applications and web games. All works are adaptable for different screens."
              : "Я разрабатывала самые разные проекты, включая веб-сайты, spa-приложения и веб-игры. Все работы адаптивны под разные экраны."}
          </Typography>
        </Box>
        <Box sx={styles.portfolioImage}>
          <CardMedia component="img" alt="photo" image={portfolio}></CardMedia>
        </Box>
      </Box>
      <Box sx={styles.portfolioCardsWrapper}>
        <Box sx={styles.portfolioCardsContainer}>
          {portfolioData.map((card) => (
            <Box key={card.id} sx={styles.portfolioCards}>
              <PortfolioCard data={card} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
