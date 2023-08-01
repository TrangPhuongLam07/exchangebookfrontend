import { useState } from "react";

const useDateFormat = (init) => {
  const [formatDate, setFormatDate] = useState(init);
  useEffect(() => {
    toShortDate(init);
  }, []);
  const toShortDate = (millis) => {
    const parsedDate = new Date(millis);
    setFormatDate(parsedDate.toDateString());
  };
  return { formatDate, toShortDate };
};

export default useDateFormat;
