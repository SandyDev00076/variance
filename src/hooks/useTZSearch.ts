import React from 'react';
import cTimezones from 'city-timezones';

const useTZSearch = (searchQuery: string) => {
  if (searchQuery.length < 3) return [];
  const results = cTimezones.lookupViaCity(searchQuery);
  return results.map((place) => {
    return {
      city: place.city,
      timezone: place.timezone,
    };
  });
};

export default useTZSearch;
