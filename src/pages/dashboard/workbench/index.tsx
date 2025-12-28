import {Link} from "react-router";

export default function Workbench() {
  return (
    <div>
      <div>
        <Link to="/analysis" className="p-4 bg-black text-white">to analysis</Link>
      </div>
    </div>
  )
}