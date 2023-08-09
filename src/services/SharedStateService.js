import React, {createContext, useState, useContext} from 'react';

const SharedStateContext = createContext({
    data: false,
    setValue: (value) => {
    }
});
export const useShareState = () => useContext(SharedStateContext);

function SharedStateService({children}) {
    const [signInState, setSignInState] = useState(false);
    const [composeState, setComposeState] = useState(false);
    const [pointState, setPointState] = useState(false);
    const [userData, setUserData] = useState({});

    const [isSignIn, setIsSignIn] = useState(false);
    const [checkPoint, setCheckPoint] = useState(false);
    const setSignInStateEvent = (sharedState) => {
        setSignInState(sharedState)
    };
    const setPointStateEvent = (pointState) => {
        setPointState(pointState)
    };
    const setComposeStateEvent = (composeState) => {
        setComposeState(composeState)
    };
    const setUserDataEvent = (userData) => {
        setComposeState(userData)
    };

    const setIsSignInEvent = (userData) => {
        setIsSignIn(userData)
    };
    const setCheckPointEvent = (userData) => {
        setCheckPoint(userData)
    };

    const value = {signInState, composeState, pointState, userData,
        isSignIn, checkPoint,
        setSignInStateEvent, setPointStateEvent,
        setComposeStateEvent, setUserDataEvent,
        setIsSignInEvent, setCheckPointEvent};
    return (
        <SharedStateContext.Provider value={value}>
            {children}
        </SharedStateContext.Provider>
    );
}

export default SharedStateService;