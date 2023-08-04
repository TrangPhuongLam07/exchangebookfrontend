import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useShareState } from "~/services/SharedStateService";
import { Box } from "@mui/material";
const LoginRequire = (props) => {
  const { sharedState, setSharedStateEvent } = useShareState();
  const handleClose = () => {
    setSharedStateEvent(false);
    console.log(sharedState);
  };

  return (
    <div>
      <Dialog
        open={sharedState}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Sign in to Exchange book!!!"}
        </DialogTitle>

        <DialogContent>
          <div className={"login-dialog"}>
            <Box
              sx={{
                "& .MuiButton-root": { m: 1, width: "20ch" },
                display: "flex",
              }}
            >
              <Button variant="contained">Sign in</Button>
              <Button variant="contained">Sign up</Button>
            </Box>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default LoginRequire;
