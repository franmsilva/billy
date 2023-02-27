import { screen } from '@testing-library/react';

import { renderWithTheme } from '@src/utils/tests';

import Button from './Button';

describe('<Button />', () => {
  beforeEach(() => renderWithTheme(<Button>Click me!</Button>));

  it('renders without error', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
