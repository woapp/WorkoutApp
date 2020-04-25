import { useState } from 'react';

export const useSearch = () => {
  const [filter, setFilter] = useState('');
  const matchSearch = (value?: string) => {
    if (typeof value === 'string') return value.toLowerCase().includes(filter.toLowerCase());

    return false;
  };

  return { matchSearch, filter, setFilter };
};
