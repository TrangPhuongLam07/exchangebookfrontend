import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {usePointState} from "~/services/PointStateService";
import {Box} from "@mui/material";
const PointRequire = (props) => {
    const { pointState, setPointStateEvent } = usePointState();
    const handleClose = () => {
        setPointStateEvent(false)
        console.log(pointState)
    };

    return (
        <div>
            <Dialog
                open={pointState}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"You have no enough point to exchange. Please post book!!!"}
                </DialogTitle>

                <DialogContent>
                        <Box sx={{
                            marginLeft: 25,
                        }}>
                            <Button variant="contained">Post book</Button>
                        </Box>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export  default PointRequire;