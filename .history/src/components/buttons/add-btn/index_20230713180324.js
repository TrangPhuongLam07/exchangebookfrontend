import { Box, Fab, Modal, Tooltip, styled } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
const AddPostBtn = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  return (
    <Box>
      <Tooltip
        onClick={() => setOpen(true)}
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
      <StyledModal open={open} onClose={handleClose}>
        <Box width={500} height={350} p={3} borderRadius={8} bgcolor="white">
          Hello
        </Box>
      </StyledModal>
    </Box>
  );
};

export default AddPostBtn;
