import React, { useState } from "react";
import { setCampaign } from "../utils/api";
import { CustomButton } from "../components";
function CreateCampaign() {
    const [owner, setOwner] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [target, setTarget] = useState("");
    const [image, setImage] = useState("");

    const createCampaign = async () => {
        setCampaign(owner, title, description, target, image);
    };

    return (
        <div>
            <div className="flex h-screen justify-center items-center">
                <form className="grid grid-cols-2 gap-4 bg-white shadow-md rounded px-8 pt-6 pb-5">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="owner"
                        >
                            Fundee
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="owner"
                            type="text"
                            placeholder="Address of Fundee"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="title"
                        >
                            Title
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="target"
                        >
                            Target
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="target"
                            type="text"
                            placeholder="Target Amount"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="image"
                        >
                            Cover Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="image"
                            type="text"
                            placeholder="Image url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center">
                        <CustomButton
                            btnType="button"
                            title={"Create"}
                            styles={""}
                            handleClick={() => {
                                createCampaign();
                            }}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateCampaign;
