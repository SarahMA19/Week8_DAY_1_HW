import { Link } from "react-router-dom";

const Nav = () => {
    return (
        
<div>
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
            <Link className="nav-item nav-link active" to='/'>Home</Link>
            <Link className="nav-item nav-link active" to='/shop'>Shop</Link>
        </div>
    </nav>

</div>
    );
}

export default Nav;