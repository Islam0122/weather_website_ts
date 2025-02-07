import React from 'react';
import Logo from '../assets/logo.svg';


const Header: React.FC = () => {
  return (
    <header className="container">
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>
      <div className="a">
        <a href="#" className="nav-link">Вакансии</a>
      </div>
      <div className="btns">
        <button className="login-btn">Войти</button>
        <button className="add-btn">Добавить вакансию</button>
      </div>
    </header>
  );
};

export default Header;
