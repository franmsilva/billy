import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import Typography from '@components/atoms/Typography';
import { flexCenter } from '@src/styles/snippets';

export const Dot = styled.span<{ $color: string }>`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${({ $color }) => $color};
`;

export const Copy = styled(Typography)``;

export const Container = styled.div<{ $bgColor: FlattenSimpleInterpolation; $color: string }>`
  ${({ $bgColor, $color }) => css`
    ${flexCenter}
    ${$bgColor};
    width: 104px;
    height: 40px;
    mix-blend-mode: normal;
    border-radius: ${({ theme }) => theme.borderRadius[6]};

    & > span {
      color: ${$color};
    }
  `}
`;
