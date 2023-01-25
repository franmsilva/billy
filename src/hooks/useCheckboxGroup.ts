import { ParsedUrlQuery } from 'querystring';

import { useRouter } from 'next/router';
import QueryString from 'qs';
import { useEffect, useState } from 'react';

type TCheckboxGroupState = Record<string, boolean>;

const getInitialState = (groupNames: string[]) =>
  groupNames.reduce<TCheckboxGroupState>((state, name) => {
    state[name] = false;
    return state;
  }, {});

const getCheckboxGroupState = (groupNames: string[], query: ParsedUrlQuery) => {
  const statusParam = query.status;
  const statusFilters = (statusParam as string)?.split(',');

  return groupNames.reduce<TCheckboxGroupState>((state, name) => {
    state[name] = statusFilters?.includes(name) || false;
    return state;
  }, {});
};

export const useCheckboxGroup = (group: Record<string, string>) => {
  const { query, push: routerPush } = useRouter();
  const [checkboxGroup, setCheckboxGroup] = useState(() => getInitialState(Object.values(group)));

  useEffect(() => {
    setCheckboxGroup(getCheckboxGroupState(Object.values(group), query));
  }, [group, query]);

  const handleCheckboxClick = (name: string) => {
    setCheckboxGroup((prevState) => {
      const stateCopy = { ...prevState };
      stateCopy[name] = !stateCopy[name];
      return stateCopy;
    });
  };

  const updateQueryParams = (pathname: string) => {
    const status = Object.entries(checkboxGroup).reduce((enabledFilters, [filter, isEnabled]) => {
      if (isEnabled) enabledFilters.push(filter);

      return enabledFilters;
    }, []);

    const query = QueryString.stringify({ status }, { arrayFormat: 'comma', encode: false });

    routerPush(
      {
        pathname,
        query,
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return {
    checkboxGroup,
    handleCheckboxClick,
    updateQueryParams,
  };
};
