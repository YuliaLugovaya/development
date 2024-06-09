import React, { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styles } from "./PortfolioCard.styled";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageState, initialState } from "store/languages/languagesTypes";
import { IPortfolioCardProps } from "./PortfolioCardTypes";

export const PortfolioCard: FC<IPortfolioCardProps> = ({ data }) => {
  const currentLanguage = useSelector(
    (rootReducer: { languages: LanguageState }) =>
      rootReducer.languages
        ? rootReducer.languages.language
        : initialState.language,
  );
  return (
    <Card
      component="a"
      href={data.externalLink}
      sx={styles.portfolioCardWrapper}
      target="_blank"
    >
      <CardMedia component="img" alt="portfolio" image={data.imageUrl} />
      <CardContent>
        <Typography sx={styles.portfolioCardDescription}>
          {currentLanguage === "en" ? data.descriptionEn : data.descriptionRu}
        </Typography>
        <Typography sx={styles.portfolioCardStack}>{data.stack}</Typography>
        <Button sx={styles.portfolioCardButton}>
          {currentLanguage === "en" ? "View" : "Смотреть"}
        </Button>
      </CardContent>
    </Card>
  );
};
