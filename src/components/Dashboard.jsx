import React, { useEffect, useState } from "react";
import { getCampaigns } from "../utils/api.js";
import { CampaignCard } from "../components";

function Dashboard() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getCampaigns();
            setCampaigns(response);
        })();
    }, []);

    return (
        <div className="m-5">
            <h1 className="text-3xl font-bold text-orange-600">Campaigns</h1>
            <div className="mt-5 flex justify-center">
                <ul className="grid grid-cols-3">
                    {campaigns.map((campaign, i) => (
                        <li key={campaign.title} className="mr-10 mb-10">
                            <CampaignCard campaign={campaign} index={i} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
