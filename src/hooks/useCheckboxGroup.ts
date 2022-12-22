import { useState } from 'react';

type TCheckboxGroupState = Record<string, boolean>;

const getInitialState = <T>(groupNames: T) => {
  return Object.values(groupNames).reduce<TCheckboxGroupState>((state, name) => {
    state[name] = false;
    return state;
  }, {});
};

export const useCheckboxGroup = <T>(groupNames: T) => {
  const [checkboxGroup, setCheckboxGroup] = useState(() => getInitialState<T>(groupNames));

  const handleCheckboxClick = (name: string) => {
    setCheckboxGroup((prevState) => {
      const stateCopy = { ...prevState };
      stateCopy[name] = !stateCopy[name];
      return stateCopy;
    });
  };

  return {
    checkboxGroup,
    handleCheckboxClick,
  };
};
