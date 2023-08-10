import {Button} from "@mui/material";
import {useShareState} from "~/services/SharedStateService";
import {usePointState} from "~/services/PointStateService";
import {useComposeState} from "~/services/ComposeStateService";
import {useEffect, useState} from "react";
import {postService, userService} from "~/services";
import {useQuery} from "@tanstack/react-query";
import {useAuth} from "~/contexts/auth";

const BtnDetail = () => {
    const {
        signInState, isSignIn, checkPoint,
        setSignInStateEvent, setIsSignInEvent,
        setCheckPointEvent, setPointStateEvent, setComposeStateEvent
    } = useShareState();
    const {auth, setAuth} = useAuth();


    const handleUserLogin = async () => {
        //Lấy data user login
        //lay du lieu va kiem tra sign in cua user
        userService.getProfile().then((data) => {
            setAuth(data);
            console.log("auth " + auth.point)

        });
        if (auth != undefined) {
            setIsSignInEvent(true);
            userService.checkPoint().then((data) => {
                setCheckPointEvent(data);
            });
        }
        console.log("is Login" + isSignIn)
    }
    const handleExchange = () => {
        //lay du lieu va kiem tra sign in cua user
        handleUserLogin().then((data) => {

        });
        //Xu lý hien thi các yeu cau sigin, post book, send mail
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

    };
    /*  useEffect(() => {
          //lay du lieu va kiem tra sign in cua user
          handleUserLogin().then((data) => {

          });
      }, []);*/

    return (
        <>
            <Button variant="contained" onClick={handleExchange}>
                Exchange Book
            </Button>
        </>
    );
};
export default BtnDetail;