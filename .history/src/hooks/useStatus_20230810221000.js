import { useState } from "react";
import { POST_STATUS } from "~/utils/constant";

const useStatus = (init) => {
  const [status, setStatus] = useState(init);

  switch (status) {
    case POST_STATUS.APPROVED:
      return <>Đã Duyệt</>;

    default:
      break;
  }

  return { status, setStatus };
};

export default useStatus;
