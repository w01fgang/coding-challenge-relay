import React from "react";
import { Box } from "@material-ui/core";
import ModalWindow from "./Modal";
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MainContainer from "./MainContainer";
import theme from "../lib/theme";

export const FormCreate = () => {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(max-width:760px)");

  return (
    <>
      <MainContainer>
        <Box className="form-create">
          <Typography
            variant={isMobile ? (isTablet ? "h5" : "h4") : "h2"}
            sx={{
              backgroundColor: isMobile
                ? theme.typography.h4
                : isTablet
                ? theme.typography.h3
                : theme.typography.h2,
              margin: "10px",
              padding: "10px",
            }}
          >
            <pre>Please submit </pre>
            <pre>form the</pre>
          </Typography>
          <form action="">
            <Grid
              container
              rowSpacing={{ xs: "24px", sm: "24px" }}
              columnSpacing="24px"
            >
              <Grid item xs={12} sm={10}>
                <Grid
                  sx={{ padding: "0px 16px" }}
                  container
                  rowSpacing={{ xs: "16px", sm: "16px" }}
                  maxWidth="900px"
                  columnSpacing="24px"
                >
                  <Grid xs={12} sm={6} md={6} item>
                    <TextField id="" label="id" variant="outlined" required />
                  </Grid>
                  <Grid xs={12} sm={6} md={6} item>
                    <TextField id="" label="name" variant="outlined" required />
                  </Grid>
                  <Grid xs={12} sm={6} md={6} item>
                    <TextField
                      id=""
                      label="price"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid xs={12} sm={6} md={6} item>
                    <TextField
                      id=""
                      label="createdAt"
                      variant="outlined"
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained">
              SAVE
            </Button>
          </form>
        </Box>
      </MainContainer>
    </>
  );
};

export default FormCreate;
