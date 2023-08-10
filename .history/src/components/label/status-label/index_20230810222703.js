import { Typography } from "@mui/material";
import React from "react";
import { POST_STATUS } from "~/utils/constant";

const StatusLabel = ({ status }) => {
  let userText = "";
  switch (status) {
    case POST_STATUS.APPROVED:
      return (userText = "Đã Duyệt");
    case POST_STATUS.CREATED_REJECT:
    case POST_STATUS.UPDATE_REJECTED:
      return (userText = "Không duyệt");

    case POST_STATUS.HIDDEN:
      return (userText = "Tin ẩn");

    case POST_STATUS.UPDATE_PENDING:
      return (userText = "Đang duyệt");
  }
  console.log(userText);
  return <Typography variant="h5">{userText}</Typography>;
};

export default StatusLabel;
