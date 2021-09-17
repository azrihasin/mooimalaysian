import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Header from "@editorjs/header";
import Delimiter from "@editorjs/delimiter";
import Image from "@editorjs/image";
 import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import Embed from "@editorjs/embed";
import "../config";

  

export const EDITOR_JS_TOOLS = {
  header: Header,
  embed: {
    class: Embed,
    config: {
      services: {
        youtube: true,
        coub: true
      }
    }
  },
  table: Table,
  list: List,
  warning: Warning,
  code: Code,
  image:  {
    class: Image,
    config: {
        endpoints: {
          byFile: "https://mooimalaysian-f535oyzjxa-as.a.run.app/api/upload", // Your backend file uploader endpoint
          byUrl: 'http://localhost:5000/api/urlUpload'
      }          
        
  },},
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage
};