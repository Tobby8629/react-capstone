import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='card/:cardId' Component={Card} />
      </Routes>
    </div>
  );
}

export default App;
