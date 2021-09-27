import "./Upload.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { createRef } from "react";


function Upload(props) {
  const fileRef = createRef()

  const handleSubmit = (event) => {
    event.preventDefault();

    const file = fileRef.current.files[0];
    const fileKey = "uploadingFishImage";

    let fileData = new FormData();
    console.log(fileData);
    fileData.append(fileKey, file);
    fileData.append("type", event.target.type.value);
    fileData.append("weight", event.target.weight.value);
    fileData.append("bait", event.target.bait.value);
    fileData.append("location", event.target.location.value);

    let config = { headers: {
      "Content-Type": "multipart/form-data"
    }};

    axios.post(`http://localhost:8080/upload`, fileData, config)
      .then(response => {
        console.log(response)
        alert("Post published");
        props.history.push("/posts");
      })
      .catch(err => console.log(err));

  };
  return (
    <form
      className="upload"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <h1 className="upload__upload">Upload Your Fish</h1>
      <hr />
      <div className="upload__video-all">
        <div className="upload__thumbnail-all">
          <p className="upload__thumbnail">POST PICTURE</p>
          <input
            type="file"
            ref={fileRef}
            className="upload__image-upload"
            placeholder="Add an image of your fish"
            accept="image/png, image/jpeg" 
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
            placeholder="Add the weight of your fish in Lbs"
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