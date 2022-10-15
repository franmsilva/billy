import { Children } from 'react';
import styled from 'styled-components';

import Typography from '@src/components/atoms/Typography';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 720px;
  height: 100vh;
  padding: 56px 56px 32px;
  padding-left: 160px;
  background-color: white;

  > *:not(:last-child) {
    margin-bottom: 48px;
  }
`;

export const ScrollableContent = styled.div`
  flex: 1 1 auto;
  overflow-y: scroll;
`;

export const Header = styled(Typography)`
  flex: 0 1 auto;
`;

export const FieldSet = styled.fieldset`
  > * {
    margin-bottom: 24px;
  }
`;

export const Subheading = styled(Typography)`
  color: ${({ theme }) => theme.colors.cornflowerBlue};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ children }) => Children.count(children)}, 1fr);
  column-gap: 24px;
`;

export const Footer = styled.div`
  flex: 0 1 48px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const PrimaryActionsGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
`;