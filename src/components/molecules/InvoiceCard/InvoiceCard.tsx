import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Status from '@components/atoms/Status';
import Typography from '@components/atoms/Typography';
import { EInvoiceStatus } from '@enums/invoices';
import { ETypographyVariant } from '@enums/typography';

import * as S from './InvoiceCard.styled';

interface InvoiceCardProps {
  id: string;
  code: string;
  name: string;
  paymentDate: string;
  total: number;
  status: EInvoiceStatus;
}

const InvoiceCard: FC<InvoiceCardProps> = ({ id, code, name, paymentDate, total, status }) => {
  return (
    <Link key={id} href={`/invoices/${id}`}>
      <S.InvoiceCard>
        <S.LeftColumn>
          <S.CodePrefix displayAs={ETypographyVariant.H4}>#</S.CodePrefix>
          <S.Code displayAs={ETypographyVariant.H4}>{code}</S.Code>
        </S.LeftColumn>
        <S.CenterColumn>
          <S.ClientDetails displayAs={ETypographyVariant.Body}>
            Due {format(new Date(paymentDate), 'dd MMM yyyy')}
          </S.ClientDetails>
        </S.CenterColumn>
        <S.LeftColumn>
          <S.ClientDetails displayAs={ETypographyVariant.Body}>{name}</S.ClientDetails>
        </S.LeftColumn>
        <S.CenterColumn>
          <Typography displayAs={ETypographyVariant.H3}>
            <span>€</span> {total.toLocaleString()}
          </Typography>
        </S.CenterColumn>
        <S.CenterColumn>
          <Status status={status} />
        </S.CenterColumn>
        <Image src="/icon-arrow-right.svg" alt="Arrow right" width={10} height={12} />
      </S.InvoiceCard>
    </Link>
  );
};

export default InvoiceCard;
