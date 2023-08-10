import { Typography } from "@mui/material";
import React from "react";
import { POST_STATUS } from "~/utils/constant";

const StatusLabel = ({ status }) => {
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

    case POST_STATUS.UPDATE_PENDING:
      userText = "Đang duyệt";
      break;
  }
  console.log(userText);
  return <Typography variant="h5">{userText}</Typography>;
};

export default StatusLabel;
