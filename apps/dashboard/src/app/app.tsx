import React from 'react';

import styles from './app.module.css';

import { Alert, FormerKit, ThemeProvider }  from '@myorg/former-kit'
import theme from '@myorg/former-kit-skin-pagarme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.app}>
        <Alert
        type="warning"
        >
          <h1>hello</h1>
        </Alert>
        <FormerKit />
      </div>
    </ThemeProvider>
  );
}

export default App;
