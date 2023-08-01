import { useState } from "react";

const useDateFormat = (init) => {
  console.log("123");
  const [formatDate, setFormatDate] = useState(init);
  const toShortDate = (milisecond) => {
    setFormatDate(new Date(milisecond).toDateString());
  };
  return { formatDate, toShortDate };
};

export default useDateFormat;
