import { Styles } from "../../Constant";

const styles: Styles = {
  wrapper: {
    display: "flex",
    height: "100%",

    "& .column": {
      flex: "50%",
    },
  },

  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "1rem",
  },

  leftBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  inputBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& .input": {
      width: "500px",
      height: "40px",
      margin: "10px 0",
      padding: "0 10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "5px",
    },

    "& .button": {
      width: "400px",
      height: "40px",
      fontSize: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginTop: "10px",
    },

    "& .error": {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
  },

  image: {
    width: "100%",
    height: "710px",
    opacity: "0.9",
  },
};

export default styles;
