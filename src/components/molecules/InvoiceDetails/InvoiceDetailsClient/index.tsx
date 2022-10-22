import format from 'date-fns/format';
import { FC } from 'react';
import { useTheme } from 'styled-components';

import Typography from '@components/atoms/Typography';
import { ETypographyVariant } from '@enums/typography';
import { Invoice } from '@types';

import * as S from './index.styled';

type TInvoiceDetailsClientProps = Pick<
  Invoice.IModel,
  'invoiceDate' | 'paymentDate' | 'name' | 'email' | 'address'
>;

const InvoiceDetailsClient: FC<TInvoiceDetailsClientProps> = ({
  invoiceDate,
  paymentDate,
  name,
  email,
  address,
}) => {
  const theme = useTheme();

  return (
    <S.ClientDetails>
      <S.InvoiceDate>
        <Typography displayAs={ETypographyVariant.Body} $color={theme.colors.shipCove}>
          Invoice Date
        </Typography>
        <Typography displayAs={ETypographyVariant.H3}>
          {format(new Date(invoiceDate), 'dd MMM yyyy')}
        </Typography>
      </S.InvoiceDate>
      <S.PaymentDate>
        <Typography displayAs={ETypographyVariant.Body} $color={theme.colors.shipCove}>
          Invoice Date
        </Typography>
        <Typography displayAs={ETypographyVariant.H3}>
          {format(new Date(paymentDate), 'dd MMM yyyy')}
        </Typography>
      </S.PaymentDate>
      <S.BillTo>
        <Typography displayAs={ETypographyVariant.Body} $color={theme.colors.shipCove}>
          Bill To
        </Typography>
        <Typography displayAs={ETypographyVariant.H3}>{name}</Typography>
        <Typography displayAs={ETypographyVariant.BodySm} $color={theme.colors.shipCove}>
          {address.street}
        </Typography>
        <Typography
          displayAs={ETypographyVariant.BodySm}
          $color={theme.colors.shipCove}
        >{`${address.city}, ${address.postcode}`}</Typography>
        <Typography displayAs={ETypographyVariant.BodySm} $color={theme.colors.shipCove}>
          {address.country}
        </Typography>
      </S.BillTo>
      <S.SendTo>
        <Typography displayAs={ETypographyVariant.Body} $color={theme.colors.shipCove}>
          Sent To
        </Typography>
        <Typography displayAs={ETypographyVariant.H3}>{email}</Typography>
      </S.SendTo>
    </S.ClientDetails>
  );
};

export default InvoiceDetailsClient;
