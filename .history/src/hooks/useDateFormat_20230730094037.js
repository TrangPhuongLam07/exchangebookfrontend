import { useEffect, useState } from "react";

const useDateFormat = (init) => {
  const [formatDate, setFormatDate] = useState(init);
  const toShortDate = (millis) => {
    return new Date(millis).toDateString();
  };
  useEffect(() => {
    setFormatDate(toShortDate(init));
  }, [toShortDate]);
  return { formatDate, toShortDate };
};

export default useDateFormat;
