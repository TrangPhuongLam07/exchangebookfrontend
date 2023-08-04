import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useComposeState } from "~/utils/services/ComposeStateService";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const ComposeBox = (props) => {
  const { composeState, setComposeStateEvent } = useComposeState();
  const handleClose = () => {
    setComposeStateEvent(false);
    console.log(composeState);
  };

  return (
    <div>
      <Dialog
        open={composeState}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Enter your message to owner of this book!!!"}
        </DialogTitle>

        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "30ch" },
              width: 100,
              marginLeft: 5,
            }}
            noValidate
            autoComplete="off"
          >
            <div className={"compose-box"}>
              <TextField
                id="outlined-multiline-flexible"
                label="Title"
                multiline
                maxRows={4}
              />

              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                // defaultValue=""
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained">Send</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ComposeBox;
