import './App.css';

import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Main/>
            <Footer/>
          </>
        }
      />
    </Routes>
  )
}

export default App;
