import Image from 'next/image';
import { FC } from 'react';
import { useTheme } from 'styled-components';

import Typography from '@components/atoms/Typography';
import { ETypographyVariant } from '@enums/typography';
import { Invoice } from '@types';

import * as S from './index.styled';

type TInvoiceDetailsHeaderProps = Pick<Invoice.IModel, 'code' | 'projectDescription'>;

const InvoiceDetailsHeader: FC<TInvoiceDetailsHeaderProps> = ({ code, projectDescription }) => {
  const theme = useTheme();

  return (
    <S.InvoiceHeader>
      <S.InvoiceMeta>
        <S.Code displayAs={ETypographyVariant.H3}>
          <Typography displayAs={ETypographyVariant.H3} $color={theme.colors.shipCove}>
            #
          </Typography>
          {code}
        </S.Code>
        <Typography displayAs={ETypographyVariant.Body} $color={theme.colors.shipCove}>
          {projectDescription}
        </Typography>
      </S.InvoiceMeta>
      <S.CompanyDetails>
        <S.ImageWrapper>
          <Image alt="Company logo" src="/ati-logo.webp" height={45} width={100} />
        </S.ImageWrapper>
        <Typography displayAs={ETypographyVariant.BodySm} $color={theme.colors.shipCove}>
          19 Union Terrace
        </Typography>
        <Typography displayAs={ETypographyVariant.BodySm} $color={theme.colors.shipCove}>
          London, E1 3EZ
        </Typography>
        <Typography displayAs={ETypographyVariant.BodySm} $color={theme.colors.shipCove}>
          United Kingdom
        </Typography>
      </S.CompanyDetails>
    </S.InvoiceHeader>
  );
};
export default InvoiceDetailsHeader;
