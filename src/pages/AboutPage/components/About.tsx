import React, { FC } from "react";
import { Box, CardMedia, List, ListItem, Typography } from "@mui/material";
import { styles } from "./About.styled";
import { useSelector } from "react-redux";
import { LanguageState, initialState } from "store/languages/languagesTypes";
import photo from "assets/images/photos/yulia_lugovaya.jpg";
import { CChart } from "@coreui/react-chartjs";

export const About: FC = () => {
  const currentLanguage = useSelector(
    (rootReducer: { languages: LanguageState }) =>
      rootReducer.languages
        ? rootReducer.languages.language
        : initialState.language,
  );

  return (
    <Box sx={styles.aboutContainer}>
      <Box sx={styles.aboutWelcome} component="section">
        <Box sx={styles.aboutWelcomeDescription}>
          <Typography sx={styles.aboutTitle}>
            {currentLanguage === "en" ? "about" : "обо мне"}
          </Typography>
          <Typography sx={styles.aboutSubtitle}>
            {currentLanguage === "en"
              ? "I'm a front-end developer based in Gomel, Belarus."
              : "Я фронтенд-разработчик из Гомеля, Беларусь."}
          </Typography>
          <Typography sx={styles.aboutText}>
            {currentLanguage === "en"
              ? "Since 2022, I've enjoyed building beautiful and intuitive websites and web apps. When I'm not writing code, I like to take photos of people and nature, study history and play the piano and guitar."
              : "С 2022 года мне нравится создавать красивые и интуитивно понятные сайты и веб-приложения. Когда я не пишу код, то люблю фотографировать людей и природу, изучать историю и играть на пианино и гитаре."}
          </Typography>
          {/* <Box>
          </Box> */}
        </Box>
        <Box sx={styles.aboutImage}>
          <CardMedia component="img" alt="photo" image={photo}></CardMedia>
        </Box>
      </Box>
      <Box component="section" sx={styles.aboutSkillsWrapper}>
        <Box sx={styles.aboutSkills}>
          <Box sx={styles.aboutSkillsPart}>
            <Typography sx={styles.aboutSkillsListTitle}>
              Soft skills
            </Typography>
            <List sx={styles.aboutSkillsList}>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "Ability to work in a team to achieve a common goal"
                  : "Умение работать в команде для достижения общей цели"}
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "Self-learning ability, desire for self-development"
                  : "Способность к самообучению, стремление к саморазвитию"}
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "Diligence and responsibility"
                  : "Трудолюбие и ответственность"}
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "Sociability and friendliness"
                  : "Общительность и дружелюбие"}
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "Analytical thinking and ability to find effective solutions"
                  : "Аналитическое мышление и способность находить эффективные решения"}
              </ListItem>
            </List>
          </Box>
          <Box sx={styles.aboutChart}>
            <CChart
              type="pie"
              data={{
                // labels: ["Soft skills", "Hard skills"],
                datasets: [
                  {
                    backgroundColor: ["#424242", "#9e9e9e"],
                    data: [45, 55],
                  },
                ],
              }}
            />
          </Box>
          <Box sx={styles.aboutSkillsPart}>
            <Typography sx={styles.aboutSkillsListTitle}>
              Hard skills
            </Typography>
            <List sx={styles.aboutSkillsList}>
              <ListItem sx={styles.aboutSkillsItem}>
                HTML, CSS, JavaScript, Typescript
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                React/Redux, Material UI, Ant design
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                SASS, БЭМ, Flexbox, Grid, Bootstrap, Materialize
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                Webpack, Node.js, Jest, Rest API
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                Agile, Figma, Photoshop, Git
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
