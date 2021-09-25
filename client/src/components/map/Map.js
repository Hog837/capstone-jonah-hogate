import "./Map.scss";
import '../../App'
import { Component } from "react";
import axios from 'axios'

const url = "http://localhost:8080";

class Map extends Component{
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
        {this.state.data.map((post) => (
          <div className="post" key={post.id}>
            
          </div>
          
        ))}
      </section>
    )
  }
}
export default Map