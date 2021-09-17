import {useContext, useEffect, useState } from "react";
// import Header from "../../components/header/Header";
import Author from "../../components/author/Author";
import Posts from "../../components/posts/Posts";
// import Populars from "../../components/populars/Populars";
import "./category.css";
import { useLocation ,useParams} from "react-router";
import "../../config";
import { Context } from "../../context/Context";
 //import axios from "axios";
 import axios from "../../context/Client";


export default function Category() {
  const [posts, setPosts] = useState([]);
  const { user, dispatch } = useContext(Context);
  const { search } = useLocation();
  const { category } = useParams();

  

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/categories" + search);
      const thePost = res.data;
      setPosts(thePost);
      
    };
    fetchPosts();
  }, [search]);


  
  console.log(category);


  return (
    <>
      <div className="homecategory">

        <div className="secondHomecategory">        
        <div className="one"> <h1>Might interest you...</h1> <Posts posts={posts} /></div>
        
          </div>
          <Author/>       

      </div>
    </>
  );
}
