import React from 'react'
import GlobalStyle from './GlobalStyle'
import Header from './modules/Header/Header'
import Menu from './modules/Menu'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header></Header>
      {/* <div className="recipes container">
        {recipes !== [] && recipes.map(recipe => 
        <Plato key={uuidv4()} recipe={recipe} ></Plato>)}
      </div> */}
      <Menu></Menu>
    </>
  );
}

export default App