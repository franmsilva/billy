import { FC } from 'react';

import CreateInvoiceForm from '@components/organisms/CreateInvoiceForm';
import { EContentDrawerForm, useContentDrawerContext } from '@src/contexts/ContentDrawerContext';
import { InvoiceFormProvider } from '@src/contexts/InvoiceFormContext';
import { useClickOutside } from '@src/hooks/useClickOutside';

import * as S from './Drawer.styled';

const FORM_TYPE_MAP = {
  [EContentDrawerForm.CreateInvoice]: CreateInvoiceForm,
  [EContentDrawerForm.UpdateInvoice]: null,
};

const Drawer: FC = () => {
  const { isOpen, formType, closeContentDrawer } = useContentDrawerContext();
  const ref = useClickOutside(closeContentDrawer);
  const DrawerContent = FORM_TYPE_MAP[formType];

  return (
    <InvoiceFormProvider>
      <S.Overlay $isOpen={isOpen} />
      <S.Body id="drawer" $isOpen={isOpen} ref={ref}>
        <DrawerContent />
      </S.Body>
    </InvoiceFormProvider>
  );
};

export default Drawer;
