import React,{useState, createRef} from "react";
import Text from "../components/text"
import {useSearchParams} from "react-router-dom";
import { exportComponentAsJPEG} from "react-component-export-image";
const EditPage =() =>{
    const [params] =useSearchParams();
    const[count,setCount] =useState(0);
    const memeRef =createRef();
    const addText =()=>{
        setCount(count+1);
    };
    console.log("Meme URL:", params.get("url"));
    return(<div>
        <div style={{width:"700px", border: '1px solid'}} ref={memeRef} >
        <img src={params.get("url")} width="100%" alt="Meme"/>
        {
            Array(count).fill(0).map(e=> <Text/>)
        }
        </div>
        <button onClick={addText}>Add Text</button>
        <button variant="success" onClick={e=> exportComponentAsJPEG(memeRef)}>Save</button>
    </div>
    );
};
export default EditPage;