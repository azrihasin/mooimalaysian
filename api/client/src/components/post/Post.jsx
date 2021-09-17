import './post.css'
import { Link } from 'react-router-dom'
import '../../config'
import { useContext, useState, useEffect, useRef } from 'react'

export default function Post({ post }) {
  //console.log(post);
  // const [file, setFile] = useState(null);

  let blockImage = -1
  let descBlock = -1

  for(let index=0; index<post.block.length;index++){
    if(post.block[index].type=="image"){
      blockImage= index;
      break;
    }
  }

  for(let index=0; index<post.block.length;index++){
    if(post.block[index].type=="paragraph"){
      descBlock= index;
      break;
    }
  }


  console.log(post)

  return (
    <>
      <div className="post">
        <img
          className="postImg"
          src={
            blockImage > 0
              ? post.block[blockImage].data.file.url
              : 'https://images.unsplash.com/photo-1613216513114-fd1ba08f64c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
          }
          alt=""
        />
        <div className="postInfo">
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.block[0].data.text}</span>
          </Link>
        </div>
        <p className="postDesc">
          {descBlock > 0 ? post.block[descBlock].data.text : ''}
        </p>
        <div className="author">
          <div>
            <img src={post.profilePic} alt="" className="authorImg" />
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
  )
}
