import './App.css';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/not-found' element={<NotFound/>}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
