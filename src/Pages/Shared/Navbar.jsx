import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    };

    const link = (
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
                <NavLink to="/secret" className="">
                    Secret
                </NavLink>
            </li>
            <li className="p-0 m-0">
                <Link to="/dashboard/cart">
                    <div className="flex items-center gap-2 p-2">
                        <FaShoppingCart />
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </div>
                </Link>
            </li>

            {user ? (
                <>
                    {/* <span>{user?.displayName}</span> */}
                    <button onClick={handleLogOut} className="btn btn-ghost">
                        logOut
                    </button>
                </>
            ) : (
                <>
                    <li className="">
                        <NavLink to="/login" className="">
                            LogIn
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );
    return (
        <div className="navbar sticky top-0 z-10 bg-base-100">
            <div className=" navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{link}</ul>
            </div>
        </div>
    );
};

export default Navbar;
