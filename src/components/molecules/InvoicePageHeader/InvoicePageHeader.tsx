import { FC } from 'react';

import { EButtonTheme } from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';
import { ETypographyVariant } from '@enums/typography';
import { EContentDrawerForm, useContentDrawerContext } from '@src/contexts/ContentDrawerContext';

import * as S from './InvoicePageHeader.styled';

interface InvoicePageHeaderProps {
  invoiceCount: number;
}

const InvoicePageHeader: FC<InvoicePageHeaderProps> = ({ invoiceCount }) => {
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
          onClick={() => openContentDrawer(EContentDrawerForm.CreateInvoice)}
        >
          New Invoice
        </S.Button>
      </S.Actions>
    </S.Header>
  );
};

export default InvoicePageHeader;
