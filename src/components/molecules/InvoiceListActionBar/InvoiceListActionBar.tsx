import { FC } from 'react';

import Button, { EButtonTheme } from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';
import { ETypographyVariant } from '@enums/typography';
import { useContentDrawerContext } from '@src/contexts/ContentDrawerContext';

import StatusDropdown from '../StatusDropdown';

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
        <StatusDropdown />
        <Button
          icon={{ src: '/icon-plus.svg' }}
          btnTheme={EButtonTheme.Primary}
          onClick={() => openContentDrawer()}
        >
          New Invoice
        </Button>
      </S.Actions>
    </S.Header>
  );
};

export default InvoiceListActionBar;
