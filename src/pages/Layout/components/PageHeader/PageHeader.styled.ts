export const styles = {
  headerWrapper: {
    p: {
      xs: "0 20px",
      md: "0 10%",
    },
    bgcolor: "color.greyDark",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "10px 0",
  },
  headerLogo: {
    fontSize: {
      xs: "1.2rem",
      md: "1.5rem",
    },
    color: "text.secondary",
    transition: "ease 0.3s",
    "&:hover": {
      color: "color.grey",
      transition: "ease 0.3s",
    },
  },
  headerLinksContainer: {
    display: "flex",
    gap: "25px",
  },
  headerLinks: {
    fontSize: "1.1rem",
    color: "text.secondary",
    transition: "ease 0.3s",
    "&:hover": {
      color: "color.grey",
      transition: "ease 0.3s",
    },
  },
  headerLinksBurgerContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    p: "50px 0",
  },
  headerLinksBurger: {
    fontSize: "1.5rem",
    color: "text.secondary",
  },
  headerLogoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  headerLogoImage: {
    width: "30px",
  },
  headerIcon: {
    width: {
      xs: "50px",
      md: "70px",
    },
  },
  chevronLeft: {
    cursor: "pointer",
    m: "30px 0",
  },
  burgerMenu: {
    "& .MuiDrawer-paperAnchorRight": {
      p: "20px",
      bgcolor: "color.greyDark",
      width: "80vw",
    },
  },
  headerIconClose: {
    width: "30px",
  },
  headerLanguages: {
    display: "flex",
  },
  headerLanguage: {
    minWidth: "35px",
    color: "text.secondary",
    transition: "ease 0.3s",
    "&:hover": {
      color: "color.grey",
      transition: "ease 0.3s",
    },
    "&:disabled": {
      color: "color.grey",
      transition: "ease 0.3s",
    },
  },
};
