import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ContentDrawerProvider, useContentDrawerContext } from '@src/contexts/ContentDrawerContext';
import { renderWithTheme } from '@src/utils/tests';

import Drawer from './Drawer';

const IntegratedDrawer = () => {
  const { openContentDrawer } = useContentDrawerContext();
  return (
    <>
      <button onClick={openContentDrawer}>New Invoices</button>
      <Drawer>Content</Drawer>
    </>
  );
};

describe('<Drawer/>', () => {
  beforeEach(() => {
    renderWithTheme(
      <ContentDrawerProvider>
        <IntegratedDrawer />
      </ContentDrawerProvider>
    );
  });
  it('is closed by default', () => {
    const drawer = screen.getByText(/content/i);
    expect(drawer).not.toBeVisible();
  });

  it('is open when new invoices button is clicked and closed when overlay is clicked', () => {
    const drawer = screen.getByText(/content/i);
    expect(drawer).not.toBeVisible();
    const button = screen.getByRole('button', { name: /new invoices/i });
    act(() => {
      userEvent.click(button);
    });
    expect(drawer).toBeVisible();
    const overlay = screen.getByTestId('overlay');
    act(() => {
      userEvent.click(overlay);
    });
    expect(drawer).not.toBeVisible();
  });
});
