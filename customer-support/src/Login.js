import React from 'react';

export default function Login () {
    return(
      <button onClick={() => localStorage.setItem('token','valid')}>Click</button>
    )
} 