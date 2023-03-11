import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Card from './components/Card';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="card/:cardId" Component={Card} />
      </Routes>
    </div>
  );
}

export default App;
