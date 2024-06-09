export const styles = {
  contactsWrapper: {
    display: "flex",
    flexDirection: "column",
    mt: "20px",
  },
  contactsContainer: {
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
  contactsDescription: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  contactsTitle: {
    mb: "20px",
    fontFamily: `"Montserrat", sans-serif`,
    fontSize: "4.2rem",
    fontWeight: "600",
  },
  contactsSubtitle: {
    mb: "20px",
    fontFamily: `"Open Sans", sans-serif`,
    fontSize: "1.8rem",
    color: "color.grey",
  },
  contactsImage: {
    width: "50%",
    maxWidth: "500px",
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
  contactsOtherContacts: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    p: {
      xs: "20px 20px",
      md: "5% 10%",
    },
    bgcolor: "color.greyLight",
  },
  contactsOtherContactsItem: {
    width: "33.33%",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    p: "10px 0px",
    fontFamily: `"Open Sans", sans-serif`,
  },
  contactsOtherContactsGithub: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    p: "10px 0px",
    transition: "ease 0.5s",
    "&:hover": {
      opacity: "0.7",
      transition: "ease 0.5s",
    },
  },
  contactsOtherContactsLink: {
    width: "33.33%",
    textDecoration: "none",
    cursor: "pointer",
    color: "color.greyDark",
  },
  contactsGithub: {
    borderBottom: "1px solid",
    borderColor: "color.greyDark",
  },
};
