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
