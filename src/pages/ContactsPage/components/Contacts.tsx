import React, { FC } from "react";
import {
  Box,
  CardMedia,
  List,
  ListItem,
  Typography,
  Link,
} from "@mui/material";
import { styles } from "./Contacts.styled";
import { useSelector } from "react-redux";
import { LanguageState, initialState } from "store/languages/languagesTypes";
import contacts from "assets/images/png/contacts.png";
import whatsapp from "assets/images/png/whatsapp2.png";
import linkedin from "assets/images/png/linkedin.png";
import instagram from "assets/images/png/instagram2.png";
import email from "assets/images/png/e-mail2.png";
import viber from "assets/images/png/viber.png";
import github from "assets/images/png/github.png";
import phone from "assets/images/png/phone.png";

export const Contacts: FC = () => {
  const currentLanguage = useSelector(
    (rootReducer: { languages: LanguageState }) =>
      rootReducer.languages
        ? rootReducer.languages.language
        : initialState.language,
  );

  return (
    <Box sx={styles.contactsWrapper}>
      <Box sx={styles.contactsContainer} component="section">
        <Box sx={styles.contactsDescription}>
          <Typography sx={styles.contactsTitle}>
            {currentLanguage === "en" ? "contacts" : "контакты"}
          </Typography>
          <Typography sx={styles.contactsSubtitle}>
            {currentLanguage === "en"
              ? "Get in touch with me via social media, messengers or e-mail."
              : "Свяжитесь со мной через соцсети, мессенджеры или e-mail."}
          </Typography>
          <Box>
            <List sx={styles.contactsSocialsWrapper}>
              <Link
                sx={{ ...styles.contactsSocialsLink, color: "#30bf2f" }}
                href="https://https://wa.me/375291521880"
                target="_blank"
                component="a"
              >
                <ListItem sx={styles.contactsSocialsItem}>
                  <CardMedia
                    component="img"
                    alt="whatsapp"
                    image={whatsapp}
                    sx={styles.contactsIcon}
                  />
                  <Typography>WhatsApp</Typography>
                </ListItem>
              </Link>
              <Link
                sx={{ ...styles.contactsSocialsLink, color: "#7360f2" }}
                href="viber://chat?number=%2B375291521880"
                target="_blank"
              >
                <ListItem sx={styles.contactsSocialsItem}>
                  <CardMedia
                    component="img"
                    alt="viber"
                    image={viber}
                    sx={styles.contactsIcon}
                  />
                  <Typography>Viber</Typography>
                </ListItem>
              </Link>
              <Link
                sx={{ ...styles.contactsSocialsLink, color: "#0172b1" }}
                href="https://www.linkedin.com/in/yulialugovaya/"
                target="_blank"
              >
                <ListItem sx={styles.contactsSocialsItem}>
                  <CardMedia
                    component="img"
                    alt="linkedin"
                    image={linkedin}
                    sx={styles.contactsIcon}
                  />
                  <Typography>LinkedIn</Typography>
                </ListItem>
              </Link>
              <Link
                sx={{ ...styles.contactsSocialsLink, color: "#ed7c8f" }}
                href="https://www.instagram.com/yulia.lugovaya/"
                target="_blank"
              >
                <ListItem sx={styles.contactsSocialsItem}>
                  <CardMedia
                    component="img"
                    alt="instagram"
                    image={instagram}
                    sx={styles.contactsIcon}
                  />
                  <Typography>Instagram</Typography>
                </ListItem>
              </Link>
            </List>
          </Box>
        </Box>
        <Box sx={styles.contactsImage}>
          <CardMedia
            component="img"
            alt="contacts"
            image={contacts}
          ></CardMedia>
        </Box>
      </Box>
      <Box component="section">
        <List sx={styles.contactsOtherContacts}>
          <ListItem sx={styles.contactsOtherContactsItem}>
            <CardMedia
              component="img"
              alt="phone"
              image={phone}
              sx={styles.contactsIcon}
            />
            <Typography>+375291521880</Typography>
          </ListItem>
          <ListItem sx={styles.contactsOtherContactsItem}>
            <CardMedia
              component="img"
              alt="email"
              image={email}
              sx={styles.contactsIcon}
            />
            <Typography>yulialugovaya9.12@gmail.com</Typography>
          </ListItem>
          <Link
            sx={styles.contactsOtherContactsLink}
            href="https://github.com/YuliaLugovaya"
            target="_blank"
          >
            <ListItem sx={styles.contactsOtherContactsGithub}>
              <CardMedia
                component="img"
                alt="github"
                image={github}
                sx={styles.contactsIcon}
              />
              <Typography sx={styles.contactsGithub}>
                YuliaLugovaya (Github)
              </Typography>
            </ListItem>
          </Link>
        </List>
      </Box>
    </Box>
  );
};
