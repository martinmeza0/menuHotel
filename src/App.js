import React from 'react'
import GlobalStyle from './GlobalStyle'
import Header from './modules/Header/Header'
import Menu from './modules/Menu'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header></Header>
      <Menu></Menu>
    </>
  );
}

export default App