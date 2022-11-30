import { FC } from 'react';

import { EButtonTheme } from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';
import { ETypographyVariant } from '@enums/typography';
import { useContentDrawerContext } from '@src/contexts/ContentDrawerContext';

import * as S from './InvoiceListActionBar.styled';

interface IInvoiceListActionBarProps {
  invoiceCount: number;
}

const InvoiceListActionBar: FC<IInvoiceListActionBarProps> = ({ invoiceCount }) => {
  const { openContentDrawer } = useContentDrawerContext();

  return (
    <S.Header>
      <S.Headings>
        <Typography displayAs={ETypographyVariant.H1}>Invoices</Typography>
        <S.Subheading
          displayAs={ETypographyVariant.Body}
        >{`There are ${invoiceCount} total invoices`}</S.Subheading>
      </S.Headings>
      <S.Actions>
        {/* TODO: Turn into dropdown */}
        <Typography displayAs={ETypographyVariant.H4}>Filter by status</Typography>
        <S.Button
          icon="/icon-plus.svg"
          $theme={EButtonTheme.Primary}
          onClick={() => openContentDrawer()}
        >
          New Invoice
        </S.Button>
      </S.Actions>
    </S.Header>
  );
};

export default InvoiceListActionBar;
