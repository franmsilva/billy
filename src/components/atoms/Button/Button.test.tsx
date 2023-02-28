import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '@src/utils/tests';

import Button from './Button';

describe('<Button />', () => {
  const onClick = jest.fn();
  beforeEach(() => renderWithTheme(<Button onClick={onClick}>Click me!</Button>));

  it('renders without error', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    act(() => {
      userEvent.click(screen.getByRole('button'));
    });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
