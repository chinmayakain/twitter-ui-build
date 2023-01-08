import React from "react";
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    InboxStackIcon,
    EllipsisHorizontalCircleIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon,
    EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

import { SidebarRow } from "../components";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <div className="flex h-screen static md:fixed flex-col bg-fixed items-center justify-between px-4 md:items-start col-span-2">
            <div>
                <a href={"/"}>
                    <img
                        src="/assets/icons/twitter-240.svg"
                        alt="twitter-logo"
                        className="h-14 w-14 m-3 hover:bg-blue-100 p-2 cursor-pointer hover:rounded-full"
                    />
                </a>
                <SidebarRow title="Home" Icon={HomeIcon} />
                <SidebarRow title="Explore" Icon={HashtagIcon} />
                <SidebarRow title="Notifications" Icon={BellIcon} />
                <SidebarRow title="Messages" Icon={EnvelopeIcon} />
                <SidebarRow title="BookMarks" Icon={BookmarkIcon} />
                <SidebarRow title="Lists" Icon={InboxStackIcon} />
                <SidebarRow title="Sign In" Icon={UserIcon} />
                <SidebarRow title="More" Icon={EllipsisHorizontalCircleIcon} />
                <button className="bg-twitterBlue rounded-full font-bold text-white hidden md:hidden lg:inline md:w-56 mt-2 h-14 mr-12">
                    Tweet
                </button>
            </div>
            <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                        className="rounded-full w-14 h-14 object-cover "
                        alt="avatar"
                    />
                    <div className="hidden md:inline">
                        <h4 className="font-bold cursor-pointer">Tom Riddle</h4>
                        <h4 className="font-normal text-slate-400 cursor-pointer">
                            @heWhoCantBeNamed
                        </h4>
                    </div>
                </div>
                <EllipsisHorizontalIcon className="h-5 w-5 ml-16 hidden md:hidden lg:inline cursor-pointer hover:bg-gray-300 hover:rounded-full" />
            </div>
        </div>
    );
};

export default Sidebar;
