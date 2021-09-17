import "./popular.css";
import { Link } from "react-router-dom";

export default function Popular({ popular }) {


  let blockImage = -1
  let descBlock = -1

  for(let index=0; index<popular.block.length;index++){
    if(popular.block[index].type=="paragraph"){
      descBlock= index;
      break;
    }
  }

  return (
    <>
      <div className="post">
        <div className="postInfo">
          <Link to={`/post/${popular._id}`} className="link">
            <span className="postTitle">{popular.block[0].data.text}</span>
          </Link>
        </div>
        <p className="postDesc">{descBlock > 0 ? popular.block[descBlock].data.text : ''}</p>
        <div className="authorPopular">
          <div>
            <img
              src={popular.profilePic}
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
