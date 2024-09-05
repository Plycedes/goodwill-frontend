import React from "react";
import { Navbar } from "./components";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </>
    );
}

export default App;

