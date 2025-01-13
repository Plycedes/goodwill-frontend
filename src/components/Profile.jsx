import React, { useState } from "react";
import { Loader } from "../components";

function Profile() {
    const [loading, setLoading] = useState(false);

    return (
        <div>
            {loading && <Loader text="Loading User Profile" />}
            <div className="h-screen w-full flex flex-row">
                <div className="flex flex-col w-1/2 h-full border border-black">
                    <div className="h-1/2 border flex"></div>
                    <div className="h-1/2 border flex"></div>
                </div>
                <div className="flex w-1/2 h-full border bg-gray-100"></div>
            </div>
        </div>
    );
}

export default Profile;
