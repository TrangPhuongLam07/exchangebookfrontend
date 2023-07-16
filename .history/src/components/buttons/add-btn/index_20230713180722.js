import {
  Avatar,
  Box,
  Fab,
  Modal,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
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
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
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
        <Box width={500} height={350} p={3} borderRadius={4} bgcolor="white">
          <Typography variant="h6" color="gray">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://source.unsplash.com/random"
              sx={{ width: 30, height: 30 }}
            />
          </UserBox>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default AddPostBtn;
