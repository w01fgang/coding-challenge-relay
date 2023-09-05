import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  productCard: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  productName: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: "1rem",
    marginTop: theme.spacing(1),
    color: "#007bff",
  },
  productDescription: {
    marginTop: theme.spacing(2),
    color: "#666",
  },
  productCreatedAt: {
    marginTop: theme.spacing(1),
    color: "#888",
  },
}));

export default useStyles;
