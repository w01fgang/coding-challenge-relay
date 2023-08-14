// @flow
import { createTheme } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const theme = createTheme({
  palette,
  typography,
  overrides,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1366,
    },
  },
});

export default theme;
