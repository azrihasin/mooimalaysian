import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <>
    
    <div className="posts">
      {posts.slice(0, 4).map((p) => (
        <Post post={p} />
      ))}
    </div>
    </>
  );
}
