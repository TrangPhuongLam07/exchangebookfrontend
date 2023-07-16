import { Fab, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
const AddPostBtn = () => {
  return (
    <Tooltip
      title="Add post"
      sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50%)- 25px" } }}
    >
      <Fab>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default AddPostBtn;
