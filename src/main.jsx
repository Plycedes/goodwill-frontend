import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
} from "react-router-dom";
import { Dashboard, CreateCampaign, CampaignInfo, Profile } from "./components";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Dashboard />} />
            <Route path="create-campaign" element={<CreateCampaign />} />
            <Route path="campaign-info/:id" element={<CampaignInfo />} />
            <Route path="profile" element={<Profile />} />
        </Route>
    )
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

