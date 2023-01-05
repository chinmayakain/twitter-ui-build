import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};

const WhatsHappeningCard = (props: Props) => {
    const whatsHappeningData = [
        {
            category: "Trending",
            tweet: "Node",
            tweetNumbers: "24.8k Tweets",
        },
        {
            category: "Information Technology . Trending",
            tweet: "Figma",
            tweetNumbers: "47k Tweets",
        },
        {
            category: "Trending in India",
            tweet: "Air India",
            tweetNumbers: "20k Tweets",
        },
        {
            category: "Trending in India",
            tweet: "Air India",
            tweetNumbers: "20k Tweets",
        },
    ];
    return (
        <div className="mt-8 rounded-2xl bg-gray-100 h-[455px]">
            <div className="pb-3 pt-3">
                <h1 className="text-xl font-bold mb-5 px-5 cursor-pointer">
                    What's happening
                </h1>

                {whatsHappeningData.map(({ category, tweet, tweetNumbers }) => (
                    <div className="flex items-start justify-between mt-1 hover:bg-gray-200 w-full px-5 py-2 cursor-pointer">
                        <div className="">
                            <p className="text-sm font-normal text-gray-600">
                                {category}
                            </p>
                            <h2 className="text-base font-bold">{tweet}</h2>
                            <p className="text-sm font-normal text-gray-600">
                                {tweetNumbers}
                            </p>
                        </div>
                        <EllipsisHorizontalIcon className="h-5 w-5" />
                    </div>
                ))}
            </div>
            <div className="text-twitterBlue flex items-center pt-1 px-5 pb-6 text-base hover:bg-gray-200 cursor-pointer">
                Show more
            </div>
        </div>
    );
};

export default WhatsHappeningCard;
