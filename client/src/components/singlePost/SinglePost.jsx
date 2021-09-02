import axios from "axios";
import { useContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
// import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import EditorJs from "@natterstefan/react-editor-js";
import { EDITOR_JS_TOOLS } from "../../context/Constants";
import Button from "@material-ui/core/Button";
import UpdateEditor from "../updateEditor/UpdateEditor";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [data, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [update, setUpdate] = useState("UPDATE");
  const [isToggled, setToggled] = useState(false);
  const [pointer, setPointer] = useState("none");
  
  const [addrtype, setAddrtype] = useState(["Everthing Malaysian", "Travel - Eat", "Global","Movie","Mukbang with Mooi"]);
  const Add = addrtype.map((Add) => Add);
  const [category, setCategory] = useState("Everthing Malaysian");


  //FOR SELECT CATEGORY
  const handleAddrTypeChange = (e) =>{ 

    console.log(addrtype[e.target.value]);
    setCategory(addrtype[e.target.value]);
  };


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


  //FOR UPDATE AND DONE UPDATE BUTTON
  const toggleTrueFalse = () => setToggled(!isToggled);

  useEffect(() => {
    if (isToggled) {
      setUpdate("DONE");
      setPointer("auto");
    } else {
      setUpdate("UPDATE");
      setPointer("none");

      

      // const handleUpdate = async () => {
      //   const outputData = await instanceRef.current.save();
      //   try {
      //     await axios.put(`/posts/${path}`, {
      //       username: user.username,
      //       block: outputData.blocks,
      //       category: category,
      //     });

      //     window.location.replace("/post/" + path);
      //   } catch (err) {}
      // };
      // handleUpdate();
    }
  }, [isToggled]);





  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/posts/${post._id}`, {
  //       data: { username: user.username },
  //     });
  //     window.location.replace("/");
  //   } catch (err) {}
  // };

   

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
   
      <form >
        <label>
          Article category:
          <select
            onChange={(e) => handleAddrTypeChange(e)}
            className="browser-default custom-select"
          >
            {Add.map((address, key) => (
              <option value={key}>{address}</option>
            ))}
          </select>
        </label>
      </form>
      <div className="mainSingle">
        <Button
          style={{ position: "absolute", top: "6rem", right: "20%" }}
          className="updateButton"
          onClick={toggleTrueFalse}
          variant="contained"
          color="primary"
        >
          {update}
        </Button>
      </div>
      <div className="singlePost" style={{ pointerEvents: pointer }}>
        <UpdateEditor data={data}/>
        {/* <EditorJs   instanceRef={instance => (instanceRef.current = instance)} tools={EDITOR_JS_TOOLS} data={data} />; */}
      </div>
    </>
  );
}
