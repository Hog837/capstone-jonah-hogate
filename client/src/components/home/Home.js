import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home__welcome">
        <h1>Welcome to I-fish</h1>
        <h3 className="home__welcome-question">
          Have you ever tried to go fishing and didn't know where to go or what
          to use?
        </h3>
        <h3 className="home__welcome-answer">Well, i'm here to fix that</h3>
      </div>
      <div className="home__body">
        <div className="home__cards">
          <div className="home__card">
            <Link to="/posts" className="home__link">
              <button className="home__card-button">View Posts</button>
            </Link>
          </div>
          <div className="home__card">
            <Link to="/posts/map" className="home__link">
              <button className="home__card-button">View Map</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
