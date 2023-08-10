import { useState } from "react";
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  });

  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return {
    value,
    setLocalStorage,
  };
};
export default useLocalStorage;
