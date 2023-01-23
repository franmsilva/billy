import { FC, useState } from 'react';

import { EButtonTheme } from '@components/atoms/Button';
import Checkbox from '@components/atoms/Checkbox';
import { EInvoiceStatus } from '@enums/invoices';
import { useCheckboxGroup } from '@src/hooks/useCheckboxGroup';
import { useClickOutside } from '@src/hooks/useClickOutside';

import * as S from './StatusDropdodwn.styled';

const StatusDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { checkboxGroup, handleCheckboxClick, updateQueryParams } =
    useCheckboxGroup(EInvoiceStatus);
  const ref = useClickOutside(() => {
    if (isOpen) {
      updateQueryParams('/');
      setIsOpen(false);
    }
  });

  const handleDropdownButtonClick = () => {
    // If currently open, update query params before closing
    if (isOpen) {
      updateQueryParams('/');
    }
    setIsOpen((prevState) => !prevState);
  };

  return (
    <S.Container ref={ref}>
      <S.Button
        icon={{ src: '/icon-arrow-down.svg', height: 10, width: 14 }}
        onClick={handleDropdownButtonClick}
        btnTheme={EButtonTheme.Text}
        $isOpen={isOpen}
      >
        Filter by Status
      </S.Button>
      <S.Popover $isOpen={isOpen}>
        {Object.values(EInvoiceStatus).map((status) => (
          <Checkbox
            key={status}
            label={status}
            name={status}
            isChecked={checkboxGroup[status]}
            onClick={() => handleCheckboxClick(status)}
          />
        ))}
      </S.Popover>
    </S.Container>
  );
};

export default StatusDropdown;
