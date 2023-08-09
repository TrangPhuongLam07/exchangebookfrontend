import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useShareState } from "~/services/SharedStateService";
import { Box } from "@mui/material";
import {useNavigate} from "react-router-dom";
const LoginRequire = (props) => {
  const { signInState, setSignInStateEvent } = useShareState();
  const navigate = useNavigate();
  const handleClose = () => {
    setSignInStateEvent(false);
    console.log(signInState);
  };
  const handleSignIn = () => {
    navigate(`/sign-in`)
  }

  const handleSignUp = () => {
    navigate(`/sign-up`)
  }
  return (
    <div>
      <Dialog
        open={signInState}
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
              <Button variant="contained" onClick={handleSignIn}>Sign in</Button>
              <Button variant="contained" onClick={handleSignUp}>Sign up</Button>
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
