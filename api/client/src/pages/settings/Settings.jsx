import "./settings.css";
import Button from "@material-ui/core/Button";
import { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../../context/Context";
 //import axios from "axios";
import axios from "../../context/Client";
import "../../config";




export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { user, dispatch } = useContext(Context);


  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [active, setActive] = useState(false);


  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // setImgData(reader.result);
        setFile(reader.result);
        setActive(true);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }



  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/api/users/" + user._id);
   
            
        const images = res.data.profilePic;
        setFile(images);
      
      setLoading(false);
    };
    getUser();
  }, []);




  const handleSubmit = async (e) => {
    console.log(picture);
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      profilePic: "",
  
    };
    if (picture) {
      const data = new FormData();
      let formData = new FormData();

      formData.append("image",picture);

      const filename = Date.now() + picture.name;
      data.append("name", filename);
      data.append("file", picture);
      
      
      try {
        const name = await axios.post("/api/upload", formData);
        

      

        updatedUser.profilePic = "https://mooimalaysian-f535oyzjxa-as.a.run.app/api/images/"+name.data.filename;
      } catch (err) {}
    }
    try {
      const res = await axios.put( "/api/users/"+ user._id, updatedUser);
      

      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  console.log(active);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? file : "https://mooimalaysian-f535oyzjxa-as.a.run.app/api/images/default-icon.png"}
              alt=""
            />
             
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input id="profilePic" type="file" onChange={onChangePicture} name="image" />
          </div>
          {/* <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}

        <Button
          style={{
            
            width: "100px",
            right: 0,
          }}
          disabled= {!active}
          className="updateButton"
          variant="contained"
          color="primary"
          type="submit"
        >
          UPDATE
        </Button> {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
         
        </form>
      </div>
 
    </div>
  );
}


