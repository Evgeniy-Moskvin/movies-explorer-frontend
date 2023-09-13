import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header promo={true} loggedIn={false}/>
            <Main/>
            <Footer/>
          </>
        }
      />

      <Route
        path="/movies"
        element={
          <>
            <Header promo={false} loggedIn={true}/>
            <Movies/>
            <Footer/>
          </>
        }
      />


      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
