import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [localStorage, setLocalStorage] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [localStorage, key]);
  return { localStorage, setLocalStorage };
};

export default useLocalStorage;
