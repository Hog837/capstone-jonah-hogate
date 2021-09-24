import "./Nav.scss";
import { Link } from "react-router-dom";
import Logo from '../../assets/icons/fish-icon.png'

function Nav(){
  return(
    <header className="header">
      <img src={Logo} alt="" className="header__img"/>
      <div className="header__links">
        
        <div className="header__container"> 
          <Link to="/" className="header__container-link">
            Feed
          </Link>
        </div>
        <div className="header__container"> 
          <Link to="/" className="header__container-link">
            Home
          </Link>
        </div>
        <div className="header__container"> 
          <Link to="/" className="header__container-link">
          About us
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Nav