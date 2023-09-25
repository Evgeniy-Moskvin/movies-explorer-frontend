import './App.css';

import { useEffect, useState } from "react";
import { Routes, Route, RouterProvider, useNavigate } from 'react-router-dom';

import { auth } from '../../utils/auth';
import { mainApi } from "../../utils/MainApi";
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
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (userEmail, userPassword) => {
    return auth
      .signIn(userEmail, userPassword)
      .then((res) => {
        localStorage.setItem('userEmail', userEmail);
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

  const handleUpdateUser = () => {

  }

  const handleLogOut = () => {
    return auth
      .signOut()
      .then(() => {
        setLoggedIn(false);
        setCurrentUser({});
        navigate('/', {replace: true});
      })
      .catch((err) => {
          console.error(err)
      });
  };

  const tokenCheck = () => {
    if (localStorage.getItem('userEmail')) {
      auth
        .tokenCheck()
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
            console.error(err);
        });
    }
  }

  useEffect(() => {
      tokenCheck();
      if (loggedIn) {
          Promise.all([mainApi.getUserInfo()])
              .then(([userData]) => {
                  setCurrentUser(userData);
              })
              .catch((err) => {
                  console.error(err);
              })
      }
  }, [loggedIn]);

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
                  <Profile handleLogOut={handleLogOut}/>
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
