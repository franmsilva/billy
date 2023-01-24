import Image from 'next/image';
import { FC } from 'react';
import { useTheme } from 'styled-components';

import Typography from '@components/atoms/Typography';
import { ETypographyVariant } from '@enums/typography';

import * as S from './EmptyInvoiceList.styled';

const EmptyInvoiceList: FC = () => {
  const theme = useTheme();

  return (
    <S.EmptyListContainer>
      <S.IllustrationContainer>
        <Image src="/illustration-empty.svg" alt="illustration" width="241" height="200" />
      </S.IllustrationContainer>
      <S.Heading as="h2" displayAs={ETypographyVariant.H2}>
        There is nothing here
      </S.Heading>
      <S.Paragraph as="p" displayAs={ETypographyVariant.Body}>
        Create an invoice by clicking the{' '}
        <Typography displayAs={ETypographyVariant.H4} $color={theme.colors.baliHai}>
          New Invoice
        </Typography>{' '}
        button and get started
      </S.Paragraph>
    </S.EmptyListContainer>
  );
};

export default EmptyInvoiceList;
