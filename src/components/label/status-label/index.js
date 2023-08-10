import { Typography } from "@mui/material";
import React from "react";
import { POST_STATUS } from "~/utils/constant";

const StatusLabel = ({ status }) => {
  console.log(typeof status, status);
  let userText = "";
  switch (status) {
    case POST_STATUS.APPROVED:
      userText = "Đã Duyệt";
      break;
    case POST_STATUS.CREATED_REJECT:
    case POST_STATUS.UPDATE_REJECTED:
      userText = "Không duyệt";
      break;
    case POST_STATUS.HIDDEN:
      userText = "Tin ẩn";
      break;
    case POST_STATUS.CREATED_PENDING:
    case POST_STATUS.UPDATE_PENDING:
      userText = "Đang chờ duyệt";
      break;
    default:
      break;
  }
  return <Typography variant="body2">{userText}</Typography>;
};
export default StatusLabel;
