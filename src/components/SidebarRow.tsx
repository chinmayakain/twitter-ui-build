import React, { SVGProps } from "react";

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
    return (
        <div className="flex group items-center space-x-2 px-4 py-3 rounded-ful cursor-pointer transition-all duration-200 max-w-fit">
            <Icon className="h-6 w-6" />
            <p className="group-hover:text-twitterBlue hidden md:inline-flex text-base font-light lg:font-normal lg:text-xl">
                {title}
            </p>
        </div>
    );
};

export default SidebarRow;
