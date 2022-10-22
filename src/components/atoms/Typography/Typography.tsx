import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import { ETypographyVariant } from '@enums/typography';

import { Body, BodySm, Heading1, Heading2, Heading3, Heading4 } from './Typography.styled';

interface TypographyProps {
  displayAs: ETypographyVariant;
  $color?: string;
}

const TYPOGRAPHY_TYPE_TO_STYLES_MAP: Record<
  ETypographyVariant,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  [ETypographyVariant.H1]: Heading1,
  [ETypographyVariant.H2]: Heading2,
  [ETypographyVariant.H3]: Heading3,
  [ETypographyVariant.H4]: Heading4,
  [ETypographyVariant.Body]: Body,
  [ETypographyVariant.BodySm]: BodySm,
};

const Typography = styled.span<TypographyProps>`
  ${({ displayAs, $color }) => css`
    ${TYPOGRAPHY_TYPE_TO_STYLES_MAP[displayAs]}
    ${$color &&
    css`
      color: ${$color};
    `}
  `}
`;

export default Typography;
