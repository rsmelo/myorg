import React from 'react';
import { Alert }  from './alert';
import { ReactComponent as AddIcon } from 'emblematic-icons/svg/Add24.svg'

import Section from '../Section'

export default {
  component: Alert,
  title: 'Alert',
};

export const primary = () => {
  return (
    <Section title="warning">
      <Alert
        type="warning"
        icon={<AddIcon />}
      >
        <p>Warning. Something is going on!</p>
      </Alert>
    </Section>
  )
};
