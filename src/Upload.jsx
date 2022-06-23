import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import "./Upload.css";
import { Link } from "react-router-dom";


import Progress from "./Progress";


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


  return (
    
    <div class="cont">
      <Progress done="20"/>
      <div className="Upload">
        <h1 className=" fl">Upload your floor plans</h1>
        <input
        className="txtinput"
          type="text"
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
       

        <button type="button" class="btn btn-outline-success" onClick={uploadFile}>Upload</button>
        <img src={imageUrls} />
      </div>
      <br/>
      <Link  to = "/upload/heatmap"> <h1 className="Next_color"> <button type="button" class="btn btn-outline-success" >Next</button> </h1> </Link>
    </div>
  );
}
export default Upload;