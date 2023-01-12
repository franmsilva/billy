import styled from 'styled-components';

import { flexCenter } from '@src/styles/snippets';

export const Wrapper = styled.div`
  ${flexCenter}
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
`;

export const Logo = styled.div`
  position: absolute;
  top: 10rem;
`;
export const MainContent = styled.div`
  width: 400px;
  height: 375px;
`;
