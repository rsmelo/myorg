import React from 'react'
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import theme from '@myorg/former-kit-skin-pagarme'

import {ThemeProvider} from '../src/lib/ThemeProvider'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
)

addDecorator(ThemeDecorator)
addDecorator(withKnobs);
