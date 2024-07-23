import React, { useContext } from 'react';
import { GlobalInfo } from './ContextParent';
 
const ContextSuperchild = () =>{
    const { appColor } = useContext(GlobalInfo);
    return (
        <h1 style={{ color: appColor }}>Hello</h1>
    )
}
 
export default ContextSuperchild;