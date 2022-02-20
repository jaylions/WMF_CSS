import logo from './logo.svg';
import './App.css';
import Headword from './components/head';
import Square from './components/Square';
import Navigation from './components/nav'
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Headword />
      <Square title="mint" amount="amount" min="min" button="ang"/>
    </div>
  );
}

export default App;
