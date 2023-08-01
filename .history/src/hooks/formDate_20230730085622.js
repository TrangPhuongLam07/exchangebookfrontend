import React from "react";

const formDate = () => {
  const [formatDate, setFormatDate] = useState();
  const toShortDate = (milisecond) => {
    setFormatDate(
      new Date(milisecond).toLocaleDateString("en-US", {
        formatMatcher: "MM-dd-yyyy",
      })
    );
  };
  return <div>formDate</div>;
};

export default formDate;
