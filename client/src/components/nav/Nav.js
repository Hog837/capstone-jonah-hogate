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
            home
          </Link>
        </div>
        <div className="header__container"> 
          <Link to="/posts" className="header__container-link">
            posts
          </Link>
        </div>
        <div className="header__container"> 
          <Link to="/posts/map" className="header__container-link">
          Map
          </Link>
        </div>
        <div className="header__container"> 
          <Link to="/upload" className="header__container-link">
          Upload
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Nav