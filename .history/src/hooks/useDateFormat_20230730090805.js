import { useState } from "react";

const useDateFormat = () => {
  const [formatDate, setFormatDate] = useState();
  const toShortDate = (milisecond) => {
    setFormatDate(new Date(milisecond).toDateString());
    return formatDate;
  };
  return {
    toShortDate,
  };
};

export default useDateFormat;
