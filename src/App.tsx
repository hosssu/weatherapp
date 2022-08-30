import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Helsinki from './components/Helsinki'
import Current from './components/Current'
import Oulu from './components/Oulu'
import WeatherContextProvider from './contexts/WeatherContext';
import './components/style.css'

const App = () => {
  return (
    <div className="App">
      <WeatherContextProvider>
        <BrowserRouter >
          <Routes>
            <Route path='/' element={<Current />} />
            <Route path='/Helsinki' element={<Helsinki />} />
            <Route path='/Oulu' element={<Oulu />} />
          </Routes>
        </BrowserRouter>
      </WeatherContextProvider>
    </div>
  );
}

export default App;
