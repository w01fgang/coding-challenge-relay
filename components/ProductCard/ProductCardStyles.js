import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    backgroundColor: "#f2f2f2",
    margin: "20px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  category: {
    fontSize: "1rem",
    color: "gray",
  },
  price: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginTop: "8px",
  },
  description: {
    fontSize: "1rem",
    marginTop: "8px",
  },
  createdAt: {
    fontSize: "0.875rem",
    color: "gray",
    marginTop: "8px",
  },
  editButton: {
    backgroundColor: "blue",
    color: "white",
    marginTop: "12px",
    "&:hover": {
      backgroundColor: "darkblue",
    },
  },
  modal: {
    padding: "20px",
    backgroundColor: "white",
    margin: "140px auto",
    width: "200px",
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
    rowGap: "16px",
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
});

export default useStyles;
