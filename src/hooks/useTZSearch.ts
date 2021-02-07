import React from 'react';
import TZList from '../utils/timeZones';

const useTZSearch = (searchQuery: string) => {
  return TZList.filter((tz) =>
    tz.toLowerCase().includes(searchQuery.toLowerCase()),
  );
};

export default useTZSearch;
