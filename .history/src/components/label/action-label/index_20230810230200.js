import { Button, Typography } from "@mui/material";
import React from "react";
import { POST_STATUS } from "~/utils/constant";

const ActionLabel = ({ status, onClick }) => {
  let userText = "";
  let action = "";
  switch (status) {
    case POST_STATUS.APPROVED:
      userText = "Ẩn tin";
      action = POST_STATUS.HIDDEN;
      break;
    case POST_STATUS.CREATED_REJECT:
      userText = "Duyệt tin";
      action = POST_STATUS.create;
      break;
    case POST_STATUS.UPDATE_REJECTED:
      action = [POST_STATUS.HIDDEN];

      break;
    case POST_STATUS.HIDDEN:
      userText = "Tin ẩn";
      break;
    case POST_STATUS.CREATED_PENDING:
    case POST_STATUS.UPDATE_PENDING:
      userText = "Hủy yêu cầu";
      break;
    default:
      break;
  }
  return (
    <Button variant="outlined" color="warning" onClick={onClick}>
      {userText}
    </Button>
  );
};
export default ActionLabel;
