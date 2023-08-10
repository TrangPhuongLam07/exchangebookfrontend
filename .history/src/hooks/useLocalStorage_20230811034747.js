import React, { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    console.log(localStorage.getItem("profile"));
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key, setValue]);
  return { value, setValue };
};

export default useLocalStorage;
