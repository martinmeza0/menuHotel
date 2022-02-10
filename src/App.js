import './App.css'
import Plato from './modules/Plato';
import Header from './modules/Header/Header';

function App() {
  return (

    <>
      <Header></Header>
      <div className="container">
        <Plato/>
      </div>
    </>
  );
}

export default App;
