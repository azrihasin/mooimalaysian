import "./popular.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  console.log(post.block[0].data.text);
  // const PF = "http://localhost:5000/images/";

  return (
    <>
      <div className="post">
    
        <div className="postInfo">
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.block[0].data.text}</span>
          </Link>
        </div>
        <p className="postDesc">{post.block[5].data.text} </p>
        <p className="postUser">{post.username}</p>
        <div className="postDate">
            {new Date(post.createdAt).toDateString()}
          </div>
      </div>
    </>
  );
}
