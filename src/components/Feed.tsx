import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";

type Props = {};

const Feed = (props: Props) => {
    return (
        <div className="col-span-7 lg:col-span-4">
            <div className="flex items-center justify-between">
                <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
                <SparklesIcon className="h-8 w-8 cursor-pointer mr-5 mt-5 transition-all duration-500 ease-out hover:bg-gray-100 active:scale-125" />
            </div>
        </div>
    );
};

export default Feed;
