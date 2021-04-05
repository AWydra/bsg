import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Box, CssBaseline, makeStyles } from '@material-ui/core';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import NavBar from 'components/molecules/NavBar/NavBar';
import Footer from 'components/molecules/Footer/Footer';
import theme from 'theme/theme';
import { useAuth } from 'context/AuthContext';
import history from 'utils/history';

const useStyles = makeStyles({
  box: {
    height: '100%',
    minHeight: 'calc(100vh - 204px)',
  },
});

const MainTemplate = ({ children }) => {
  const { userData } = useAuth();
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    if (!userData.token && location.pathname !== '/login') history.replace('/login');
  }, [location]);

  return (
    <ThemeProvider theme={responsiveFontSizes(createMuiTheme(theme))}>
      <CssBaseline />
      <NavBar />
      <Box className={classes.box}>{children}</Box>
      <Footer />
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default MainTemplate;
