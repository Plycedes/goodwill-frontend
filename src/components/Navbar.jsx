import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CustomButton } from "../components";
import { connect } from "../utils/api";

function Navbar() {
    const [address, setAddress] = useState("");

    const connectMetamask = () => {
        connect();
        setAddress("abc");
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://seeklogo.com/images/O/orange-logo-256D2F22D8-seeklogo.com.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 
                                        duration-200 ${
                                            isActive ? "text-orange-700" : "text-grey-700"
                                        } border-b 
                                        border-gray-100 
                                        hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-orange-700 
                                        lg:p-0`
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/create-campaign"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 
                                        duration-200 ${
                                            isActive ? "text-orange-700" : "text-grey-700"
                                        } border-b 
                                        border-gray-100 
                                        hover:bg-gray-50 
                                        lg:hover:bg-transparent 
                                        lg:border-0 hover:text-orange-700 
                                        lg:p-0`
                                    }
                                >
                                    Create Campaign
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <CustomButton
                        btnType="button"
                        title={address ? "Create a campaign" : "Connect"}
                        styles={address ? "bg-[#1dc071]" : "bg-[#8c6dfd]"}
                        handleClick={() => {
                            if (address) navigate("create-campaign");
                            else connectMetamask();
                        }}
                    />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
