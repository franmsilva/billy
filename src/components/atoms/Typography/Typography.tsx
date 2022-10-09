import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import { ETypography } from '@src/types/typography';

import { Body, BodySm, Heading1, Heading2, Heading3, Heading4 } from './Typography.styled';

interface TypographyProps {
  displayAs: ETypography;
}

const TYPOGRAPHY_TYPE_TO_STYLES_MAP: Record<
  ETypography,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [ETypography.H1]: Heading1,
  [ETypography.H2]: Heading2,
  [ETypography.H3]: Heading3,
  [ETypography.H4]: Heading4,
  [ETypography.Body]: Body,
  [ETypography.BodySm]: BodySm,
};

const Typography = styled.span<TypographyProps>`
  ${({ displayAs }) => TYPOGRAPHY_TYPE_TO_STYLES_MAP[displayAs]}
`;

export default Typography;
