import React, { useEffect, useState } from "react";
import { lowerCase, startCase } from "lodash";
import moment from "moment";
import {
    ArrowPathRoundedSquareIcon,
    ArrowUpTrayIcon,
    ChartBarSquareIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";

interface Props {
    tweet: any;
    avatars: any;
}

const TweetsFeed = ({ tweet, avatars }: Props) => {
    console.log("uu", tweet.url);
    return (
        <div className="flex flex-col space-x-3 p-5 border-b">
            <div className="flex space-x-3">
                <div>
                    <img
                        src="https://images.pexels.com/photos/13457425/pexels-photo-13457425.jpeg?w=100&h=100"
                        alt="profile-img"
                        className=" h-10 w-10 rounded-full"
                    />
                </div>

                <div className="">
                    <div className="flex items-center space-x-1">
                        <p className="mr-1 font-bold">
                            {startCase(tweet.author)}
                        </p>
                        <p className="hidden text-sm text-gray sm:inline">
                            @{tweet.author}
                        </p>
                        <p>{"·"}</p>
                        <p className="text-sm text-gray-500">
                            {moment(tweet.publishedDate).fromNow()}
                        </p>
                    </div>

                    <a href={tweet.url}>
                        <p className="pt-1 px-2 m-0 w-[450px] justify-center items-center cursor-pointer">
                            {tweet.text}
                        </p>
                    </a>
                </div>
            </div>

            <div className="flex justify-between  mt-5">
                <div className="flex h-5 w-5  cursor-pointer item-center space-x-3 text-gray-600">
                    <ChartBarSquareIcon />
                </div>
                <div className="flex space-x-2 cursor-pointer items-center">
                    <div className="flex  h-5 w-5 cursor-pointer item-center space-x-3 text-gray-600">
                        <ChatBubbleOvalLeftEllipsisIcon />
                    </div>
                    {tweet.replies && (
                        <p className="mr-5 text-gray-600">{tweet.replies}</p>
                    )}
                </div>
                <div className="flex space-x-2 cursor-pointer items-center">
                    <div className="flex h-5 w-5 cursor-pointer item-center space-x-3 text-gray-600">
                        <ArrowPathRoundedSquareIcon />
                    </div>
                    {tweet.retweets && (
                        <p className="mr-10 text-gray-600">{tweet.retweets}</p>
                    )}
                </div>
                <div className="flex space-x-2 cursor-pointer items-center">
                    <div className="flex h-5 w-5 cursor-pointer item-center space-x-3 text-gray-600">
                        <HeartIcon />
                    </div>
                    {tweet.likes && (
                        <p className="mr-5 text-gray-600">{tweet.likes}</p>
                    )}
                </div>
                <div className="flex h-5 w-5 cursor-pointer item-center space-x-3 text-gray-600">
                    <ArrowUpTrayIcon />
                </div>
            </div>
        </div>
    );
};

export default TweetsFeed;
