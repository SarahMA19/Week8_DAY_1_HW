import { Link } from "react-router-dom";
import '../static/Nav.css';

const Nav = () => {
    return (
        
<div>
    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container-fluid">
            <Link className="nav-item nav-link active" to='/'>Home</Link>
            <Link className="nav-item nav-link active" to='/shop'>Shop</Link>
            <Link className="nav-item nav-link active" to='/cart'>Cart</Link>
        </div>
    </nav>

</div>
    );
}

export default Nav;