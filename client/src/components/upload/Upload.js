import "./Upload.scss";
import axios from "axios";
import { Link } from "react-router-dom";


function Upload(props) {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios({
    method: "POST",
      url: "http://localhost:8080/posts",
      data: {
        image: event.target.image.value,
        type: event.target.type.value,
        weight: event.target.weight.value,
        bait: event.target.bait.value,
        location: event.target.location.value
      },
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }).then(
      (response) => {
        console.log(response);
        alert("Post published");
        props.history.push("/posts");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <form
      className="upload"
      onSubmit={(event) => {
        onSubmitHandler(event);
      }}
    >
      <h1 className="upload__upload">Upload Post</h1>
      <hr />
      <div className="upload__video-all">
        <div className="upload__thumbnail-all">
          <p className="upload__thumbnail">POST PICTURE</p>
          <input
            id="image"
            type="file"
            className="upload__image-upload"
            placeholder="Add an image of your fish"
            required
          ></input>
        </div>
        <div className="upload__title-description">
          <p className="upload__title-video">TYPE OF FISH</p>

          <input
            id="type"
            className="upload__title"
            placeholder="Add the type of fish"
            required
          ></input>
          <p className="upload__title-video-description">
            WEIGHT OF FISH
          </p>
          <input
            id="weight"
            className="upload__title"
            placeholder="Add the weight of your fish"
            required
          ></input>
          <p className="upload__title-video-description">
            BAIT USED
          </p>
          <input
            id="bait"
            className="upload__title"
            placeholder="Add the bait used to catch your fish"
            required
          ></input>
          <p className="upload__title-video-description">
            LOCATION
          </p>
          <input
            id="location"
            className="upload__title"
            placeholder="Add the location where you caught your fish"
            required
          ></input>
        </div>
      </div>
      <hr />
      <div className="upload__buttons">
        <a href="/">
          <button type="submit" className="upload__publish">
            PUBLISH
          </button>
        </a>
        <Link to="/">
        <button className="upload__cancel">CANCEL</button>
        </Link>
          
      </div>
    </form>
  );
}
export default Upload;