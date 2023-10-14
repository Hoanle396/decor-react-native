import { useCallback, useState } from 'react';

export const useToggle = (initialState?: boolean): [boolean, any, any] => {
  const [state, setState] = useState<boolean>(!!initialState);
  const toggle = useCallback((): void => setState(prev => !prev), []);
  return [state, toggle, setState];
};
