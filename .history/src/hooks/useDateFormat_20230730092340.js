import { useEffect, useState } from "react";

const useDateFormat = (init) => {
  const [formatDate, setFormatDate] = useState(init);
  useEffect(() => {}, []);
  const toShortDate = (millis) => {
    const parsedDate = new Date(millis);
    setFormatDate(parsedDate.toDateString());
  };
  return { formatDate, toShortDate };
};

export default useDateFormat;
