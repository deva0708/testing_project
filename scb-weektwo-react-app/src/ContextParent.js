import React, { createContext, useState } from 'react';
import ContextChild from './ContextChild';
 
export const GlobalInfo = createContext();
 
const ContextParent = () => {
    const [color, setColor] = useState('blue');
 
    return (
        <GlobalInfo.Provider value={{ appColor: color }}>
            <ContextChild />
        </GlobalInfo.Provider>
    )
}
 
export default ContextParent;