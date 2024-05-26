export const styles = {
  footerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    p: {
      xs: "15px 20px",
      md: "15px 50px",
    },
    bgcolor: "color.blueDark",
    color: "text.secondary",
    fontFamily: `"Open Sans", sans-serif`,
  },
  footerLink: {
    color: "text.secondary",
    textDecoration: "none",
    transition: "ease 0.3s",
    "&:hover": {
      color: "color.green",
      transition: "ease 0.3s",
    },
  },
};
