import React, { useEffect, useState } from "react";
import { startCase } from "lodash";
import moment from "moment";
import {
    ArrowPathRoundedSquareIcon,
    ArrowUpTrayIcon,
    ChartBarSquareIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";

interface Props {
    tweet: any;
    avatars: any;
}

const TweetsFeed = ({ tweet, avatars }: Props) => {
    const [like, setLike] = useState(false);
    const [retweet, setRetweet] = useState(false);
    const [localLike, setLocalLike] = useState(null);
    const [localRetweet, setLocalRetweet] = useState(null);
    const [likeCount, setLikeCount] = useState(0);
    const [retweetCount, setRetweetCount] = useState(0);

    // TODO: localStorage functionality has to be fixed!
    useEffect(() => {
        const localRetweets = JSON.parse(
            localStorage.getItem(tweet._id) || "{}"
        );
        const localLikes = JSON.parse(localStorage.getItem(tweet._id) || "{}");
        if (localRetweets && localLikes) {
            setLocalLike(localLikes);
            setLocalRetweet(localRetweets);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(tweet._id, JSON.stringify(likeCount));
    }, [like]);

    useEffect(() => {
        localStorage.setItem(tweet._id, JSON.stringify(retweetCount));
    }, [retweet]);

    function handleLike() {
        setLike((prev) => !prev);
        handleLikeCount();
    }

    function handleLikeCount() {
        if (like) {
            setLikeCount(Number(tweet.likes--));
        } else {
            setLikeCount(Number(tweet.likes++));
        }
    }

    function handleRetweet() {
        setRetweet((prev) => !prev);
        handleTweetCount();
    }

    function handleTweetCount() {
        if (retweet) {
            setRetweetCount(Number(tweet.retweets--));
        } else {
            setRetweetCount(Number(tweet.retweets++));
        }
    }

    function renderAvatars(): React.ReactNode {
        return (
            avatars && (
                <img
                    src={avatars}
                    alt="profile-img"
                    className=" h-10 w-10 rounded-full"
                />
            )
        );
    }

    function renderLikeCount(value: any): React.ReactNode {
        return (
            value.likes && (
                <p className="mr-5 text-gray-600 hover:text-rose-600">
                    {tweet.likes !== "0" ? tweet.likes : ""}
                </p>
            )
        );
    }

    function renderRetweetCount(value: any): React.ReactNode {
        return (
            value.retweets && (
                <p className="mr-10 text-gray-600 hover:text-green-600">
                    {tweet.retweets !== "0" ? tweet.retweets : ""}
                </p>
            )
        );
    }

    return (
        <div className="flex flex-col space-x-3 p-5 border-b">
            <div className="flex space-x-3">
                <div>{renderAvatars()}</div>

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
                <div className="flex h-9 w-9 p-2 cursor-pointer item-center space-x-3 text-gray-600 hover:bg-blue-200 hover:text-blue-500 hover:rounded-full">
                    <ChartBarSquareIcon />
                </div>
                <div className="flex space-x-2 cursor-pointer items-center hover:bg-text-600">
                    <div className="flex h-9 w-9 p-2 cursor-pointer item-center space-x-3 text-gray-600 hover:bg-blue-200 hover:text-blue-500 hover:rounded-full">
                        <ChatBubbleOvalLeftEllipsisIcon />
                    </div>
                    {tweet.replies && (
                        <p className="mr-5 text-gray-600 hover:text-blue-200 hover:rounded-full">
                            {tweet.replies !== "0" ? tweet.replies : ""}
                        </p>
                    )}
                </div>
                <div className="flex space-x-2 cursor-pointer items-center">
                    <div
                        onClick={handleRetweet}
                        className="flex h-9 w-9 p-2 cursor-pointer item-center space-x-3 text-gray-600 hover:bg-green-200 hover:text-green-600 hover:rounded-full"
                    >
                        {retweet ? (
                            <ArrowPathRoundedSquareIcon className="text-green-500 font-bold" />
                        ) : (
                            <ArrowPathRoundedSquareIcon />
                        )}
                    </div>
                    {localRetweet
                        ? renderRetweetCount(localRetweet)
                        : renderRetweetCount(tweet)}
                    {}
                </div>
                <div className="flex space-x-2 cursor-pointer items-center">
                    <div
                        onClick={handleLike}
                        className="flex h-9 w-9 p-2 cursor-pointer item-center space-x-3 text-gray-600 hover:bg-rose-300 hover:text-rose-600 hover:rounded-full"
                    >
                        {like ? (
                            <HeartIconFilled className="text-rose-500" />
                        ) : (
                            <HeartIcon />
                        )}
                    </div>
                    {localLike
                        ? renderLikeCount(localLike)
                        : renderLikeCount(tweet)}
                </div>
                <div className="flex h-9 w-9 p-2 cursor-pointer item-center space-x-3 text-gray-600 hover:bg-blue-200 hover:text-blue-500 hover:rounded-full">
                    <ArrowUpTrayIcon />
                </div>
            </div>
        </div>
    );
};

export default TweetsFeed;
