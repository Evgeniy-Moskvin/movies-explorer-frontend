import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header promo={true} loggedIn={true}/>
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
            <Movies isSave={false}/>
            <Footer/>
          </>
        }
      />

      <Route
        path="/saved-movies"
        element={
          <>
            <Header promo={false} loggedIn={true}/>
            <Movies isSave={true}/>
            <Footer/>
          </>
        }
      />

      <Route
        path="/profile"
        element={
          <>
            <Header promo={false} loggedIn={true}/>
            <Profile/>
          </>
        }
      />

      <Route
        path="/signup"
        element={
          <Register/>
        }
      />

      <Route
        path="/signin"
        element={
          <Login/>
        }
      />


      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
