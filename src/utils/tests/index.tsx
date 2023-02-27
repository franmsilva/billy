import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme } from '@styles/theme';

export const renderWithTheme = (Component: ReactNode) => {
  render(<ThemeProvider theme={Theme}>{Component}</ThemeProvider>);
};
