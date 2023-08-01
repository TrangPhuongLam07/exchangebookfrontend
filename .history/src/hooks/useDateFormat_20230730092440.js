import { useEffect, useState } from "react";

const useDateFormat = (init) => {
  const [formatDate, setFormatDate] = useState(init);
  useEffect(() => {
    setFormatDate(new Date(millis).toDateString());
  }, []);
  // const toShortDate = (millis) => {
  //   const parsedDate = new Date(millis);
  //   setFormatDate(parsedDate.toDateString());
  // };
  return { formatDate, setFormatDate };
};

export default useDateFormat;
