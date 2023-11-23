import './HeaderAndFooter.css';
let logo = require("../../assets/logo.png")

function Header() {
  return (
    <header className="header">
  <a href="#"><img src={logo} alt="" /></a>
  <nav>
    <ul>
      <li><a href="#">Все слова</a></li>
      <li><a href="#">Мои слова</a></li>
      <li><a href="#">Контакты</a></li>
    </ul>
  </nav>
</header>
  );
}

export default Header;