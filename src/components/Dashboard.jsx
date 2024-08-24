import React, { useEffect } from "react";
import { getCampaigns } from "../utils/api.js";

function Dashboard() {
    useEffect(() => {
        getCampaigns();
    }, []);
    return <div>Dashboard</div>;
}

export default Dashboard;
