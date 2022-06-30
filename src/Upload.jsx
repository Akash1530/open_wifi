import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ref ,uploadBytes, getDownloadURL, } from "firebase/storage";
import { storage,database} from "./firebase";
import { v4 } from "uuid";
import "./Upload.css";
import { Link } from "react-router-dom";

import {ref as ref_database,set} from "firebase/database" ;

import Progress from "./Progress";
import { actionCreators } from './state/index';
import {useDispatch} from 'react-redux';
import { useLocation } from 'react-router-dom'


function Upload() {
 
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState();
  const [length,setLength]=useState(null);
  const [width,setWidth]=useState(null);
  const [area,setArea]=useState(null);
  const [cntfloor,setCntFloor]=useState(null);

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
  };
  const location = useLocation()
  const { Plan } = location.state;

const Write=()=>{
  set(ref_database(database,"/users"),{
    length,
    width,
    area,
    cntfloor,
    imageUrls
  })
}

  return (
    
    <div class="cont">
      <div style={{position:"relative", left:"8.5px"}}><Progress done="20"/></div>
      <div className="Upload">
        <h1 className=" fl">Upload your floor plans</h1>
        <input
        className="txtinput"
          type="number"
          placeholder="Length(m)"
          value={length}
          onChange={(event) => {
            setLength(event.target.value.replace(/\D/g, ''));
          }}
        />

      <input
        className="txtinput"
          type="text"
          placeholder="Width(m)"
          value={width}
          onChange={(event) => {
            setWidth(event.target.value.replace(/\D/g, ''));
          }}
        />
      
      <input
        className="txtinput"
          type="text"
          placeholder="Area(in m^2)"
          value={area}
          onChange={(event) => {
            setArea(event.target.value.replace(/\D/g, ''));
          }}
        />


        <input
        className="txtinput"
          type="text"
          placeholder="Count of Floor"
          value={cntfloor}
          onChange={(event) => {
            setCntFloor(event.target.value);
          }}
        />

       

        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
       

        <button type="button" class="btn btn-outline-success" onClick={uploadFile}>imageUpload</button>
        <img src={imageUrls} />
        <button type="button" class="btn btn-outline-success" onClick={Write}>save data</button>
      </div>
      <br/>
      <Link  to = "/upload/heatmap" state={{ Plan: Plan }}> <h1 className="Next_color"> <button type="button" class="btn btn-outline-success" >Next</button> </h1> </Link>
    </div>
  );
}
export default Upload;