import styled from 'styled-components';

import Typography from '@components/atoms/Typography';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 56px 56px 32px 160px;
  background-color: white;

  > *:not(:last-child) {
    margin-bottom: 48px;
  }
`;

export const Header = styled(Typography)`
  flex: 0 1 auto;
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
