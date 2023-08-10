import { useState } from "react";
import { POST_STATUS } from "~/utils/constant";

const useStatus = (init) => {
  const [status, setStatus] = useState(init);

  switch (status) {
    case POST_STATUS.APPROVED:
      return <>Đã Duyệt</>;
    case POST_STATUS.CREATED_REJECT:
      return <>Hủy yêu cầu</>;
    case POST_STATUS.HIDDEN:
      return <>Ẩn tin</>;
    case POST_STATUS.UPDATE_PENDING:
      return <>Đang chờ duyệt</>;
    case POST_STATUS.UPDATE_REJECTED:
      return <>Yêu cầu bị từ chối</>;
    default:
      return <>Đang chờ duyệt</>;
  }
};

export default useStatus;
