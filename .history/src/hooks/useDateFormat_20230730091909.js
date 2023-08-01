import { useState } from "react";

const useDateFormat = (init) => {
  const [formatDate, setFormatDate] = useState(init);
  useEffect(() => {
    const parsedDate = new Date(millis);
    setDate(parsedDate.toDateString());
    setFormatDate(parsedDate.toDateString());
  }, [init]);
  return formatDate;
};

export default useDateFormat;
