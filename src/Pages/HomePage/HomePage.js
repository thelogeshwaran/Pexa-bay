import React,{useEffect, useState} from "react";
import UploadForm from "../../Components/UploadForm"
import ImageGrid from "./ImageGrid"
import Modal from "../../Components/Modal";
import { usePrivacy } from "../../Context/PrivacyContext";



function HomePage(){
    const [selected, setSelected] = useState(null);
    const { setPrivacy } = usePrivacy();
    
    
    useEffect(()=>{
        setPrivacy("public");
    },[])
   
    return (
        <div>
            <UploadForm />
            <ImageGrid  setSelected ={setSelected} />
            { selected &&  <Modal selected={selected} setSelected={setSelected}/>}
        </div>
    )
}


export default HomePage;