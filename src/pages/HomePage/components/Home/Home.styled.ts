export const styles = {
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    mt: "20px",
  },
  homeWelcome: {
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
  homeWelcomeDescription: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    width: {
      xs: "100%",
      lg: "50%",
    },
  },
  homeTitle: {
    mb: "20px",
    fontFamily: `"Montserrat", sans-serif`,
    fontSize: {
      xs: "3rem",
      md: "4rem",
      lg: "4.2rem",
    },
    fontWeight: "600",
  },
  homeSubtitle: {
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.2rem",
    color: "color.grey",
  },
  homeText: {
    mb: "15px",
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.1rem",
  },
  homeImage: {
    width: {
      xs: "100%",
      lg: "50%",
    },
    maxWidth: "100%",
  },
  homeWorksWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    bgcolor: "color.greyLight",
    p: {
      xs: "45px 20px",
      md: "5% 10%",
    },
  },
  homeCardsWrapper: {
    bgcolor: "color.greyLight",
  },
  homeCardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    p: "20px 0",
  },
  homeCards: {
    display: "flex",
  },
  homeButton: {
    alignSelf: "center",
    p: "20px 45px",
    mt: "50px",
    bgcolor: "color.greyDark",
    color: "text.secondary",
    "&:hover": {
      bgcolor: "color.greyDarken",
    },
  },
};
