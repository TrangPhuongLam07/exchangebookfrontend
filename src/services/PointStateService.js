import React, { createContext, useState, useContext } from 'react';

const PointStateContext = createContext({
    data:false,
    setValue:(value)=>{}
});
export const usePointState = ()=> useContext(PointStateContext);

function PointStateService({ children }) {
    const [pointState, setPointState] = useState(false);
    const setPointStateEvent = (pointState) => {
        setPointState(pointState)
    };

    const value = {pointState, setPointStateEvent};
    return (
        <PointStateContext.Provider value={value}>
            {children}
        </PointStateContext.Provider>
    );
}
export default PointStateService;