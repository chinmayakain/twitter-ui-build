import React, { Key } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

import Tweet from "./Tweet";
import TweetsFeed from "./TweetsFeed";

interface Props {
    tweets: any;
    avatars: any;
}

const Feed = ({ tweets, avatars }: Props) => {
    return (
        <div className="col-span-7 lg:col-span-4 border-x">
            <div className="flex items-center justify-between">
                <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
                <SparklesIcon className="h-8 w-8 cursor-pointer mr-5 mt-5 transition-all duration-500 ease-out hover:bg-gray-100 hover:rounded-full active:scale-125" />
            </div>
            {/* Tweet Container  */}
            <div>
                <Tweet />
            </div>
            {/* Feeds */}
            <div className="">
                {tweets &&
                    tweets.map((tweet: any, index: Key) => {
                        // console.log(avatars);
                        return (
                            <TweetsFeed
                                key={index}
                                tweet={tweet}
                                avatars={avatars}
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Feed;
