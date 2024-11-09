import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { CustomButton } from "../components";
import { connect } from "../utils/api";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";

function Navbar() {
    const [account, setAccount] = useState(localStorage.getItem("account"));

    const connectMetamask = async () => {
        const res = await connect();
        setAccount(res);
    };

    useEffect(() => {
        window.ethereum.on("accountsChanged", accountWasChanged);
    });
    useEffect(() => {}, [account]);

    const accountWasChanged = (accounts) => {
        setAccount(accounts[0]);
        if (accounts[0] === undefined) {
            localStorage.setItem("account", "");
        } else {
            localStorage.setItem("account", accounts[0]);
        }
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
                                        `
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
                                        hover:bg-orange-100 
                                        `
                                    }
                                >
                                    Create Campaign
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {account ? (
                        <div className="flex items-center">
                            <Jazzicon diameter={30} seed={jsNumberForAddress(account)} />
                            <p className="text-xl text-orange-700 ml-3">
                                {account.substring(0, 12)}
                            </p>
                        </div>
                    ) : (
                        <CustomButton
                            btnType="button"
                            title={"Connect"}
                            styles={"bg-[#8c6dfd]"}
                            handleClick={() => {
                                connectMetamask();
                            }}
                        />
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
