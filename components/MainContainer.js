// @flow strict
import { memo, useCallback, useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import Link from "next/link";
import NavigateComponent from "./NavigateComponent";
import { AppBar, Box, Container, Toolbar, useMediaQuery } from "@mui/material";

type Props = {
  +children: React$Node,
};

const MainContainer = ({ children }: Props): React$Node => {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(max-width:760px)");
  return (
    <>
      <Box>
        <AppBar
          sx={{
            display: "flex",
            width: isMobile ? "100px" : "300px",
            height: "100%",
          }}
          md={4}
          sm={6}
          lg={8}
        >
          <Toolbar md={4} sm={6} sx={{ fontSize: isMobile ? "15px" : "30px" }}>
            <NavigateComponent path="/" text="Home" />
          </Toolbar>
          <Toolbar
            md={4}
            sm={6}
            lg={8}
            sx={{ fontSize: isMobile ? "15px" : "30px" }}
          >
            <NavigateComponent path="/create" text="Create" />
          </Toolbar>
          <Toolbar sx={{ fontSize: isMobile ? "15px" : "30px" }}>
            <NavigateComponent path="/infoCard" text="InfoCard" />
          </Toolbar>
        </AppBar>

        <Container maxWidth="xl">{children}</Container>
      </Box>
    </>
  );
};

export default (memo<Props>(MainContainer): React$AbstractComponent<
  Props,
  mixed,
  React$Node
>);
