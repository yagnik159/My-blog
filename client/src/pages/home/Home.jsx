import { useEffect, useState } from "react"
import Header from "../../comp/header/Header"
import Posts from "../../comp/posts/Posts"
import Sidebar from "../../comp/sidebar/Sidebar"
import "./home.css"
import axois from "axios"
import { useLocation } from "react-router-dom"


export default function Home() {
  const [posts,setposts] = useState([]);
  const {search}= useLocation();


  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res= await axois.get("/posts" + search)
      // console.log(res);
      setposts(res.data)
    }
    fetchPosts();
  },[search])


  return (
    <div>
        <Header/>
        <div className="home">
          <Posts posts={posts}/>
          <Sidebar/>
        </div>
    </div>
  )
}
