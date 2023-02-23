import logo from './logo.png';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

<main className="Dictionary"> <Dictionary defaultKeyword="wine"/> </main>


      <footer className="App-footer text-center"> 
      Coded by Paula Fonseca 
      </footer>
      
      
      </div>
    </div>
  );
}

export default App;
