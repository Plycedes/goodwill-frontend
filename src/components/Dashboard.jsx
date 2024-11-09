import React, { useEffect, useState } from "react";
import { getCampaigns } from "../utils/api.js";
import { CampaignCard, Loader } from "../components";

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
                {window.ethereum ? (
                    <div>
                        {campaigns ? (
                            <ul className="grid grid-cols-3">
                                {campaigns.map((campaign, i) => (
                                    <li key={campaign.pId} className="mr-10 mb-10">
                                        <CampaignCard campaign={campaign} index={campaign.pId} />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <h1>Connect your wallet</h1>
                        )}
                    </div>
                ) : (
                    <Loader text="Install Metamask to continue" loader={false} />
                )}
            </div>
        </div>
    );
}

export default Dashboard;
