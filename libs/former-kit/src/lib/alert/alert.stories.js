import React from 'react';
import { Alert }  from './alert';


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
      >
        <p>Warning. Something is going on!</p>
      </Alert>
    </Section>
  )
};
