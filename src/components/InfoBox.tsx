import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

type Props = {};

const InfoBox = (props: Props) => {
    return (
        <div className="flex flex-col mt-4 mb-32 mx-5">
            <div className="flex space-x-3 cursor pointer group py-1">
                <p className="text-xs text-slate-700 hover:underline cursor-pointer">
                    Terms of Service
                </p>
                <p className="text-xs text-slate-700 hover:underline cursor-pointer">
                    Privacy Policy
                </p>
                <p className="text-xs text-slate-700 hover:underline cursor-pointer">
                    Cookie Policy
                </p>
            </div>
            <div className="flex space-x-3 cursor-pointer items-end group py-1">
                <p className="text-xs text-slate-700 hover:underline cursor-pointer">
                    Accessibility
                </p>
                <p className="text-xs text-slate-700 hover:underline cursor-pointer">
                    Ads info
                </p>
                <p className="text-xs text-slate-700 hover:underline cursor-pointer">
                    More
                </p>
                <EllipsisHorizontalIcon className="h-4 w-4 text-slate-700 " />
            </div>
            <div className="flex space-x-3 cursor pointer group py-1">
                <p className="text-xs text-slate-700 hover:underline cursor-pointer">
                    © 2023 Chinmaya Naik
                </p>
            </div>
        </div>
    );
};

export default InfoBox;
