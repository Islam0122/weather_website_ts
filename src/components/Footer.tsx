import React from 'react';
import FooterIcon from '../assets/footer.svg';
import FooterIcon2 from '../assets/footer_logo.svg';



const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <img src={FooterIcon2} alt="devkg logo" className="footer-logo" />
        <p>
          Мы — сообщество разработчиков Кыргызстана. Данный проект поддерживается и администрируется членами нашего сообщества.
        </p>
        <img src={FooterIcon} alt="footer_logo" />
      </div>
    </footer>
  );

};

export default Footer;
