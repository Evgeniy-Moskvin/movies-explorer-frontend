import './App.css';

import React from 'react';
import { Routes, Route, RouterProvider } from 'react-router-dom';

import { auth } from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleRegister = ({userEmail, userPassword, userName}) => {
    return auth
      .signUp(userEmail, userPassword, userName)
      .then((res) => {
        console.log('success');
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header promo={true} loggedIn={loggedIn}/>
              <Main/>
              <Footer/>
            </>
          }
        />

        <Route
          path="/movies"
          element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={
                <>
                  <Header promo={false} loggedIn={loggedIn}/>
                  <Movies isSave={false}/>
                  <Footer/>
                </>
              }
            ></ProtectedRoute>
          }
        />

        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={
                <>
                  <Header promo={false} loggedIn={loggedIn}/>
                  <Movies isSave={true}/>
                  <Footer/>
                </>
              }
            ></ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              loggedIn={loggedIn}
              element={
                <>
                  <Header promo={false} loggedIn={loggedIn}/>
                  <Profile/>
                </>
              }
            ></ProtectedRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <Register
              handleRegister={handleRegister}
            />
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
    </CurrentUserContext.Provider>
  )
}

export default App;
