import React, { useContext, useEffect, useState } from "react";
import { EDITOR_JS_TOOLS } from "../../context/Constants";
import DeleteIcon from '@material-ui/icons/Delete';
import { Context } from "../../context/Context";
import Button from "@material-ui/core/Button";
import { useLocation } from "react-router";
import EditorJs from "react-editor-js";
 //import axios from "axios";
 import axios from "../../context/Client";
import "./updateEditor.css";
import "../../config";

export default function UpdateEditor({ data }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(Context);

  const instanceRef = React.useRef(null);
  const [update, setUpdate] = useState("UPDATE");
  const [isToggled, setToggled] = useState(false);
  const [pointer, setPointer] = useState("none");
  const [doneButton, setDoneButton] = useState("hidden");
  const [editButton, setEditButton] = useState("visible");
  const [addrtype, setAddrtype] = useState([
    "Everthing Malaysian",
    "Travel - Eat",
    "Global",
    "Movie",
    "Mukbang with Mooi",
  ]);
  const Add = addrtype.map((Add) => Add);
  const [category, setCategory] = useState("Everthing Malaysian");

  //FOR SELECT CATEGORY
  const handleAddrTypeChange = (e) => {
    console.log(addrtype[e.target.value]);
    setCategory(addrtype[e.target.value]);
  };

  //FOR SAVING DATA AFTER EDIT
  async function handleSave() {
    const outputData = await instanceRef.current.save();
    try {
      await axios.put(`/api/posts/${path}`, {
        username: user.username,
        block: outputData.blocks,
        category: category,
      });

      window.location.replace("/post/" + path);
    } catch (err) {}

    console.log("outputData", outputData);
  }

// FOR DELETING THE POST
async function handleDelete() {
    try {
      await axios.delete(`/api/posts/${path}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };


  //FOR UPDATE AND DONE UPDATE BUTTON
  const toggleTrueFalse = () => setToggled(!isToggled);

  useEffect(() => {
    if (isToggled) {
      setUpdate("DONE");
      setPointer("auto");
      setDoneButton("visible");
      setEditButton("hidden");
    } else {
      setUpdate("UPDATE");
      setPointer("none");
      setDoneButton("hidden");
      setEditButton("visible");
    }
  }, [isToggled]);

  return (
    <React.Fragment>

      {user ? <div className="editButton">
        <form>
          <label
            style={{
              visibility: doneButton,
            }}
          >
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

        <Button
          style={{
            float: "right",
            visibility: editButton,
          }}
          className="updateButton"
          onClick={toggleTrueFalse}
          variant="contained"
          color="primary"
        >
          EDIT
        </Button>

        <Button
        style={{
          marginLeft : "1rem",
          float: "right",
          visibility: doneButton,
        }}
        variant="contained"
        color="secondary"
        onClick={() => {
          toggleTrueFalse();
          handleDelete();
        }}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

        <Button
          style={{
            marginLeft : "1rem",
            float: "right",
            visibility: doneButton,
          }}
          className="doneButton"
          onClick={() => {
            toggleTrueFalse();
          }}
         
          color="secondary"
        >
          Cancel
        </Button>

        <Button
          style={{
            float: "right",
            visibility: doneButton,
          }}
          className="doneButton"
          onClick={() => {
            toggleTrueFalse();
            handleSave();
          }}
          variant="contained"
          color="primary"
        >
          Done
        </Button>
       
      </div> :<div></div> }
      


      <div className="singlePost" style={{ pointerEvents: pointer }}>
        <EditorJs
          instanceRef={(instance) => (instanceRef.current = instance)}
          tools={EDITOR_JS_TOOLS}
          data={data}
        />
      </div>
    </React.Fragment>
  );
}
