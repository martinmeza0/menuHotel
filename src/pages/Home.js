import React from 'react'
import GlobalStyle from '../GlobalStyle'
import Header from '../modules/Header/Header'
import Menu from '../modules/Menu'


const Home = () => {
    return (
    <>
      <GlobalStyle/>
      <Header></Header>
      <div>
        <h2> Recommend Dishes:</h2>
        <Menu></Menu>
      </div>
    </>
  );
}


export default Home