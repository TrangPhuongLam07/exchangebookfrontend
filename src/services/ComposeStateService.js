import React, {createContext, useState, useContext} from 'react';

const ComposeStateContext = createContext({
    data: false,
    setValue: (value) => {
    }
});
export const useComposeState = () => useContext(ComposeStateContext);

function ComposeStateService({children}) {
    const [composeState, setComposeState] = useState(false);
    const setComposeStateEvent = (composeState) => {
        setComposeState(composeState)
    };

    const value = {composeState, setComposeStateEvent};
    return (
        <ComposeStateContext.Provider value={value}>
            {children}
        </ComposeStateContext.Provider>
    );
}

export default ComposeStateService;