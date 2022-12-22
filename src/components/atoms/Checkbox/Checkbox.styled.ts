import styled, { css } from 'styled-components';

export const Checkbox = styled.input`
  display: grid;
  place-content: center;
  width: 16px;
  height: 16px;
  margin-right: 12px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.selago};

  ::before {
    content: url('/icon-check.svg');
    display: none;
  }

  ${({ theme, checked }) =>
    checked &&
    css`
      background-color: ${theme.colors.cornflowerBlue};

      ::before {
        display: block;
      }
    `}
`;

export const CheckboxLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;

    ${Checkbox} {
      border: 1px solid ${({ theme }) => theme.colors.cornflowerBlue};
    }
  }
`;
