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
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        <div className="flex flex-col items-center px-4 md:items-start col-span-2">
            <img
                src="/assets/icons/twitter-240.svg"
                alt="twitter-logo"
                className="h-10 w-10 m-3"
            />
            <SidebarRow title="Home" Icon={HomeIcon} />
            <SidebarRow title="Explore" Icon={HashtagIcon} />
            <SidebarRow title="Notifications" Icon={BellIcon} />
            <SidebarRow title="Messages" Icon={EnvelopeIcon} />
            <SidebarRow title="BookMarks" Icon={BookmarkIcon} />
            <SidebarRow title="Lists" Icon={InboxStackIcon} />
            <SidebarRow title="Sign In" Icon={UserIcon} />
            <SidebarRow title="More" Icon={EllipsisHorizontalCircleIcon} />
        </div>
    );
};

export default Sidebar;
