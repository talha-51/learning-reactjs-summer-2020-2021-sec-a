import { Link } from "react-router-dom"


const Navbar = ()=>{

    return (
        <div>
            <Link to="/login">Login</Link> | 
            <Link to="/signup">Sign up</Link> |
            <Link to="/addProduct">Add Product</Link> |
            <Link to="/userlist">Product List</Link>
        </div>
    );
}

export default Navbar;