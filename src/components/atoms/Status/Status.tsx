import { FC } from 'react';
import { css, FlattenSimpleInterpolation } from 'styled-components';

import { Theme } from '@src/styles/theme';
import { EInvoiceStatus } from '@src/types/invoice';
import { ETypography } from '@src/types/typography';

import * as S from './Status.styled';

interface StatusProps {
  status: EInvoiceStatus;
}

// Opacity declared on its own applies to the content
// Handcoding for now while we look for a permanent solution
const mapStatusToBgColor: Record<EInvoiceStatus, FlattenSimpleInterpolation> = {
  [EInvoiceStatus.Draft]: css`
    background-color: rgba(55, 59, 83, 0.06);
  `,
  [EInvoiceStatus.Paid]: css`
    background-color: rgba(51, 214, 159, 0.06);
  `,
  [EInvoiceStatus.Pending]: css`
    background-color: rgba(255, 143, 0, 0.06);
  `,
};
const mapStatusToColor: Record<EInvoiceStatus, string> = {
  [EInvoiceStatus.Draft]: Theme.colors.slateGray,
  [EInvoiceStatus.Paid]: Theme.colors.eucalyptus,
  [EInvoiceStatus.Pending]: Theme.colors.darkOrange,
};

const Status: FC<StatusProps> = ({ status }) => {
  const bgColor = mapStatusToBgColor[status];
  const color = mapStatusToColor[status];

  return (
    <>
      <S.Container $bgColor={bgColor} $color={color}>
        <S.Dot $color={color} />
        <S.Copy displayAs={ETypography.H4}>{status}</S.Copy>
      </S.Container>
    </>
  );
};

export default Status;
