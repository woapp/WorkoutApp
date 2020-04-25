import { useState } from 'react';

export const useSearch = () => {
  const [filter, setFilter] = useState('');
  const matchSearch = (value: string) => value.toLowerCase().includes(filter.toLowerCase());

  return { matchSearch, filter, setFilter };
};
