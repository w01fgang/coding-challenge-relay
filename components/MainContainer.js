// @flow strict
import { memo, useCallback, useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

type Props = {
  +children: React$Node,
};

const MainContainer = ({ children }: Props): React$Node => {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>Header</Toolbar>
      </AppBar>

      <Container maxWidth='xl'>{children}</Container>
    </>
  );
};

export default memo<Props>(MainContainer);
