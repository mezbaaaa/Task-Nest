import { NavLink, useNavigate } from 'react-router';
import logo from '../../assets/computer-worker.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const navigate = useNavigate();
    const { user, signoutUser } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    const handleThemeToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const handleSignOut = () => {
        signoutUser().then(result => {
            navigate('/login');
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="sticky top-0 z-50 flex justify-between items-center text-white px-6 md:px-10 py-2 border-b border-gray-200 dark:border-gray-700 shadow-md rounded-2xl backdrop-blur-md bg-pink-100/90 dark:bg-gray-900/80 mx-auto max-w-7xl">
            <div>
                <NavLink to="/" className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="TaskNest Logo" className="h-10 max-sm:hidden" />
                    <span className="text-2xl font-bold tracking-wide text-pink-600 dark:text-pink-300">TaskNest</span>
                </NavLink>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex">
                <ul className="flex px-1 space-x-4 text-base font-medium">
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-pink-500 text-pink-600 dark:text-pink-300' : 'text-gray-700 dark:text-gray-200')} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-pink-500 text-pink-600 dark:text-pink-300' : 'text-gray-700 dark:text-gray-200')} to="/browse_tasks">All Items</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-pink-500 text-pink-600 dark:text-pink-300' : 'text-gray-700 dark:text-gray-200')} to="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-pink-500 text-pink-600 dark:text-pink-300' : 'text-gray-700 dark:text-gray-200')} to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-pink-500 text-pink-600 dark:text-pink-300' : 'text-gray-700 dark:text-gray-200')} to="/support">Support</NavLink>
                    </li>
                    {user && (
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'border-b-2 border-pink-500 text-pink-600 dark:text-pink-300' : 'text-gray-700 dark:text-gray-200')} to="/my_posted_tasks">My Posted Tasks</NavLink>
                        </li>
                    )}
                </ul>
            </div>

            <div className="flex gap-4 max-sm:gap-1 items-center">
                {/* Theme toggle */}
                <div>
                    <label className="swap swap-rotate">
                        <input type="checkbox" onChange={handleThemeToggle} checked={theme === 'dark'} />
                        {/* sun icon */}
                        <svg
                            className="swap-on h-10 w-10 max-sm:h-8 max-sm:w-8 fill-current text-pink-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        {/* moon icon */}
                        <svg
                            className="swap-off h-10 w-10 max-sm:h-8 max-sm:w-8 fill-current text-pink-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
                <div>
                    {user ? <img src={user?.photoURL} alt="User" className="w-8 h-8 :hidden cursor-pointer md:hidden rounded-full" /> : ''}
                </div>

                {/* Mobile Dropdown */}
                <div className="dropdown dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu border border-pink-400 menu-sm dropdown-content mt-3 z-[50] p-2 rounded-box w-56 right-0 space-y-2 text-lg font-medium bg-white/60 dark:bg-gray-800/60 backdrop-blur-md shadow-lg"
                    >
                        <li>
                            <NavLink to="/" onClick={() => document.activeElement.blur()}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/browse_tasks" onClick={() => document.activeElement.blur()}>All Items</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={() => document.activeElement.blur()}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={() => document.activeElement.blur()}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/support" onClick={() => document.activeElement.blur()}>Support</NavLink>
                        </li>
                        {user && (
                            <li>
                                <NavLink to="/my_posted_tasks" onClick={() => document.activeElement.blur()}>My Posted Tasks</NavLink>
                            </li>
                        )}
                        {user ? (
                            <li>
                                <button onClick={handleSignOut}>Logout</button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login" onClick={() => document.activeElement.blur()}>Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/signup" onClick={() => document.activeElement.blur()}>Sign Up</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                {/* User avatar and logout/login for desktop */}
                <div>
                    {user ?
                        <div className="hidden md:flex items-center gap-3">
                            <div className="relative inline-block">
                                <img
                                    src={user?.photoURL}
                                    alt="User"
                                    className="w-11 p-1 border border-gray-300 h-11 cursor-pointer rounded-full"
                                    onClick={() => setShowTooltip(!showTooltip)}
                                />
                                {showTooltip && (
                                    <div className="absolute border text-center left-1/2 top-full mt-2 transform -translate-x-1/2 bg-white dark:bg-gray-800 text-black dark:text-white p-2 rounded-lg shadow-md z-50 w-60">
                                        <p className="font-semibold">{user?.displayName || "No Name"}</p>
                                        <p className="text-sm text-gray-500 mt-1 dark:text-gray-300">{user?.email || "No Email"}</p>
                                    </div>
                                )}
                            </div>
                            <button onClick={handleSignOut} className="border cursor-pointer md:px-3 md:py-1.5 md:rounded-md border-pink-500 bg-pink-500 font-medium text-white">Logout</button>
                        </div>
                        :
                        <div className="hidden md:flex items-center gap-3">
                            <NavLink to="/login" className="border md:px-3 md:py-1.5 md:rounded-md border-pink-500 bg-pink-500 font-medium text-white">Login</NavLink>
                            <NavLink to="/signup" className="border md:px-3 md:py-1.5 md:rounded-md font-medium border-gray-600 hover:bg-pink-400 hover:text-base-100 hover:border-pink-400">Sign up</NavLink>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;