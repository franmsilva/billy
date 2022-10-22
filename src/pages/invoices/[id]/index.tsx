import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import useSWR from 'swr';

import Button, { EButtonTheme } from '@components/atoms/Button';
import Status from '@components/atoms/Status';
import Typography from '@components/atoms/Typography';
import InvoiceDetails from '@components/molecules/InvoiceDetails';
import { ETypographyVariant } from '@enums/typography';
import CoreLayout from '@src/layouts/core';
import { Invoice } from '@types';

import * as S from './index.styled';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const InvoicesPage: FC = () => {
  const { query } = useRouter();

  const { data, error } = useSWR<Invoice.IModel>(`/api/invoices/${query.id}`, fetcher);

  if (error) {
    return <Typography displayAs={ETypographyVariant.H3}>Oopsy</Typography>;
  }

  const onClickPlaceholder = () => {
    console.log('Clicked');
  };

  // Link content needs to be wrapped in a span wrapper
  // due to Link component only supporting one child
  const renderLinkContent = () => (
    <S.BackLinkContent>
      <Image alt="Go back" src="/icon-arrow-left.svg" height={12} width={10} />
      <S.BackLinkCopy displayAs={ETypographyVariant.H4}>Go Back</S.BackLinkCopy>
    </S.BackLinkContent>
  );

  return (
    <CoreLayout>
      <Link href="/invoices">{renderLinkContent()}</Link>
      <S.MetaBar>
        <S.StatusContainer>
          <S.StatusLabel displayAs={ETypographyVariant.Body}>Status:</S.StatusLabel>
          {data && <Status status={data.status} />}
        </S.StatusContainer>
        <S.ActionsContainer>
          <Button $theme={EButtonTheme.Tertiary} onClick={onClickPlaceholder}>
            Edit
          </Button>
          <Button $theme={EButtonTheme.Danger} onClick={onClickPlaceholder}>
            Delete
          </Button>
          <Button $theme={EButtonTheme.Primary} onClick={onClickPlaceholder}>
            Mark as Paid
          </Button>
        </S.ActionsContainer>
      </S.MetaBar>
      {data && <InvoiceDetails invoice={data} />}
    </CoreLayout>
  );
};

export default InvoicesPage;
