import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
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
            <Header main={true}/>
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
