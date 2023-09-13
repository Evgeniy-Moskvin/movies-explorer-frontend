import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <p className="not-found__error-code">404</p>
      <h1 className="not-found__title">Страница не найдена</h1>

      <Link to="/" className="not-found__link link-animate">Назад</Link>
    </div>
  );
};

export default NotFound;
