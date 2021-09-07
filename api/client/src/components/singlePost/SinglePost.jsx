import axios from "axios";
import { useEffect, useState} from "react";
import { useLocation } from "react-router";
// import { Link } from "react-router-dom";
// import { Context } from "../../context/Context";
import "./singlePost.css";
import UpdateEditor from "../updateEditor/UpdateEditor";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [data, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const { user } = useContext(Context);

  //GET POST FROM THE API
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);

      var data = { blocks: [] };

      res.data.block.map((item) => {
        data.blocks.push(item);
      });

      setPost(data);
      setLoading(false);
    };
    getPost();
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <UpdateEditor data={data} />
    </>
  );
}
