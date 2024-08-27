import { ethers } from "ethers";
import { abi, contractAddress } from "../constants/contract.js";

let signer, provider;

export const connect = async () => {
    if (window.ethereum !== null) {
        await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        return true;
    } else {
        console.log("Metamask not found");
        return false;
    }
};

export const getCampaigns = async () => {
    const test = [];
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Mining");
        const campaigns = await contract.getCampaigns();
        console.log(campaigns[1].title);
        console.log(campaigns.length);
        return campaigns;
    } catch (error) {
        console.log(error);
    }
};

export const setCampaign = async (owner, title, description, target, image) => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Mining");
        const temp = ethers.parseEther(target);
        const tx = await contract.createCampaign(owner, title, description, temp, image);
        await tx.wait();
        console.log("Complete");
    } catch (error) {
        console.log(error);
    }
};

export const getDonators = async (index) => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Mining");
        const res = await contract.getDonators(index);
        const n = res[0].length;

        const donations = [];

        for (let i = 0; i < n; i++) {
            donations.push({
                donator: res[0][i],
                donation: ethers.formatEther(res[1][i].toString()),
            });
        }

        return donations;
    } catch (error) {
        console.log(error);
    }
};
