import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <main className="not-found">
      <div className="not-found__content">
          <p className="not-found__error-code">404</p>
          <h1 className="not-found__title">Страница не найдена</h1>
      </div>

        <button type="button" className="not-found__link link-animate" onClick={(evt) => {
            evt.preventDefault();
            navigate(-1);
        }}>Назад</button>
    </main>
  );
};

export default NotFound;
