// @flow
import React, { useEffect } from "react";
import { graphql } from "react-relay";
import type { pages_indexQueryResponse } from "../__generated__/pages_indexQuery.graphql";

import MainContainer from "../components/MainContainer";
import { Box, Typography, useMediaQuery } from "@mui/material";
import theme from "../lib/theme";

type Props = {
  ...pages_indexQueryResponse,
};

function Index(props: Props) {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isTablet = useMediaQuery("(max-width:760px)");

  return (
    <MainContainer>
      <Box>
        <Box m={4} className="header-list">
          <Typography
            variant={isMobile ? (isTablet ? "h5" : "h4") : "h2"}
            sx={{ backgroundColor: theme.typography.h2 }}
          >
            Welcome Home
          </Typography>

          <Typography variant={isMobile ? (isTablet ? "h5" : "h4") : "h3"}>
            <pre>Please Choose {"\n"}Your Variant</pre>
            {isMobile && isTablet ? "\n" : ""}
            <Typography sx={{ backgroundColor: theme.typography.h3 }}>
              On Right board
            </Typography>
          </Typography>
        </Box>
      </Box>
    </MainContainer>
  );
}

Index.query = graphql`
  query pages_indexQuery {
    viewer {
      products {
        id
        name
        description
        price
        createdAt
      }
    }
  }
`;

export default Index;
