import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { customMuiTheme, theme, isMobile } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

import Topbar from 'containers/Topbar';
import MainContainer from 'containers/MainContainer';

const muiTheme = createMuiTheme(customMuiTheme);

window.isMobile = isMobile();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Topbar />
            <MainContainer />
          </div>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
