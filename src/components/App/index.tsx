import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledApp } from './style';
import theme from './theme';
const logo = require('../../assets/logo.svg');

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
          <header>
            <img src={logo} alt="logo" />
            <h1>Welcome to React</h1>
          </header>
          <p>
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </StyledApp>
      </ThemeProvider>
    );
  }
}

export default App;
