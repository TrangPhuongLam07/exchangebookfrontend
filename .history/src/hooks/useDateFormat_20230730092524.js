import { useEffect, useState } from "react";

const useDateFormat = (init) => {
  const [formatDate, setFormatDate] = useState(init);
  useEffect(() => {
    setFormatDate(toShortDate(init));
  }, [toShortDate]);
  const toShortDate = (millis) => {
    return new Date(millis).toDateString();
  };
  return { formatDate, toShortDate };
};

export default useDateFormat;
