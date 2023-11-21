import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/authors">
        <div>Authors</div>
      </Link>
    </div>
  )
}
