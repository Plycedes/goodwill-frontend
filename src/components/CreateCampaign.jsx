import React, { useState } from "react";
import { setCampaigns } from "../utils/api";
import { CustomButton } from "../components";
function CreateCampaign() {
    const [owner, setOwner] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [target, setTarget] = useState("");
    const [image, setImage] = useState("");
    return (
        <div>
            <div className="h-screen flex justify-center items-center mt-20 mb-20 ">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Name of Student
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name of Student"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div class="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="rollno">
                            Roll Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="rollno"
                            type="text"
                            placeholder="Roll Number"
                            value={rollno}
                            onChange={(e) => setRollno(e.target.value)}
                        />
                    </div>
                    <div class="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="mobileno"
                        >
                            Mobile Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="mobileno"
                            type="text"
                            placeholder="Mobile Number"
                            value={mobileno}
                            onChange={(e) => setMobileno(e.target.value)}
                        />
                    </div>
                    <div class="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="math">
                            Math
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="math"
                            type="text"
                            placeholder="Math"
                            value={math}
                            onChange={(e) => setMath(e.target.value)}
                        />
                    </div>
                    <div class="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="physics">
                            Physics
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="physics"
                            type="text"
                            placeholder="Physics"
                            value={physics}
                            onChange={(e) => setPhysics(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <CustomButton
                            btnType="button"
                            title={"Create"}
                            styles={""}
                            handleClick={() => {
                                setCampaigns();
                            }}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateCampaign;
