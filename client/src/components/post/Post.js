import "./Post.scss";
import '../../App'
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
    console.log(this.state.data);
    return(
      <section className="posts">
        {this.state.data.map((post) => (
          <div className="post" key={post.id}>
            <img className="post__img" src={post.image} alt=""/>
            <p className="post__type">{post.type}</p>
            <p className="post__weight">{post.weight}</p>
            <p className="post__bait">{post.bait}</p>
            <p className="post__location">{post.location}</p>
          </div>
          
        ))}
      </section>
    )
  }
}
export default Posts