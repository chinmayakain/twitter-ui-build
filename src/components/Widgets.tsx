import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import WhatsHappeningCard from "./WhatsHappeningCard";
import WhoToFollow from "./WhoToFollow";

type Props = {};

const Widgets = (props: Props) => {
    return (
        <div className="px-2 mt-2 col-span-3 hidden lg:inline w-[370px]">
            {/* SearchBar section */}
            <div className="flex items-center p-3 rounded-full mt-2 space-x-2 bg-gray-100">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
                <input
                    className="flex-1 outline-none bg-transparent"
                    type="text"
                    placeholder="Search Twitter"
                />
            </div>

            {/* What's Happening Section */}
            <WhatsHappeningCard />

            {/* Who To Follow Section */}
            <WhoToFollow />
        </div>
    );
};

export default Widgets;
