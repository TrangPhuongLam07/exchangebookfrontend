import { Typography } from "@mui/material";
import React from "react";

const StatusLabel = ({ status }) => {
  let userText = "";
  switch (status) {
    case POST_STATUS.APPROVED:
      userText = "Đã Duyệt";
    case POST_STATUS.CREATED_REJECT:
      userText = "Đã Duyệt";
    case POST_STATUS.HIDDEN:
      userText = "Đã Duyệt";
    case POST_STATUS.UPDATE_PENDING:
      userText = "Đã Duyệt";
    case POST_STATUS.UPDATE_REJECTED:
      userText = "Đã Duyệt";
    default:
      userText = "Đã Duyệt";
  }
  return <Typography variant="h5">{userText}</Typography>;
};

export default StatusLabel;
