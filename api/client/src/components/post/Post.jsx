import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  console.log(post.block[0].data.text);
  // const PF = "http://localhost:5000/images/";

  return (
    <>
      <div className="post">
        <img
          className="postImg"
          src={
            "https://images.unsplash.com/photo-1613216513114-fd1ba08f64c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          }
          alt=""
        />
        <div className="postInfo">
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.block[0].data.text}</span>
          </Link>
        </div>
        <p className="postDesc">{post.block[5].data.text} </p>
        <div className="author">
          <div>
            <img
              src="https://mooimalaysian.herokuapp.com/api/images/main.jpg"
              alt=""
              className="authorImg"
            />
          </div>
          <div className="authorDesc">
            <p className="postUser">{post.username}</p>
            <div className="postDate">
              {new Date(post.createdAt).toDateString()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
