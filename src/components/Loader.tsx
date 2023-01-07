import React from "react";

type Props = {};

const Loader = (props: Props) => {
    return (
        <div className="flex flex-col space-x-3 p-5 border-b">
            <div className="pt-1 px-2 m-0 flex h-[80vh] justify-center items-center cursor-pointer">
                <div className="flex flex-col justify-center items-center z-50">
                    <div className="w-12 h-12 rounded-full absolute border-2 border-solid border-gray-200"></div>
                    <div className="w-12 h-12 rounded-full animate-spin absolute border-2 border-solid border-blue-500  shadow-md"></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
