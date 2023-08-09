import {Button} from "@mui/material";
import {useShareState} from "~/services/SharedStateService";
import {usePointState} from "~/services/PointStateService";
import {useComposeState} from "~/services/ComposeStateService";
import {useEffect, useState} from "react";
import {postService, userService} from "~/services";
import {useQuery} from "@tanstack/react-query";
import {useAuth} from "~/contexts/auth";

const BtnDetail = () => {
    const {signInState, isSignIn, checkPoint,
        setSignInStateEvent, setIsSignInEvent,
        setCheckPointEvent, setPointStateEvent, setComposeStateEvent} = useShareState();
   // const {pointState, setPointStateEvent} = useShareState();
  //  const {composeState, setComposeStateEvent} = useShareState();
    const { auth, setAuth } = useAuth();
    const { data, isLoading, isSuccess } = useQuery(["posts"], async () =>
       userService.getProfile()
        //postService.getOne(1)
    );

    const handleExchange = () => {
        const signIn = true;
        const pointCheck = true;
      //  const  res = userService.getProfile();
       // console.log("res: "+res);
        //check sign in
        if (isSignIn) {
            //check point
            if (checkPoint) {
                setComposeStateEvent(true);
            } else {
                setPointStateEvent(true);
            }
        } else {
            setSignInStateEvent(true);
        }

        console.log(isSignIn);
    };

    const handleUserLogin = async () => {
        //Lấy data user login
        //Lấy dữ liệu bài đăng bằng id

       // const res = await userService.getUserSignIn();
        console.log("data: " +data)
        console.log("data.?: " + data.data)
       // console.log("point: " + data.point)
        //set state login
        if (data.status == 200) {
            setIsSignInEvent(true);
            //set state point
            //if (data.point > 0) setCheckPointEvent(true);
        }

        console.log("is Login"+isSignIn)
    }

    useEffect(() => {
        /*handleUserLogin().then({

        });*/
       /* userService.getProfile().then((data) => {
            setAuth(data);
            console.log("auth "+auth)

        });*/
    }, );
    return (
        <>
            <Button variant="contained" onClick={handleExchange}>
                Exchange Book
            </Button>
        </>
    );
};
export default BtnDetail;
