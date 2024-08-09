import { useEffect,useState} from "react";

const useOnlineStatus=()=> {

    const[Status,SetStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline", () => {SetStatus(false)});
        window.addEventListener("online", () => {SetStatus(true)});
    },[]);



    return Status; 
};

export default useOnlineStatus;