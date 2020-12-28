import React from 'react';
import { render } from '@testing-library/react';

import FormerKitSkinPagarme from './former-kit-skin-pagarme';

describe('FormerKitSkinPagarme', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormerKitSkinPagarme />);
    expect(baseElement).toBeTruthy();
  });
});
