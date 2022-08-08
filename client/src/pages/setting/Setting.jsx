import "./setting.css"
import Sidebar from "../../comp/sidebar/Sidebar"
import { useContext, useState } from "react"
import { Context } from "../../context/Context"
import axios from "axios"



export default function Setting() {
    const {user,dispatch} = useContext(Context)
    const [file,setFile] = useState(null);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [ succ,setSucc]=useState(false);
    const PF = "http://localhost:5000/images/"

    const handlesubmit= async (e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updateduser={
          userid: user._id,
          username,
          email,
          password
        };
        if(file){
          const data=new FormData();
          const filename=Date.now()+file.name;
          data.append("name",filename)
          data.append("file",file)
          updateduser.profilepic=filename
          try{
            await axios.post("/upload",data);
          }catch(err){
            
          }
        }
        try{
          const res= await axios.put("/user/"+user._id,updateduser)
          setSucc(true);
          dispatch({type:"UPDATE_SUCCESS",payload:res.data})
        }catch(err){
            dispatch({type:"UPDATE_FAILURE"})
        }
      }
  return (
    <div className='setting'>
        <div className="settingwrap">
            <div className="settingtitle">
                <span className="settingupdate">Update your Account</span>
                <span className="settingdelete">Delete your Account</span>
            </div>
            <form className="settingform" onSubmit={handlesubmit}>
                <label>Profile Picture</label>
                <div className="settingpp">
                    <img src={file? URL.createObjectURL(file): PF+user.profilepic} alt="" />
                    <label htmlFor="fileinput">
                    <i className="settingprofileicon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileinput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                                                  
                </div>
                <label> Username</label>
                <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                <label> Email</label>
                <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                <label> password</label>
                <input type="password"  onChange={e=>setPassword(e.target.value)}/>
                <button className="settingsubmit" type="submit">Update</button>
                {
                    succ && <span style={{color:"green",textAlign:"center",marginTop:"20px"}}>Profile has been updated....</span>
                }
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
