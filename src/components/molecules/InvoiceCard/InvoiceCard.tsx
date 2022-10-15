import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Status from '@src/components/atoms/Status';
import Typography from '@src/components/atoms/Typography';
import { EInvoiceStatus } from '@src/types/invoice';
import { ETypography } from '@src/types/typography';

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
        <S.RightColumn>
          <S.CodePrefix displayAs={ETypography.H4}>#</S.CodePrefix>
          <S.Code displayAs={ETypography.H4}>{code}</S.Code>
        </S.RightColumn>
        <S.RightColumn>
          <S.ClientDetails displayAs={ETypography.Body}>
            Due {format(new Date(paymentDate), 'dd MMM yyyy')}
          </S.ClientDetails>
        </S.RightColumn>
        <S.RightColumn>
          <S.ClientDetails displayAs={ETypography.Body}>{name}</S.ClientDetails>
        </S.RightColumn>
        <S.LeftColumn>
          <Typography displayAs={ETypography.H3}>
            <span>€</span> {total.toLocaleString()}
          </Typography>
        </S.LeftColumn>
        <S.CenterColumn>
          <Status status={status} />
        </S.CenterColumn>
        <Image src="icon-arrow-right.svg" alt="Arrow right" width={10} height={12} />
      </S.InvoiceCard>
    </Link>
  );
};

export default InvoiceCard;
