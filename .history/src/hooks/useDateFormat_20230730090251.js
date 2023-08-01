import { useState } from "react";

const useDateFormat = () => {
  const [formatDate, setFormatDate] = useState();
  const toShortDate = (milisecond) => {
    setFormatDate(
      new Date(milisecond).toLocaleDateString("en-US", {
        formatMatcher: "MM-dd-yyyy",
      })
    );
    return formatDate;
  };
  return {
    toShortDate,
  };
};

export default useDateFormat;
