import React from 'react'
import Header from '../header/Header'
import "./home.css"



const Home = () => {
  return (
    <div className="home">
      <div>
        <Header/>
      </div>
      <div>
        <Body/>
      </div>
    </div>
  )
}

export default Home