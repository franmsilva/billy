import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from '@src/utils/tests';

import Checkbox from './Checkbox';

describe('<Checkbox/>', () => {
  const onClick = jest.fn();

  it('renders with label', () => {
    renderWithTheme(
      <Checkbox label="test label" name="test label" isChecked={false} onClick={onClick} />
    );
    const labelElement = screen.getByLabelText('test label');
    expect(labelElement).toBeInTheDocument();
  });
  it('is not checked when isChecked is false', () => {
    renderWithTheme(
      <Checkbox label="test label" name="test label" isChecked={false} onClick={onClick} />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });
  it('is checked when isChecked is true', () => {
    renderWithTheme(
      <Checkbox label="test label" name="test label" isChecked={true} onClick={onClick} />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });
  it('calls the onChange function when clicked', () => {
    renderWithTheme(
      <Checkbox label="test label" name="test label" isChecked={false} onClick={onClick} />
    );
    const checkboxElement = screen.getByLabelText('test label');
    act(() => {
      userEvent.click(checkboxElement);
    });
    expect(onClick).toHaveBeenCalled();
  });
});
