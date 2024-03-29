import {useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Author from "../../components/author/Author";
import Posts from "../../components/posts/Posts";
import Populars from "../../components/populars/Populars";
import "./home.css";
import { useLocation } from "react-router";
import "../../config";
import { Context } from "../../context/Context";
 //import axios from "axios";
 import axios from "../../context/Client";


export default function Home() {
  const [posts, setPosts] = useState([]);
  const { user, dispatch } = useContext(Context);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts" + search);
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
        <div className="one"> <h1>Might interest you...</h1> <Posts posts={posts} /></div>
        <div className="two"> <h1>Latest Post</h1> <Populars populars={posts} /></div>
          </div>
          <Author/>       

      </div>
    </>
  );
}
