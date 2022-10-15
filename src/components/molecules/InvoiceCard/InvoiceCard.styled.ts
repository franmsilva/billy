import styled from 'styled-components';

import Typography from '@src/components/atoms/Typography';

export const InvoiceCard = styled.article`
  height: 72px;
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr repeat(4, 1fr) auto;
  align-items: center;
  background-color: white;
  padding: 16px 24px 16px 32px;
  border-radius: ${({ theme }) => theme.borderRadius[8]};
`;

const FlexColumn = styled.div`
  display: flex;
`;

export const RightColumn = styled(FlexColumn)``;

export const LeftColumn = styled(FlexColumn)`
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
