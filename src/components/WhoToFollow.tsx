import React, { Key } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

type Props = {};

const WhoToFollow = (props: Props) => {
    const whoToFollowData = [
        {
            image: "/assets/icons/tesla-48.svg",
            userName: "@tesla",
            name: "Tesla",
        },
        {
            image: "/assets/icons/tailwind-css-48.svg",
            userName: "@tailwind",
            name: "Tailwind",
        },
        {
            image: "/assets/icons/google-48.svg",
            userName: "@google",
            name: "Google",
        },
    ];

    return (
        <div className="mt-8 rounded-2xl bg-gray-100 h-[329px]">
            <div className="pb-2 pt-3">
                <h1 className="text-xl font-bold mb-5 px-5 cursor-pointer">
                    Who to follow
                </h1>

                {whoToFollowData.map(
                    ({ image, userName, name }, index: Key) => (
                        <div
                            key={index}
                            className="flex items-start justify-between mt-1  hover:bg-gray-200 w-full px-5 py-3 cursor-pointer"
                        >
                            <div className="flex items-center">
                                <img src={image} className="h-10 w-10" />
                                <div className="flex flex-col mx-3">
                                    <div className="flex items-center space-x-1">
                                        <h3 className="font-semibold">
                                            {name}
                                        </h3>
                                        <CheckBadgeIcon className="h-5 w-5 text-twitterBlue" />
                                    </div>
                                    <p className="text-sm font-normal text-gray-600">
                                        {userName}
                                    </p>
                                </div>
                            </div>
                            <button className="bg-black rounded-full font-semibold text-white w-24 h-9">
                                Follow
                            </button>
                        </div>
                    )
                )}
            </div>
            <div className="text-twitterBlue flex items-center pt-0 px-6 py-6 text-base hover:bg-gray-200 hover:rounded-b-lg cursor-pointer">
                Show more
            </div>
        </div>
    );
};

export default WhoToFollow;
