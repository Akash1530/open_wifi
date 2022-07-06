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
  const [budget,setBudget]=useState(null);
  const [xy,setXy]=useState({
   x:"",
   y:""
  });

  const [coordinate,setCoordinate]=useState([]);

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
  const { Plan,price } = location.state;

const Write=async()=>{
  set(ref_database(database,"/users"),{
    length,
    width,
    area,
    cntfloor,
    imageUrls,
    budget,
    coordinate
   
  })
}
const changexy= (event) => {
        
        
    let name=event.target.name;
    let value=event.target.value.replace(/\D/g, '');
    
    setXy({...xy,[name]:value});
   }

const AddOrdinate=()=>{

  coordinate.push(xy);
  setCoordinate(coordinate)
  
  setXy({
    x:"",
    y:""
  })
}

  return (
    
    <div className="cont">
      <div style={{position:"relative", left:"-35.5px"}}><Progress done="20"/></div>
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
        className="txtinput"
          type="number"
          placeholder="Approximated budget(INR)"
          value={budget}
          onChange={(event) => {
            setBudget(event.target.value.replace(/\D/g, ''));
          }}
        />
     
     <div className="coordinate">
       <input
         
          type="number"
          name="x"
          placeholder="x"
          value={xy.x}
          onChange={changexy}
        
        />
        <input
       
       type="number"
       name="y"
       placeholder="y"
       value={xy.y}
       onChange={changexy}
     />

   <button onClick={AddOrdinate} type="button" class="btn btn-primary " >Add+  </button>
   <span class="hovertext" data-hover="click add after each x,y coordinate to store coordinates in array">
   <i class="fa fa-lightbulb-o"></i>
  </span>
     </div> 

       

        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
       
       <br/>
        <button type="button" class="btn btn-outline-success" onClick={uploadFile}>imageUpload</button>
        <img src={imageUrls} />
       
      </div>
      <br/>
      <Link  to = "/upload/heatmap" onClick={Write} state={{ Plan: Plan, price:price }}> <h1 className="Next_color"> <button type="button" class="btn btn-outline-success" >Next</button> </h1> </Link>
    </div>
  );
}
export default Upload;