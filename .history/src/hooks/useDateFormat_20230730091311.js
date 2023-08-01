import { useState } from "react";

const useDateFormat = (init) => {
  const [formatDate, setFormatDate] = useState(init);
  const toShortDate = (milisecond) => {
    setFormatDate(new Date(milisecond).toDateString());
    return formatDate;
  };
  return { toShortDate };
};

export default useDateFormat;
