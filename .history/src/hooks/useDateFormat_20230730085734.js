const DateFormat = () => {
  const [formatDate, setFormatDate] = useState();
  const toShortDate = (milisecond) => {
    setFormatDate(
      new Date(milisecond).toLocaleDateString("en-US", {
        formatMatcher: "MM-dd-yyyy",
      })
    );
  };
  return {
    formatDate,
    toShortDate,
  };
};

export default DateFormat;
