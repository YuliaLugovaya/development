import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "./PageFooter.styled";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { routes } from "config/routes";
import { useSelector } from "react-redux";
import { LanguageState, initialState } from "store/languages/languagesTypes";

export const PageFooter: FC = () => {
  const today = new Date();
  const todayDate = format(today, "yyyy", { locale: ru });

  const currentLanguage = useSelector(
    (rootReducer: { languages: LanguageState }) =>
      rootReducer.languages
        ? rootReducer.languages.language
        : initialState.language,
  );

  return (
    <Box sx={styles.footerWrapper} component="footer">
      <Box
        component="a"
        sx={styles.footerLink}
        href="https://github.com/YuliaLugovaya"
        target="_blank"
        rel="noreferrer"
      >
        &copy; {todayDate}{" "}
        {currentLanguage === "en" ? "Yulia Lugovaya" : "Юлия Луговая"} (GitHub)
      </Box>
      <Box sx={styles.footerLinks}>
        <Link to={routes.home.root}>
          <Typography sx={styles.footerLink}>
            {currentLanguage === "en" ? "main" : "главная"}
          </Typography>
        </Link>
        <Link to={routes.home.portfolio}>
          <Typography sx={styles.footerLink}>
            {currentLanguage === "en" ? "portfolio" : "портфолио"}
          </Typography>
        </Link>
        <Link to={routes.home.about}>
          <Typography sx={styles.footerLink}>
            {currentLanguage === "en" ? "about" : "обо мне"}
          </Typography>
        </Link>
        <Link to={routes.home.contacts}>
          <Typography sx={styles.footerLink}>
            {currentLanguage === "en" ? "contacts" : "контакты"}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
