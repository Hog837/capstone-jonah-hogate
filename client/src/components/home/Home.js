import "./Home.scss";
import { Link } from "react-router-dom";

function Home(){
  return(
    <section className="home">
      <div className="home__welcome">
        <h1>Welcome to I-fish</h1>
      </div>
      <div className="home__body">
        <div className="home__card">
          <Link to="/posts" className="home__link">
          <button className="home__card-button">View Posts</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Home