import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "0 auto",
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  successSnackbar: {
    backgroundColor: theme.palette.success.main,
  },
}));

export default useStyles;
