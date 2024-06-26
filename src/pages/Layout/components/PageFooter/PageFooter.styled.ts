export const styles = {
  footerWrapper: {
    display: "flex",
    justifyContent: {
      xs: "center",
      md: "space-between",
    },
    p: {
      xs: "15px 20px",
      md: "15px 10%",
    },
    bgcolor: "color.greyLighten",
    color: "text.primary",
    fontFamily: `"Open Sans", sans-serif`,
  },
  footerLinks: {
    display: {
      xs: "none",
      md: "flex",
    },
    gap: "20px",
  },
  footerLink: {
    color: "text.primary",
    textDecoration: "none",
    transition: "ease 0.3s",
    "&:hover": {
      color: "color.grey",
      transition: "ease 0.3s",
    },
  },
};
