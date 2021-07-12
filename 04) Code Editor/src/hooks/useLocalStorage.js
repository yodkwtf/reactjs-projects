import { useState, useEffect } from 'react';

const PREFIX = 'codepen-clone';

const useLocalStorage = (key) => {
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    if (jsonValue) {
      return JSON.parse(jsonValue);
    } else {
      return '';
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
