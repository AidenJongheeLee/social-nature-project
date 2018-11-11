export const customMuiTheme = {
  palette: {
    primary: {
      main: '#37c0c0'
    }
  },

  typography: {
    useNextVariants: true,
    body1: {
      fontSize: '14px',
      fontFamily: 'Sanchez, serif'
    },
    body2: {
      fontSize: '14px',
      fontFamily: 'Sanchez, serif'
    },
    subtitle1: {
      fontSize: '14px',
      fontFamily: 'Sanchez, serif'
    }
  },

  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Sanchez, serif'
      }
    }
  }
};

export const isMobile = () => {
  if (
    window.navigator.userAgent.match(/Android/i) ||
    window.navigator.userAgent.match(/webOS/i) ||
    window.navigator.userAgent.match(/iPhone/i) ||
    window.navigator.userAgent.match(/iPod/i) ||
    window.navigator.userAgent.match(/BlackBerry/i) ||
    window.navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  }
  return false;
};

export const theme = {
  isMobile: isMobile(),

  primaryColor: '#37c0c0'
};
