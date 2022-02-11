import GlobalStyle from './GlobalStyle';
import Plato from './modules/Plato';
import Header from './modules/Header/Header';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header></Header>
      <div className="container">
        <Plato/>
      </div>
    </>
  );
}

export default App;