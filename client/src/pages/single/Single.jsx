import Sidebar from "../../comp/sidebar/Sidebar"
import Singlepost from "../../comp/singlepost/Singlepost"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <Singlepost/>
        <Sidebar/>
    </div>
  )
}
