import { Box, Fab, Modal, Tooltip } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
const AddPostBtn = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = (toggle) => setOpen(toggle);
  return (
    <Box>
      <Tooltip
        onClick={handleToggle(true)}
        title="Add post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="Add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} onClose={handleToggle(false)}>
        <Box>Hello</Box>
      </Modal>
    </Box>
  );
};

export default AddPostBtn;
