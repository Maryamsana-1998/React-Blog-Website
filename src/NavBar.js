import {Link} from "react-router-dom"
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create/add" style ={{
              color: "white",
              backgroundColor: "#c1006d",
              borderRadius:"10px"

          }}>New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;