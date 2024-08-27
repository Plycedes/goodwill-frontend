import React from "react";
import { useNavigate } from "react-router-dom";

function CampaignCard({ campaign, index }) {
    const navigate = useNavigate();

    const data = {
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: campaign.target,
        amountCollected: campaign.amountCollected,
        image: campaign.image,
        index: index,
    };

    const knowMore = () => {
        navigate(`campaign-info/${index}`, { state: data });
    };
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className="rounded-t-lg w-full h-[240px]"
                    src={campaign.image}
                    alt="Campaign Image"
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {campaign.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {campaign.description}
                </p>
                <button
                    className="text-white bg-orange-700 rounded-lg pb-2 pl-2 pr-2 pt-1"
                    onClick={() => knowMore()}
                >
                    Know more
                </button>
            </div>
        </div>
    );
}

export default CampaignCard;
