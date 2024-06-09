export const styles = {
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    // p: {
    //   xs: "20px",
    //   md: "50px",
    // },
    mt: "20px",
  },
  homeWelcome: {
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
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
    width: "50%",
  },
  homeTitle: {
    mb: "20px",
    fontFamily: `"Montserrat", sans-serif`,
    fontSize: "4.2rem",
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
    width: "50%",
    maxWidth: "500px",
  },
  homeWorksWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    bgcolor: "color.greyLight",
    p: {
      xs: "20px 20px",
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
    mt: "70px",
    bgcolor: "color.greyDark",
    color: "text.secondary",
    "&:hover": {
      bgcolor: "color.greyDarken",
    },
  },
};
