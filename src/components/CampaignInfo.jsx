import React from "react";
import { useLocation } from "react-router-dom";

function CampaignInfo() {
    const { state } = useLocation();
    return (
        <div>
            <div className="flex shadow-md rounded mb-5">{state.title}</div>
            <div className="flex shadwo-md justify-center pt-3">Donators</div>
        </div>
    );
}

export default CampaignInfo;
