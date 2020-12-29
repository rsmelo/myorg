import React from 'react';
import { Alert }  from './alert';

export default {
  component: Alert,
  title: 'Alert',
};

export const primary = () => {
  return (
    <Alert
      type="warning"
    >
      <p>Warning. Something is going on!</p>
    </Alert>
  )
};
