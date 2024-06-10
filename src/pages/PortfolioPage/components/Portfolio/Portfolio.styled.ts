export const styles = {
  portfolioContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    mt: "20px",
  },
  portfolioWelcome: {
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
    m: "20px 0 30px 0",
    fontFamily: `"Open Sans", sans-serif`,
  },
  portfolioWelcomeDescription: {
    display: "flex",
    flexDirection: "column",
    width: {
      xs: "100%",
      lg: "50%",
    },
  },
  portfolioTitle: {
    mb: "20px",
    fontFamily: `"Montserrat", sans-serif`,
    fontSize: {
      xs: "4rem",
      md: "4.2rem",
    },
    fontWeight: "600",
  },
  portfolioSubtitle: {
    mb: "20px",
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.8rem",
    color: "color.grey",
  },
  portfolioText: {
    mb: "15px",
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.1rem",
  },
  portfolioImage: {
    width: {
      xs: "100%",
      lg: "50%",
    },
    maxWidth: "100%",
  },
  portfolioCardsWrapper: {
    bgcolor: "color.greyLight",
  },
  portfolioCardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    p: {
      xs: "45px 20px",
      md: "5% 10%",
    },
  },
  portfolioCards: {
    display: "flex",
  },
};
