import { Button } from "@mui/material";
import { useShareState } from "~/utils/services/SharedStateService";
import { usePointState } from "~/utils/services/PointStateService";
import { useComposeState } from "~/utils/services/ComposeStateService";
import { useState } from "react";

const BtnDetail = () => {
  const { sharedState, setSharedStateEvent } = useShareState();
  const { pointState, setPointStateEvent } = usePointState();
  const { composeState, setComposeStateEvent } = useComposeState();

  /* const {signIn, setSignIn} = useState();
    const {pointCheck, setPointCheck} = useState();*/

  const handleExchange = () => {
    const signIn = true;
    const pointCheck = true;

    //check sign in
    if (signIn == true) {
      //check point
      if (pointCheck == true) {
        setComposeStateEvent(true);
      } else {
        setPointStateEvent(true);
      }
    } else {
      setSharedStateEvent(true);
    }

    console.log(sharedState);
  };
  return (
    <>
      <Button variant="contained" onClick={handleExchange}>
        Exchange Book
      </Button>
    </>
  );
};
export default BtnDetail;
