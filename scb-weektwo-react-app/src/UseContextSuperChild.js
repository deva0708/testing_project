import React, { useContext, useState } from 'react'
import { GlobalInfo } from './contextParent';
 
export default function UseContextSuperChild() {
    const {headerColor,fontSize,fontFam,userValue,submitfunc} = useContext(GlobalInfo)
    console.log(userValue,"---userValue---")
 
  return (
    <div>
      <h1 style={{color:headerColor,fontSize:fontSize,fontFamily:fontFam}}>Hello World</h1>
      <input type="submit" value="Submit" onClick={(e)=>submitfunc(e,userValue)}></input>
    </div>
  );
 
}