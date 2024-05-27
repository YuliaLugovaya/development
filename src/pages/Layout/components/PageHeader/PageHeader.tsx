import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styles } from "./PageHeader.styled";
import { Link, useLocation } from "react-router-dom";
import { routes } from "config/routes";
import burger from "assets/images/png/burger-menu.png";
import close from "assets/images/png/close.png";
import { LanguageState, initialState } from "store/languages/languagesTypes";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "store/languages/languagesActions";

export const PageHeader: FC = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(routes.home.root);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    setActiveLink(routes.home.root);
  }, []);

  const isActiveLink = (path: string) => {
    return activeLink.endsWith(path) ? "color.grey" : "text.secondary";
  };

  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (rootReducer: { languages: LanguageState }) =>
      rootReducer.languages
        ? rootReducer.languages.language
        : initialState.language,
  );

  const languageChange = (language: string) => {
    dispatch(switchLanguage(language));
  };

  return (
    <Box sx={styles.headerWrapper} component="header">
      <Box sx={styles.headerContainer}>
        <Link to={routes.home.root}>
          <Box sx={styles.headerLogoContainer}>
            <Typography sx={styles.headerLogo}>
              {currentLanguage === "en" ? "Yulia Lugovaya" : "Юлия Луговая"}
            </Typography>
          </Box>
        </Link>
        {isMobile ? (
          <Box>
            <CardMedia
              sx={styles.headerIcon}
              component="img"
              image={burger}
              alt="Burger-menu"
              onClick={toggleDrawer}
            />
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              sx={styles.burgerMenu}
            >
              <CardMedia
                sx={styles.headerIconClose}
                component="img"
                image={close}
                alt="Close"
                onClick={toggleDrawer}
              />
              <Box sx={styles.headerLinksBurgerContainer}>
                <Link onClick={toggleDrawer} to={routes.home.root}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.root),
                    }}
                  >
                    {currentLanguage === "en" ? "main" : "главная"}
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.home.portfolio}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.portfolio),
                    }}
                  >
                    {currentLanguage === "en" ? "portfolio" : "портфолио"}
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.home.about}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.about),
                    }}
                  >
                    {currentLanguage === "en" ? "about" : "обо мне"}
                  </Typography>
                </Link>
                <Link onClick={toggleDrawer} to={routes.home.contacts}>
                  <Typography
                    sx={{
                      ...styles.headerLinksBurger,
                      color: isActiveLink(routes.home.contacts),
                    }}
                  >
                    {currentLanguage === "en" ? "contacts" : "контакты"}
                  </Typography>
                </Link>
              </Box>
            </Drawer>
          </Box>
        ) : (
          <Box sx={styles.headerLinksContainer}>
            <Link to={routes.home.root}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.root),
                }}
              >
                {currentLanguage === "en" ? "main" : "главная"}
              </Typography>
            </Link>
            <Link to={routes.home.portfolio}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.portfolio),
                }}
              >
                {currentLanguage === "en" ? "portfolio" : "портфолио"}
              </Typography>
            </Link>
            <Link to={routes.home.about}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.about),
                }}
              >
                {currentLanguage === "en" ? "about" : "обо мне"}
              </Typography>
            </Link>
            <Link to={routes.home.contacts}>
              <Typography
                sx={{
                  ...styles.headerLinks,
                  color: isActiveLink(routes.home.contacts),
                }}
              >
                {currentLanguage === "en" ? "contacts" : "контакты"}
              </Typography>
            </Link>
          </Box>
        )}
        <Box sx={styles.headerLanguages}>
          <Button
            onClick={() => languageChange("en")}
            disabled={currentLanguage === "en"}
            sx={styles.headerLanguage}
          >
            EN
          </Button>
          <Button
            onClick={() => languageChange("ru")}
            disabled={currentLanguage === "ru"}
            sx={styles.headerLanguage}
          >
            RU
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
