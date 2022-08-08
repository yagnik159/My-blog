import "./login.css"
import { Link } from "react-router-dom"
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import  axios from "axios";


export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const {dispatch, isFetching} =useContext(Context)

  const handlesubmit=async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res =await axios.post("/auth/login",{
          username:userRef.current.value,
          password:passwordRef.current.value
      })
      dispatch({type:"LOGIN_SUCCESS",payload: res.data})
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"})
    }
  }
  return (
    <div className="login">
    <span className="logintitle">Login</span>
      <form className="loginform" onClick={handlesubmit}>
        <label>Username</label>
        <input type="text" className="logininput"  placeholder="Enter your username..." ref={userRef}/>
        <label>Password</label>
        <input type="password" className="logininput" placeholder="Enter your password..."  ref={passwordRef}/>
        <button className="loginbutton" type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="loginregister">
        <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  )
}
