import "./Upload.scss";
import axios from "axios";

function Upload(props) {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios({
    method: "POST",
      url: "http://localhost:8080/posts",
      data: {
        "image": event.target.image.value,
        "type": event.target.type.value,
        "weight": event.target.weight.value,
        "bait": event.target.bait.value,
        "location": event.target.location.valuef
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then(
      (response) => {
        console.log(response);
        alert("Video published");
        props.history.push("/");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <form
      className="upload"
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <h1 className="upload__upload">Upload Video</h1>
      <hr />
      <div className="upload__video-all">
        <div className="upload__thumbnail-all">
          <p className="upload__thumbnail">VIDEO THUMBNAIL</p>
        </div>
        <div className="upload__title-description">
          <p className="upload__title-video">TITLE YOUR VIDEO</p>
          <textarea
            id="title"
            className="upload__title"
            placeholder="Add a title to your video"
          ></textarea>
          <p className="upload__title-video-description">
            ADD A VIDEO DESCRIPTION
          </p>
          <textarea
            id="description"
            className="upload__description"
            placeholder="Add a description of your video"
          ></textarea>
        </div>
      </div>
      <hr />
      <div className="upload__buttons">
        <a href="/">
          <button type="submit" className="upload__publish">
            PUBLISH
          </button>
        </a>
        <a href="/">
          <button className="upload__cancel">CANCEL</button>
        </a>
      </div>
    </form>
  );
}
export default Upload;