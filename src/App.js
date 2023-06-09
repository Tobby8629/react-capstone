import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/Home';
import Card from './components/Card';
import Nav from './components/Nav';
import { fetchData } from './Redux/data/dataSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
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
