import './HeaderAndFooter.css';
let logo = require("../../assets/logo.png")

function Footer() {
    return (
      <footer className="footer">
    <a href="#"><img src={logo} alt="" /></a>
  <div className="footer-nav">
    <ul>
      <li><a href="#">Все слова</a></li>
      <li><a href="#">Мои слова</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>
  </div>
  </footer>
    );
  }
  
  export default Footer;