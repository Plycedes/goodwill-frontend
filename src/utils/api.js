import { ethers } from "ethers";
import { abi, contractAddress } from "../constants/contract.js";

let signer, provider, owner, title, description, target, image;

owner = "0xF416A40EdF205c563E7B12Fdd3a21710c55CfDA3";
title = "Startup 1";
description = "Need funding for a startup";
target = ethers.parseEther("1.54234");
image =
    "https://img.jagranjosh.com/images/2022/August/1082022/what-is-a-start-up-types-funding-compressed.webp";

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
        console.log(tx[0].title);
    } catch (error) {
        console.log(error);
    }
};

export const setCampaigns = async () => {
    try {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        console.log("Mining");
        const tx = await contract.createCampaign(owner, title, description, target, image);
        await tx.wait();
        console.log("Complete");
    } catch (error) {
        console.log(error);
    }
};
