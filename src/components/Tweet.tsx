import React, { useState } from "react";
import { isEmpty } from "lodash";
import {
    CalendarIcon,
    FaceSmileIcon,
    MapPinIcon,
    PhotoIcon,
    ListBulletIcon,
    GifIcon,
} from "@heroicons/react/24/outline";

interface Props {}

const Tweet = (props: Props) => {
    const [input, setInput] = useState("");

    return (
        <div className="flex space-x-2 items-start py-3 px-5 border-b">
            <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                className="rounded-full w-14 h-14 object-cover"
                alt="avatar"
            />

            <div className="flex flex-1 items-center pl-2">
                <form className="flex flex-col flex-1">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="What's happening?"
                        className="h-18 py-3 w-full text-xl outline-none placeholder:text-xl"
                    />
                    <div className="flex items-center justify-between  mt-3 ">
                        <div className="flex space-x-3 text-twitterBlue font-bold">
                            <PhotoIcon className="h-5 w-5 cursor-pointer hover:rounded-full hover:bg-blue-100 " />
                            <GifIcon className="h-5 w-5 cursor-pointer hover:rounded-full hover:bg-blue-100" />
                            <ListBulletIcon className="h-5 w-5 cursor-pointer hover:rounded-full hover:bg-blue-100" />
                            <FaceSmileIcon className="h-5 w-5 cursor-pointer hover:rounded-full hover:bg-blue-100" />
                            <CalendarIcon className="h-5 w-5 cursor-pointer hover:rounded-full hover:bg-blue-100" />
                            <MapPinIcon className="h-5 w-5 cursor-pointer hover:rounded-full hover:bg-blue-100" />
                        </div>
                        <button
                            disabled={isEmpty(input)}
                            className="bg-twitterBlue rounded-full px-5 py-2 font-bold text-white disabled:opacity-40"
                        >
                            Tweet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Tweet;
