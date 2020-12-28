import React from 'react';
import { render } from '@testing-library/react';
import FormerKit from './former-kit';
describe('FormerKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormerKit />);
    expect(baseElement).toBeTruthy();
  });
});
