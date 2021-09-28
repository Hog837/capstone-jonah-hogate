import "./Post.scss";
import '../../App'
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from 'axios'

const url = "http://localhost:8080";

class Posts extends Component{
  state={
    data: [],
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios.get(`${url}/posts`).then((response) => {
      this.setState({
        data: response.data,
      })
    })
  }
  render(){
    return(
      <section className="posts">
        <div className='posts__button-container'>
          <Link to="/posts/map">
          <button className='posts__button'>Map</button>
          </Link>
        </div>
        {this.state.data.map((post) => (
          <div className="post" key={post.id}>
            <img className="post__img" src={post.image} alt=""/>
            <div className="post__description">
            <div className="post__type">{post.type}</div>
            <div className="post__weight">{post.weight}</div>
            <div className="post__bait">{post.bait}</div>
            <div className="post__location">{post.location}</div>
            </div>
          </div>
        ))}
      </section>
    )
  }
}
export default Posts