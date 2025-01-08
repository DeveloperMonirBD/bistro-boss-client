import { FaAd, FaBars, FaBook, FaCalendar, FaHistory, FaHome, FaList, FaMailBulk, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin()

    return (
        <div className="flex">
            {/* dashboard side bar  */}
            <div className="w-72 min-h-screen bg-[#D1A054]">
                <div className="text-center mt-10 mb-12">
                    <h2 className="uppercase text-3xl font-bold">Bistro Boss</h2>
                    <h3 className="uppercase text-2xl font-semibold leading-relaxed">Restaurant</h3>
                </div>

                <div className="">
                    <ul className="menu p-4 text-lg leading-relaxed">
                        {isAdmin ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensils />
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <FaList />
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaBook />
                                        Manage Bookings <span>({cart.length})</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaUsers />
                                        All Users
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaHistory />
                                        Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart />
                                        My Cart <span>({cart.length})</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd />
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList />
                                        My Booking
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* shared nav link  */}
                    <div className="divider "></div>

                    <ul className="menu p-4 text-lg leading-relaxed">
                        <li>
                            <NavLink to="/">
                                <FaHome />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">
                                <FaBars />
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/salad">
                                <FaShop />
                                Order Food
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactUs">
                                <FaMailBulk />
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* dashboard content  */}
            <div className="flex-1 p-8 bg-[#F7F7F9]">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
