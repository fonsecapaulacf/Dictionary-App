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

      <main className="Dictionary"> <Dictionary defaultKeyword="great"/> </main>


    <footer>
    
        <p className="text-center text-muted mt-5">This website was coded by Paula Fonseca, and is <a href="https://github.com/fonsecapaulacf/Dictionary-App/" target="_blank" title="Git Hub">open sourced</a> </p>

    </footer>
      
      
      </div>
    </div>
  );
}

export default App;
