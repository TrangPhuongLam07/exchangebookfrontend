import { Button, Typography } from "@mui/material";
import React from "react";
import { POST_STATUS } from "~/utils/constant";

const ActionLabel = ({ status }) => {
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
  return (
    <Button
      variant="outlined"
      color="warning"
      onClick={() =>
        navigate(`/management/update/${row.getValue("id")}`, {
          replace: true,
        })
      }
    >
      {userText}
    </Button>
  );
};
export default ActionLabel;
