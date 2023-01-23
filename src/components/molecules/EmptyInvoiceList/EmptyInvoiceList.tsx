import Image from 'next/image';
import { FC } from 'react';

import { ETypographyVariant } from '@enums/typography';

import * as S from './EmptyInvoiceList.styled';

const EmptyInvoiceList: FC = () => {
  return (
    <S.EmptyListContainer>
      <S.IllustrationContainer>
        <Image src="/illustration-empty.svg" alt="illustration" width="241" height="200" />
      </S.IllustrationContainer>
      <S.Heading as="h3" displayAs={ETypographyVariant.H3}>
        There is nothing here
      </S.Heading>
      <S.Paragraph as="p" displayAs={ETypographyVariant.Body}>
        Create an invoice by clicking the{' '}
        <S.Span displayAs={ETypographyVariant.Body}>New Invoice</S.Span> button and get started
      </S.Paragraph>
    </S.EmptyListContainer>
  );
};

export default EmptyInvoiceList;
