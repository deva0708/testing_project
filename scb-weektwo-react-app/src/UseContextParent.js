import React, { createContext, useState } from 'react'
import UseContextChild from './UseContextChild'
 
export const GlobalInfo = createContext()
export default function UseContextParent() {
 
 
   
    const [color,setColor] = useState('green')
    const [userData,setUserData] = useState({username:'',password:''})
 
    const handleUsername = (e) =>{
      console.log(e.target.value,"--userName--Chanege--")
      setUserData({...userData,username:e.target.value})
    }
 
    const handlePassword = (e) =>{
      console.log(e.target.value,"--userName--Chanege--")
      setUserData({...userData,password:e.target.value})
    }
 
    const handleSubmit = (e,userValue) =>{
      console.log(e,"--handle--seeee",userValue)
      if(userValue.username === '1234' && userValue.password === '1234'){
        alert('UserName and Password correct')
      }
    }
  return (
    <div>
 
      <label for="username">User name:</label>
  <input type="text" id="username" name="username" onChange={handleUsername}/><br></br>
  <label for="lname">Password : </label>
  <input type="text" id="pass" name="pass" onChange={handlePassword}/><br></br>
  <GlobalInfo.Provider value={{headerColor:color,fontSize:'200px',fontFam:'sans-serif',userValue:userData,submitfunc:(e,userValue)=>handleSubmit(e,userValue)}}>
        <UseContextChild/>
      </GlobalInfo.Provider>
 
    </div>
  );
 
}