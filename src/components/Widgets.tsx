import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Calendar } from "react-modern-calendar-datepicker";

import { WhatsHappeningCard, WhoToFollow, InfoBox } from "../components";

type Props = {
    handleValueChange: any;
    value: any;
    setValue: Function;
};

const Widgets = (props: Props) => {
    const { handleValueChange, value, setValue } = props;

    return (
        <div className="px-2 mt-2 col-span-3 hidden lg:inline lg:fixed md:right-7 lg:right-5 xl:right-36 overflow-y-scroll scrollbar-hide w-[370px] h-[100vh]">
            {/* SearchBar section */}
            <div className="flex items-center p-3 rounded-full mt-2 space-x-2 bg-gray-100">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-700" />
                <input
                    placeholder="Search Twitter"
                    className="bg-transparent text-gray-900 outline-none"
                />
            </div>
            <div className="mt-4 ml-2">
                <Calendar
                    value={value}
                    onChange={handleValueChange}
                    colorPrimary="#2AA4F4"
                    colorPrimaryLight="rgba(75, 207, 250, 0.4)"
                    shouldHighlightWeekends
                />
            </div>

            {/* What's Happening Section */}
            <WhatsHappeningCard />

            {/* Who To Follow Section */}
            <WhoToFollow />

            {/* Info Box Section */}
            <InfoBox />
        </div>
    );
};

export default Widgets;
