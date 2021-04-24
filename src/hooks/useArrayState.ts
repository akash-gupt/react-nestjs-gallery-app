import { isArray, uniqBy } from 'lodash';
import { useState } from 'react';

export const useArrayState = <T>(
  keyName: string,
  defaultValue: T[],
): [T[], (value: T | T[]) => void, (value: T[]) => void] => {
  const [data, setData] = useState<T[]>(defaultValue);

  const updateData = (value: T | T[]) => {
    if (isArray(value)) {
      setData(props => {
        return uniqBy([...props, ...value], keyName);
      });
    } else {
      setData(props => {
        return uniqBy([...props, value], keyName);
      });
    }
  };

  const resetData = (value: T[]) => {
    setData(value);
  };

  return [data, updateData, resetData];
};
