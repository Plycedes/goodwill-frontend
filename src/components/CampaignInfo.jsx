import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { donate, getDonators } from "../utils/api.js";
import { ethers } from "ethers";
import { CustomButton, Loader } from "../components";
import "react-toastify/ReactToastify.css";
import { toast } from "react-toastify";

function CampaignInfo() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const [donations, setDonations] = useState([]);
    const [donateForm, setDonateForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [amount, setAmount] = useState("");

    useEffect(() => {
        (async () => {
            const response = await getDonators(state.index);
            setDonations(response);
        })();
    }, []);

    useEffect(() => {
        if (donations.length > 0) {
            console.log(donations[0].donator);
        }
    }, [donations]);

    const openDonateForm = () => {
        setDonateForm((prev) => !prev);
    };

    const donateToCampaign = async () => {
        setDonateForm(false);
        setIsLoading(true);
        try {
            await donate(amount, state.index);
            setIsLoading(false);
            toast.success("Success", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            setIsLoading(false);
            toast.error("Something went wrong :(", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div>
            {donateForm && (
                <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
                    <div className="">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-5">
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="amount"
                                >
                                    Amount
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="amount"
                                    type="text"
                                    placeholder="Enter the amount to fund"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center">
                                <CustomButton
                                    btnType="button"
                                    title={"Donate Amount"}
                                    styles={""}
                                    handleClick={() => {
                                        donateToCampaign();
                                    }}
                                />
                                <button
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none ml-2"
                                    onClick={openDonateForm}
                                >
                                    Back
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {isLoading && <Loader />}
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl m-5">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            className="h-full object-cover md:w-48"
                            src={state.image}
                            alt="Image"
                        />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-xl text-orange-600 font-semibold">
                            {state.title}
                        </div>
                        <div className="block mt-1 text-lg leading-tight font-medium text-black">
                            {state.description}
                        </div>

                        <div>
                            <label>Target: </label>
                            <label>{ethers.formatEther(state.target.toString())}</label>
                        </div>
                        <div>
                            <label>Amount Collected: </label>
                            <label>{ethers.formatEther(state.amountCollected.toString())}</label>
                        </div>
                        <div className="mt-4">
                            <button
                                className="bg-orange-700 text-white px-4 py-2 rounded hover:bg-orange-800 focus:outline-none"
                                onClick={openDonateForm}
                            >
                                Donate
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none ml-2"
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col shadow-md justify-center md:max-w-3xl mx-auto">
                <div className="mx-auto mt-2">
                    <h1 className="tracking-wide text-xl text-orange-600 font-semibold">
                        Donations
                    </h1>
                </div>
                <div className="mx-auto mt-5">
                    {donations.length > 0 ? (
                        <table className="w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-center">Sr No.</th>
                                    <th className="px-4 py-2 text-center">Donator</th>
                                    <th className="px-4 py-2 text-center">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations.map((donation, index) => (
                                    <tr key={index} className="bg-white border-b">
                                        <td className="px-4 py-2 text-center">{index + 1}</td>
                                        <td className="px-4 py-2 text-center">
                                            {donation.donator}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            {donation.donation}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Donations will appear here</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CampaignInfo;
