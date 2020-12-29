import React from 'react'
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import theme from '@myorg/former-kit-skin-pagarme'

import {ThemeProvider} from '../src/lib/ThemeProvider'
console.log('teste', theme)
// import Typeset from '../src/Typeset'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    {/* <Typeset> */}
      {storyFn()}
    {/* </Typeset> */}
  </ThemeProvider>
)

addDecorator(ThemeDecorator)
addDecorator(withKnobs);
