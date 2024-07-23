import React from 'react'
import {useParams} from 'react-router-dom';

function Home() {
    const {userId} = useParams();
  return (
    <div>
        <h1>Component {userId}</h1>
    </div>
  )
}

export default Home;