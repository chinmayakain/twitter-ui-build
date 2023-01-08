import React, { Key, useEffect } from "react";
import { isEmpty, random } from "lodash";
import { SparklesIcon } from "@heroicons/react/24/outline";

import { Tweet, TweetsFeed, Loader } from "../components";

interface Props {
    tweets: any;
    avatars: any;
    loading: any;
}

const Feed = (props: Props) => {
    const { tweets, avatars, loading } = props;

    useEffect(() => {
        renderTweetCards();
    }, [tweets, avatars]);

    function renderTweetCards(): React.ReactNode {
        if (isEmpty(tweets)) {
            return (
                <div className="flex flex-col space-x-3 items-center p-5 border-b justify-center h-[50vh]">
                    <p className="pt-1 px-2 m-0 flex  text-slate-600 font-semibold justify-center items-center cursor-pointer">
                        No Tweets Found!
                    </p>
                    <a href={"/"}>
                        <button className="bg-twitterBlue justify-center mb-6 mt-11 rounded-full font-bold text-white lg:inline md:w-32 h-12 w-24">
                            Refresh
                        </button>
                    </a>
                </div>
            );
        }
        return tweets.map((tweet: any, index: Key) => {
            return (
                <TweetsFeed
                    key={index}
                    tweet={tweet}
                    avatars={avatars[random(0, 70)]?.src?.small}
                />
            );
        });
    }

    return (
        <div className="col-span-7 lg:col-span-4 border-x static md:relative md:left-[28%] lg:left-[55%] right-0">
            <div className="flex items-center justify-between">
                <h1 className="p-5 pb-0 text-xl font-bold  ">Home</h1>
                <SparklesIcon className="h-8 w-8 cursor-pointer mr-5 mt-5 transition-all duration-500 ease-out hover:bg-gray-100 hover:rounded-full active:scale-125" />
            </div>
            {/* Tweet Container  */}
            <div>
                <Tweet />
            </div>
            {/* Feeds */}
            {loading ? (
                <Loader />
            ) : (
                <div className="">
                    {tweets && avatars ? renderTweetCards() : <Loader />}
                </div>
            )}
        </div>
    );
};

export default Feed;
