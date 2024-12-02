import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart,AiOutlineHeart } from "react-icons/ai";


const Header = () => {
    
    return (

        <div className="navbar shadow-md mx-auto b">

        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <NavLink to="/" className={({ isActive }) => `font-bold   ${isActive ? 'text-warning' : 'hover:text-warning '}`} >Home</NavLink>

                    <NavLink to="/addUser" className={({ isActive }) => `font-bold   ${isActive ? 'text-warning' : 'hover:text-warning '}`} >Add User</NavLink>

                    <NavLink to="/dashboard" className={({ isActive }) => `font-bold  ${isActive ? 'text-warning' : 'hover:text-warning '}`} >Dashboard</NavLink>

                    <NavLink to="/about" className={({ isActive }) => `font-bold  ${isActive ? 'text-warning' : 'hover:text-warning '}`} >About</NavLink>

                </ul>
            </div>
            <a className={`text-xl font-semibold`}>Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-8">
            <NavLink to="/" className={({ isActive }) => `font-bold  ${isActive ? 'text-warning' : 'hover:text-warning '}`}>Home</NavLink>

            <NavLink to="/addUser" className={({ isActive }) => `font-bold  ${isActive ? 'text-warning' : 'hover:text-warning '}`}>Add User</NavLink>

            <NavLink to="/dashboard" className={({ isActive }) => `font-bold   ${isActive ? 'text-warning' : 'hover:text-warning '}`}>Dashboard</NavLink>

            <NavLink to="/about" className={({ isActive }) => `font-bold  ${isActive ? 'text-warning' : 'hover:text-warning '}`} >About</NavLink>
            </ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
            <p className={`bg-[#FFFFFF] border p-3 rounded-full`}><AiOutlineShoppingCart /></p>
            <p className={`bg-[#FFFFFF] border p-3 rounded-full`}><AiOutlineHeart /></p>
            
           

        </div>


    </div>
    );
};

export default Header;



