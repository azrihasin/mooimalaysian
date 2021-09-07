import { useContext, useState } from "react";
import React, { Component } from "react";
import "./write.css";
import EditorJs from "@natterstefan/react-editor-js";
import { EDITOR_JS_TOOLS } from "../../context/Constants";
import { data } from "../../data";
import axios from "axios";
import { Context } from "../../context/Context";
import Button from "@material-ui/core/Button";



class Write extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 'Everything Malaysian'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  static contextType = Context

  async onSave() {
    const outputData = await this.editorInstance.save();
    
    const user = this.context;
    console.log(user.user.username);
    const newPost = {
      username: user.user.username,
      block:outputData.blocks,
      category: this.state.value,
    };

    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);  
    } catch (err) {};
 
    
  };
  


 
  
  render() {
    return (
      <>
      <div className="editButton">

      <form onSubmit={this.handleSubmit}>
        <label>
          Article category:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Everthing Malaysian">Everthing Malaysian</option>
            <option value="Travel - Eat">Travel - Eat</option>
            <option value="Global">Global</option>
            <option value="Movie">Movie</option>
            <option value="Mukbang with Mooi">Mukbang with Mooi</option>
          </select>
        </label>
       
      </form>

      <Button
          style={{
            float: "right",
          }}
          className="doneButton"
          onClick={this.onSave.bind(this)}
          variant="contained"
          color="primary"
        >
          Publish
        </Button>
      </div>
      
      
        <EditorJs
          editorInstance={instance => (this.editorInstance = instance)}
          tools={EDITOR_JS_TOOLS}
          data={data}
        />
      </>
    );
  }
}

export default Write
