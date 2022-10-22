import { FC } from 'react';
import { useTheme } from 'styled-components';

import Typography from '@components/atoms/Typography';
import { ETypographyVariant } from '@enums/typography';
import { Invoice } from '@types';

import * as S from './index.styled';

type TInvoiceDetailsItemsProps = Pick<Invoice.IModel, 'invoiceItems' | 'total'>;

const InvoiceDetailsItems: FC<TInvoiceDetailsItemsProps> = ({ invoiceItems, total }) => {
  const theme = useTheme();

  return (
    <S.InvoiceItemsContainer>
      <S.TableContainer>
        <S.Table>
          <S.THead>
            <S.Row>
              <S.HeaderCell>Item Name</S.HeaderCell>
              <S.HeaderCellRightAlign>Qty.</S.HeaderCellRightAlign>
              <S.HeaderCellRightAlign>Price</S.HeaderCellRightAlign>
              <S.HeaderCellRightAlign>Total</S.HeaderCellRightAlign>
            </S.Row>
          </S.THead>
          <S.TBody>
            {invoiceItems.map((item) => (
              <S.Row key={`item-${item.name}`}>
                <S.BodyCell>
                  <Typography displayAs={ETypographyVariant.H4}>{item.name}</Typography>
                </S.BodyCell>
                <S.BodyCellRightAlign>
                  <Typography displayAs={ETypographyVariant.H4} $color={theme.colors.shipCove}>
                    {item.quantity}
                  </Typography>
                </S.BodyCellRightAlign>
                <S.BodyCellRightAlign>
                  <Typography displayAs={ETypographyVariant.H4} $color={theme.colors.shipCove}>
                    € {item.price}
                  </Typography>
                </S.BodyCellRightAlign>
                <S.BodyCellRightAlign>
                  <Typography displayAs={ETypographyVariant.H4}>
                    € {item.quantity * item.price}
                  </Typography>
                </S.BodyCellRightAlign>
              </S.Row>
            ))}
          </S.TBody>
        </S.Table>
      </S.TableContainer>
      <S.Total>
        <Typography displayAs={ETypographyVariant.Body} $color="white">
          Amount due
        </Typography>
        <S.TotalAmount displayAs={ETypographyVariant.H2}>€ {total}</S.TotalAmount>
      </S.Total>
    </S.InvoiceItemsContainer>
  );
};

export default InvoiceDetailsItems;
