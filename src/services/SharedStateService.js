import React, {createContext, useState, useContext} from 'react';

const SharedStateContext = createContext({
    data: false,
    setValue: (value) => {
    }
});
export const useShareState = () => useContext(SharedStateContext);

function SharedStateService({children}) {
    const [sharedState, setSharedState] = useState(false);
    const setSharedStateEvent = (sharedState) => {
        setSharedState(sharedState)
    };

    const value = {sharedState, setSharedStateEvent};
    return (
        <SharedStateContext.Provider value={value}>
            {children}
        </SharedStateContext.Provider>
    );
}

export default SharedStateService;