import { NavLink } from "react-router-dom";

const Navbar = () => {
    const Link = (
        <>
            <li className="">
                <NavLink to="/" className="">
                    Home
                </NavLink>
            </li>
            <li className="">
                <NavLink to="/contactUs" className="">
                    Contact Us
                </NavLink>
            </li>
            <li className="">
                <NavLink to="/dashboard" className="">
                    DashBoard
                </NavLink>
            </li>
            <li className="">
                <NavLink to="/menu" className="">
                    Our Menu
                </NavLink>
            </li>
            <li className="">
                <NavLink to="/order/salad" className="">
                    Order Food
                </NavLink>
            </li>
            <li className="">
                <NavLink to="/login" className="">
                    Login
                </NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar fixed z-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;