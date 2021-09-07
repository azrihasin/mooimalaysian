import "./popular.css";
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
        <div className="authorPopular">
          <div>
            <img
              src="http://localhost:5000/api/images/main.jpg"
              alt=""
              className="authorImgPopular"
            />
          </div>
          <div className="authorDescPopular">
            <p className="postUserPopular">{popular.username}</p>
            <div className="postDatePopular">
              {new Date(popular.createdAt).toDateString()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
