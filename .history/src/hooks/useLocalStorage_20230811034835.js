import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key, setValue]);
  console.log(value, "xx");
  return { value, setValue };
};

export default useLocalStorage;
