import logo from './logo.svg';
import './App.css';
import DictionaryApp from './components/DictionaryApp';



const zawartoscSlownik = []
// Przykładowe definicje słów

// Dodaj więcej definicji tutaj



function App() {
  return (
    <div className="App">
      <DictionaryApp zawartoscSlownik={zawartoscSlownik} />
    </div>
  );
}

export default App;
