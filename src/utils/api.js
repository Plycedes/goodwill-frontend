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
        const tx = await contract.getCampaigns();
        console.log(tx[1].title);
        console.log(tx.length);
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
