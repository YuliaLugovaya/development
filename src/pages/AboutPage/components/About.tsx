import React, { FC } from "react";
import {
  Box,
  Button,
  CardMedia,
  List,
  ListItem,
  Typography,
  Link,
} from "@mui/material";
import { styles } from "./About.styled";
import { useSelector } from "react-redux";
import { LanguageState, initialState } from "store/languages/languagesTypes";
import photo from "assets/images/photos/yulia_lugovaya.jpg";
import { CChart } from "@coreui/react-chartjs";
import { routes } from "config/routes";
import { useNavigate } from "react-router-dom";

export const About: FC = () => {
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
          <Typography sx={styles.aboutText}>
            {currentLanguage === "en"
              ? "I aspire to be a part of a friendly and professional team, where I can develop my development skills and learn new skills to achieve team results."
              : "Я стремлюсь стать частью дружной и профессиональной команды, где смогу развивать свои навыки и приобретать новые умения для достижения командных результатов."}
          </Typography>
        </Box>
        <Box sx={styles.aboutImage}>
          <CardMedia component="img" alt="photo" image={photo}></CardMedia>
        </Box>
      </Box>
      <Box sx={styles.aboutSkillsWrapper} component="section">
        <Box sx={styles.aboutSkills}>
          <Box sx={styles.aboutSkillsPart}>
            <Typography sx={styles.aboutSkillsListTitle}>
              Soft skills
            </Typography>
            <List sx={styles.aboutSkillsList}>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "able to work in a team to achieve a common goal"
                  : "умею работать в команде для достижения общей цели"}
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "capable of self-learning, striving for self-development"
                  : "способна к самообучению, стремлюсь к саморазвитию"}
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "industrious and responsible"
                  : "трудолюбивая и ответственная"}
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "sociable and friendly"
                  : "общительная и дружелюбная"}
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "I have analytical thinking and the ability to find effective solutions"
                  : "имею аналитическое мышление и способность находить эффективные решения"}
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                {currentLanguage === "en"
                  ? "attentive to detail, energetic and creative"
                  : "внимательная к деталям, энергичная и креативная"}
              </ListItem>
            </List>
          </Box>
          <Box sx={styles.aboutSkillsChart}>
            <CChart
              type="pie"
              data={{
                datasets: [
                  {
                    backgroundColor: ["#dcedc8", "#c8e6c9"],
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
                Webpack, Node.js, Jest, Rest API, Git
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>
                Agile, Jira, Confluence, Trello
              </ListItem>
              <ListItem sx={styles.aboutSkillsItem}>Figma, Photoshop</ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.aboutExperienceAndEducation} component="section">
        <Box>
          <Typography sx={styles.aboutExperienceAndEducationTitle}>
            {currentLanguage === "en" ? "Experience" : "Опыт работы"}
          </Typography>
          <Box sx={styles.aboutExperienceItems}>
            <Box sx={styles.aboutExperienceItem}>
              <Typography sx={styles.aboutExperienceAndEducationSubtitle}>
                {currentLanguage === "en"
                  ? "Marsnet Solutions (traineeship):"
                  : "Marsnet Solutions (стажировка):"}
              </Typography>
              <Typography sx={styles.aboutExperienceAndEducationPeriod}>
                {currentLanguage === "en" ? "autumn 2023" : "осень 2023"}
              </Typography>
              <List sx={styles.aboutSkillsList}>
                <ListItem sx={styles.aboutSkillsItem}>
                  {currentLanguage === "en"
                    ? "participated in the development of the company's main product - web application Bizzee! (appointment service), using React/Redux, Typescript, Material UI;"
                    : "участвовала в разработке основного продукта компании - веб-приложения Bizzee! (сервис записи на услуги), используя React/Redux, Typescript, Material UI;"}
                </ListItem>
                <ListItem sx={styles.aboutSkillsItem}>
                  {currentLanguage === "en" ? (
                    <Typography>
                      created the company&apos;s website using HTML, CSS,
                      JavaScript and Bootstrap;
                    </Typography>
                  ) : (
                    <Typography>
                      создавала веб-сайт компании с помощью HTML, CSS,
                      JavaScript и Bootstrap;
                    </Typography>
                  )}
                </ListItem>
                <ListItem sx={styles.aboutSkillsItem}>
                  {currentLanguage === "en"
                    ? "worked on Agile/Scrum principles using Jira/Confluence;"
                    : "работала по принципам Agile/Scrum, используя Jira/Confluence;"}
                </ListItem>
                <ListItem sx={styles.aboutSkillsItem}>
                  {currentLanguage === "en"
                    ? "worked with Git (GitHub/GitLab)."
                    : "работала с Git (GitHub/GitLab)."}
                </ListItem>
              </List>
            </Box>
            <Box sx={styles.aboutExperienceItem}>
              <Typography sx={styles.aboutExperienceAndEducationSubtitle}>
                {currentLanguage === "en"
                  ? "Personal projects:"
                  : "Личные проекты:"}
              </Typography>
              <Typography sx={styles.aboutExperienceAndEducationPeriod}>
                2022 - present
              </Typography>
              <Typography sx={styles.aboutExperienceAndEducationDescription}>
                {currentLanguage === "en"
                  ? "my personal projects can be viewed on a separate Portfolio page"
                  : "мои личные проекты можно посмотреть на отдельной странице Портфолио"}
              </Typography>
              <Button onClick={goToPortfolio} sx={styles.aboutButton}>
                {currentLanguage === "en" ? "Portfolio" : "Портфолио"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.aboutEducationWrapper} component="section">
        <Box sx={styles.aboutEducation}>
          <Typography sx={styles.aboutExperienceAndEducationTitle}>
            {currentLanguage === "en" ? "Education" : "Образование"}
          </Typography>
          <Box sx={styles.aboutExperienceItems}>
            <Box sx={styles.aboutExperienceItem}>
              <Typography sx={styles.aboutExperienceAndEducationSubtitle}>
                {currentLanguage === "en" ? "University:" : "Университет:"}
              </Typography>
              <Typography sx={styles.aboutExperienceAndEducationPeriod}>
                2016
              </Typography>
              <Typography sx={styles.aboutExperienceAndEducationDescription}>
                {currentLanguage === "en"
                  ? "Francisk Skorina Gomel State University, Jurisprudence major"
                  : "Гомельский государственный университет им. Франциска Скорины, юриспруденция"}
              </Typography>
            </Box>
            <Box sx={styles.aboutExperienceItem}>
              <Typography sx={styles.aboutExperienceAndEducationSubtitle}>
                {currentLanguage === "en" ? "Courses:" : "Курсы:"}
              </Typography>
              <Typography sx={styles.aboutExperienceAndEducationPeriod}>
                2022-2023
              </Typography>
              <List sx={styles.aboutSkillsList}>
                <ListItem sx={styles.aboutSkillsItem}>
                  RSSchool: JavaScript/Front-end
                </ListItem>
                <ListItem sx={styles.aboutSkillsItem}>
                  FreeCodeCamp: JavaScript Algorithms and Data Structures, Basic
                  JavaScrip
                </ListItem>
                <ListItem sx={styles.aboutSkillsItem}>
                  Hexlet: Basic of JavaScript
                </ListItem>
                <ListItem sx={styles.aboutSkillsItem}>
                  {currentLanguage === "en"
                    ? "mentor training"
                    : "обучение с ментором"}
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.aboutLanguagesWrapper} component="section">
        <Typography sx={styles.aboutExperienceAndEducationTitle}>
          {currentLanguage === "en" ? "Languages" : "Языки"}
        </Typography>
        <Box sx={styles.aboutLanguages}>
          <Box sx={styles.aboutLanguage}>
            <Typography sx={styles.aboutLanguageDescription}>
              {currentLanguage === "en" ? "Proficiency" : "В совершенстве"}
            </Typography>
            <Box sx={styles.aboutLanguageRu}>
              <Typography>C2</Typography>
            </Box>
            <Typography sx={styles.aboutLanguageDescription}>
              {currentLanguage === "en" ? "Russian" : "Русский"}
            </Typography>
          </Box>
          <Box sx={styles.aboutLanguage}>
            <Typography sx={styles.aboutLanguageDescription}>
              {currentLanguage === "en" ? "Advanced" : "Продвинутый"}
            </Typography>
            <Box sx={styles.aboutLanguageBy}>
              <Typography>C1</Typography>
            </Box>
            <Typography sx={styles.aboutLanguageDescription}>
              {currentLanguage === "en" ? "Belorussian" : "Белорусский"}
            </Typography>
          </Box>
          <Box sx={styles.aboutLanguage}>
            <Typography sx={styles.aboutLanguageDescription}>
              {currentLanguage === "en" ? "Intermediate" : "Средний"}
            </Typography>
            <Box sx={styles.aboutLanguageEn}>
              <Typography>B1</Typography>
            </Box>
            <Typography sx={styles.aboutLanguageDescription}>
              {currentLanguage === "en" ? "English" : "Английский"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
