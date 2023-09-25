import './App.css';

import React from 'react';
import { Routes, Route, RouterProvider, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleLogin = (userEmail, userPassword) => {
    return auth
      .signIn(userEmail, userPassword)
      .then((res) => {
        setLoggedIn(true);
        navigate('/movies', {replace: true});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleRegister = (userName, userEmail, userPassword) => {
    return auth
      .signUp(userName, userEmail, userPassword)
      .then(() => {
        handleLogin(userEmail, userPassword)
          .then(() => {
            console.log('success');
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const handleLogOut = () => {
    return auth
      .signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        navigate('/', {replace: true});
      })
      .catch((err) => console.error(err));
  };

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
                  <Header promo={false} loggedIn={loggedIn} handleLogOut={handleLogOut}/>
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
            <Login
                handleLogin={handleLogin}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  )
}

export default App;
