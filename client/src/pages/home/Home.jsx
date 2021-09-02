import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Populars from "../../components/populars/Populars";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      const thePost = res.data;
      setPosts(thePost);
   
    };
    fetchPosts();



  }, [search]);



  return (
    <>
      <div className="home">
        <Header />
       
        <div className="secondHome">
        
        <div className="one"> <h1>Latest Post</h1> <Posts posts={posts} /></div>
        <div className="two"> <h1>Popular Post</h1> <Populars populars={posts} /></div>
    
          
        </div>
      </div>
    </>
  );
}
