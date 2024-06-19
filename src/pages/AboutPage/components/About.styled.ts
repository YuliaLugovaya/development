export const styles = {
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    mt: "20px",
  },
  aboutWelcome: {
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    justifyContent: "space-between",
    gap: "25px",
    width: "100%",
    p: {
      xs: "20px 20px",
      md: "5% 10%",
    },
    mt: "20px",
    fontFamily: `"Open Sans", sans-serif`,
  },
  aboutWelcomeDescription: {
    display: "flex",
    flexDirection: "column",
    width: {
      xs: "100%",
      lg: "50%",
    },
  },
  aboutTitle: {
    mb: "20px",
    fontFamily: `"Montserrat", sans-serif`,
    fontSize: {
      xs: "3rem",
      md: "4rem",
      lg: "4.2rem",
    },
    fontWeight: "600",
  },
  aboutSubtitle: {
    mb: "20px",
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.8rem",
    color: "color.grey",
  },
  aboutText: {
    mb: "15px",
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.1rem",
  },
  aboutImage: {
    width: {
      xs: "100%",
      lg: "50%",
    },
    maxWidth: "100%",
  },
  aboutSkillsWrapper: {
    width: "100%",
    bgcolor: "color.greyLight",
  },
  aboutSkills: {
    width: "100%",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
    gap: "20px",
    p: {
      xs: "45px 20px",
      md: "5% 10%",
    },
  },
  aboutSkillsPart: {
    width: {
      xs: "100%",
      md: "50%",
      lg: "30%",
    },
  },
  aboutSkillsListTitle: {
    mb: "10px",
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.8rem",
    color: "color.grey",
  },
  aboutSkillsList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  aboutSkillsItem: {
    fontFamily: `"Open Sans", sans-serif`,
    p: "0px",
  },
  aboutSkillsChart: {
    display: {
      xs: "none",
      lg: "block",
    },
  },
  aboutExperienceAndEducation: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    p: {
      xs: "20px 20px",
      md: "5% 10%",
    },
  },
  aboutExperienceAndEducationTitle: {
    mb: "15px",
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.8rem",
    color: "color.grey",
  },
  aboutExperienceAndEducationSubtitle: {
    fontFamily: `"Open Sans", sans-serif`,
    fontWeight: "600",
  },
  aboutExperienceAndEducationPeriod: {
    mb: "10px",
    fontFamily: `"Open Sans", sans-serif`,
    color: "color.grey",
  },
  aboutExperienceAndEducationDescription: {
    fontFamily: `"Open Sans", sans-serif`,
    mb: "10px",
  },
  aboutButton: {
    alignSelf: "center",
    p: "20px 45px",
    bgcolor: "color.greyDark",
    color: "text.secondary",
    "&:hover": {
      bgcolor: "color.greyDarken",
    },
  },
  aboutExperienceItems: {
    width: "100%",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
    gap: "20px",
  },
  aboutExperienceItem: {
    width: {
      xs: "100%",
      md: "50%",
    },
    mb: "45px",
  },
  aboutEducationWrapper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    width: "100%",
    bgcolor: "color.greyLight",
  },
  aboutEducation: {
    p: {
      xs: "20px 20px",
      md: "5% 10%",
    },
  },
  aboutLanguages: {
    width: {
      xs: "100%",
      md: "50%",
    },
    height: "300px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    mt: {
      xs: "20%",
      md: "15%",
      lg: "10%",
    },
  },
  aboutLanguage: {
    width: "30%",
  },
  aboutLanguageRu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    bgcolor: "color.green",
  },
  aboutLanguageBy: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "250px",
    bgcolor: "color.greenWarm",
  },
  aboutLanguageEn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
    bgcolor: "color.yellow",
  },
  aboutLanguageDescription: {
    textAlign: "center",
  },
};
