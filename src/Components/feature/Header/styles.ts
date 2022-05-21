import { Styles } from "../../Constant";

const styles: Styles = {
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "2rem",
    alignItems: "center",
    position: "sticky",

    "& .logo": {
      width: "200px",
      height: "34.5px",
    },
  },

  navContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "42%",

    "& .nav-item": {
      display: "flex",
      alignItems: "center",
    },

    "& .icon": {
      padding: " 0 0.5rem",
      fontSize: "20px",
    },
  },

  signIn: {
    fontSize: "15px",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "12px 22px 10px",
    color: "black",
    marginRight: "20px",
  },

  signOut: {
    padding: "12px 22px 10px",
    borderRadius: "4px",
    backgroundColor: "#191a1b",
    boxShadow: "-5px 5px 0 0 rgb(0 0 0 / 10%)",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#191a1b",
    },
  },
};

export default styles;
