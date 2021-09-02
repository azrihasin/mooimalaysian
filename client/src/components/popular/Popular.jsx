import "./post.css";
import { Link } from "react-router-dom";

export default function Popular({ popular }) {

  return (
    <>
      <div className="post">
        <div className="postInfo">
          <Link to={`/post/${popular._id}`} className="link">
            <span className="postTitle">{popular.block[0].data.text}</span>
          </Link>
        </div>
        <p className="postDesc">{popular.block[5].data.text} </p>
        <div className="author">
          <div>
            <img
              src="http://localhost:5000/api/images/main.jpg"
              alt=""
              className="authorimg"
            />
          </div>
          <div className="authorDescPopular">
            <p className="postUser">{popular.username}</p>
            <div className="postDate">
              {new Date(popular.createdAt).toDateString()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
