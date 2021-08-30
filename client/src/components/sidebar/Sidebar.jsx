import axios from "axios";
import { useEffect, useState } from "react";
import Popular from "../popular_post/Popular";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar({ posts }) {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);


  return (
    <div className="sidebar">
     <div className="popular">
      {posts.slice(0, 5).map((p,index) => (
        <>
        <div className="number"><h1>{index+1}</h1></div>
        <div className="topic"> <Popular post={p} /></div>
       
        </>
      ))}
    </div>
    </div>
  );
}
