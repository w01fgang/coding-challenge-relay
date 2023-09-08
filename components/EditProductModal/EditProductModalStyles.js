import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    padding: "20px",
    backgroundColor: "white",
    margin: "140px auto",
    width: "400px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  modalTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gridGap: "16px",
  },
  input: {
    width: "100%",
  },
  editButton: {
    backgroundColor: "blue",
    color: "white",
    marginTop: "12px",
    "&:hover": {
      backgroundColor: "darkblue",
    },
  },
}));

export default useStyles;
