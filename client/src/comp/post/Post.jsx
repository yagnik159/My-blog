import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {

  const PF = "http://localhost:5000/images/"

  return (
    <div className="post">

        {post.photo && (
                  <img src={PF+post.photo} alt="" className="postimg" />
        )}
        <div className="postinfo">
            <div className="postcats">

                {post.categories.map((c)=>(
                  <span className="postcat">{c.name}</span>
                ))}

            </div>
            <Link className="link"  to={`/post/${post._id}`}>
            <span className="posttitle">{post.title}</span>
            </Link>
            <hr />
            <span className="postdate"> {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="desc">{post.desc}</p>
    </div>
  )
}
