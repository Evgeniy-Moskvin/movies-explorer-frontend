import './App.css';

import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';


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


      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
