import { Link } from "react-router-dom"
import "./topbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const {user,dispatch} = useContext(Context);
  const handlelogout=()=>{
    dispatch({type:"LOGOUT"})
  }
  const PF = "http://localhost:5000/images/"
  return (
    <div className="top">
      <div className="topleft" >
      <i className="topicon fa-brands fa-facebook-square"></i>
      <i className="topicon fa-brands fa-twitter-square"></i>
      <i className="topicon fa-brands fa-pinterest-square"></i>
      <i className="topicon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topcenter" >
      <ul className="toplist">
        <li className="toplistitem">
          <Link className="link" to="/">HOME</Link>
        </li>
        <li className="toplistitem">
          <Link className="link" to="/">ABOUT</Link>
        </li>
        <li className="toplistitem">
          <Link className="link" to="/">CONTACT</Link>
        </li>
        <li className="toplistitem">
          <Link className="link" to="/write">WRITE</Link>
        </li>
        <li className="toplistitem" onClick={handlelogout}> 
            {user && "LOGOUT"}
        </li>
        
      </ul>
      </div>
      <div className="topright" >
      {
        (user)?(
          <Link className="link" to="/setting ">
              <img className="topimg" src={PF+user.profilepic} alt="">
            </img>
          </Link>

        ):(
          <ul className="toplist">
            <li className="toplistitem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="toplistitem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul> 
        )
      }
        
        <i className="topsearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
