export const styles = {
  contactsWrapper: {
    display: "flex",
    flexDirection: "column",
    mt: "20px",
  },
  contactsContainer: {
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
  contactsDescription: {
    display: "flex",
    flexDirection: "column",
    width: {
      xs: "100%",
      lg: "50%",
    },
  },
  contactsTitle: {
    mb: "20px",
    fontFamily: `"Montserrat", sans-serif`,
    fontSize: {
      xs: "4rem",
      md: "4.2rem",
    },
    fontWeight: "600",
  },
  contactsSubtitle: {
    mb: "20px",
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.8rem",
    color: "color.grey",
  },
  contactsImage: {
    width: {
      xs: "100%",
      lg: "50%",
    },
    maxWidth: "100%",
  },
  contactsSocialsWrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  contactsSocialsLink: {
    width: "50%",
    textDecoration: "none",
    cursor: "pointer",
  },
  contactsSocialsItem: {
    display: "flex",
    gap: "15px",
    p: "10px 0px",
    transition: "ease 0.5s",
    "&:hover": {
      opacity: "0.7",
      transition: "ease 0.5s",
    },
  },
  contactsIcon: {
    width: "50px",
    borderRadius: "5px",
  },
  contactsSocialsEmail: {
    color: "color.grey",
    wordBreak: "break-all",
  },
  contactsOtherContactsWrapper: {
    bgcolor: "color.greyLight",
  },
  contactsOtherContacts: {
    width: "100%",
    display: "flex",
    flexDirection: {
      xs: "column",
      lg: "row",
    },
    justifyContent: "center",
    gap: "20px",
    p: {
      xs: "45px 20px",
      md: "5% 10%",
    },
  },
  contactsOtherContactsItem: {
    width: {
      xs: "100%",
      lg: "33.33%",
    },
    display: "flex",
    justifyContent: {
      xs: "start",
      lg: "center",
    },
    gap: "15px",
    p: "10px 0px",
    fontFamily: `"Open Sans", sans-serif`,
  },
  contactsOtherContactsGithub: {
    display: "flex",
    justifyContent: {
      xs: "start",
      lg: "center",
    },
    gap: "15px",
    p: "10px 0px",
    transition: "ease 0.5s",
    "&:hover": {
      opacity: "0.7",
      transition: "ease 0.5s",
    },
  },
  contactsOtherContactsLink: {
    width: {
      xs: "100%",
      lg: "33.33%",
    },
    textDecoration: "none",
    cursor: "pointer",
    color: "color.greyDark",
  },
  contactsGithub: {
    borderBottom: "1px solid",
    borderColor: "color.greyDark",
  },
};
