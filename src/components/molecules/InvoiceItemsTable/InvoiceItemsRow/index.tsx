import Image from 'next/image';
import { ChangeEvent, FC } from 'react';

import Input from '@src/components/atoms/Input';
import { IInvoiceItem } from '@src/types/invoice';
import { ETypography } from '@src/types/typography';

import * as S from '../InvoiceItemsTable.styled';

interface IInvoiceItemsRowProps {
  item: IInvoiceItem;
  index: number;
  handleChange: (e: ChangeEvent, index: number) => void;
  handleDelete: (index: number) => void;
}

const InvoiceItemsRow: FC<IInvoiceItemsRowProps> = ({
  item,
  index,
  handleChange,
  handleDelete,
}) => {
  const handleInputChange = (e) => handleChange(e, index);

  return (
    <S.Row>
      <S.BodyCell>
        <Input id="item-name" name="name" value={item.name} onChange={handleInputChange} />
      </S.BodyCell>
      <S.BodyCell>
        <Input
          id="item-quantity"
          name="quantity"
          type="number"
          step="0.01"
          value={String(item.quantity)}
          onChange={handleInputChange}
        />
      </S.BodyCell>
      <S.BodyCell>
        <Input
          id="item-price"
          name="price"
          type="number"
          step="0.01"
          value={String(item.price)}
          onChange={handleInputChange}
        />
      </S.BodyCell>
      <S.BodyCell>
        <S.Total as="p" displayAs={ETypography.H4}>
          {item.quantity * item.price}
        </S.Total>
      </S.BodyCell>
      <S.BodyCellCentered>
        <S.IconButton onClick={() => handleDelete(index)}>
          <Image alt="Delete" src="/icon-delete.svg" height={16} width={12.5} />
        </S.IconButton>
      </S.BodyCellCentered>
    </S.Row>
  );
};

export default InvoiceItemsRow;
