import styled from 'styled-components';

import Typography from '@src/components/atoms/Typography';
import { mildBoxShadow } from '@styles/snippets';

export const InvoiceCard = styled.article`
  ${mildBoxShadow}
  height: 72px;
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1.25fr repeat(3, 1fr) auto;
  align-items: center;
  background-color: white;
  padding: 16px 24px 16px 32px;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
  transition: transform 100ms ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.05, 1.05);
    border: 1px solid ${({ theme }) => theme.colors.cornflowerBlue};
  }
`;

const FlexColumn = styled.div`
  display: flex;
`;

export const LeftColumn = styled(FlexColumn)``;

export const RightColumn = styled(FlexColumn)`
  justify-content: flex-end;
`;

export const CenterColumn = styled(FlexColumn)`
  justify-content: center;
`;

export const Code = styled(Typography)`
  text-transform: uppercase;
`;

export const CodePrefix = styled(Code)`
  color: ${({ theme }) => theme.colors.shipCove};
`;

export const ClientDetails = styled(Typography)`
  color: ${({ theme }) => theme.colors.baliHai};
`;
