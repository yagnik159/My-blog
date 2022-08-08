import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../context/Context";
import "./singlepost.css"

export default function Singlepost() {
  const location = useLocation()
  const path=location.pathname.split("/")[2];
  const [post,setPost]=useState({})
  const PF = "http://localhost:5000/images/"
  const {user} =useContext(Context);
  const  [title,setTitle] = useState("")
  const  [desc,setDesc] = useState("")
  const  [update,setUpdate] = useState(false)



  const hadledelete= async()=>{
    try{
      await axios.delete("/posts/"+path,{data:{username:user.username}});
      window.location.replace("/");
    }catch(err){

    }
  }

  const handleupdate = async ()=>{
    try{
      await axios.put("/posts/"+path,
      {username:user.username,title,desc});
      // window.location.reload();
      setUpdate(false)
    }catch(err){

    }
  }

  useEffect(()=>{
    const getPost = async()=>{
      const res=await axios.get("/posts/"+path);
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    }
    getPost()
  },[path])
  return (
    <div className='singlepost'>
        <div className="singlepostwrap">
        {post.photo && (
          <img src={PF+post.photo} alt="" className="singlepostimg" />
        )}
        {update ? (
          <input type="text" value={title} className="singlepostinputtitle" onChange={(e)=>setTitle(e.target.value)}></input>
        ):
        (
            <h1 className="singleposttitle">{title}
                {post.username === user.username && 
      
                <div className="singlepostedit">
                <i className="singleposticon fa-solid fa-pen-to-square" onClick={()=>setUpdate(true)}></i>
                <i className="singleposticon fa-regular fa-trash-can" onClick={hadledelete}></i>
                </div>
                }
            </h1>
        )
        }
            <div className="singlepostinfo">
                <span className="singlepostauthor"> Author:
                  <Link className="link" to={`/?user=${post.username}`}>
                    <b>{post.username}</b>
                  </Link>
                </span>
                <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            {update?<textarea className="singlepostinputdesc"  value={desc} onChange={(e)=>setDesc(e.target.value)}/>:
            <p className="singlepostdesc">{desc}</p>
            }
            {update&&
            <button className="singlepostbutton" onClick={handleupdate}>Update</button>
            }
        </div>
    </div>
  )
}
