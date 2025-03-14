import { ReactElement } from "react";

export const SidebarItem = ({text, icon, open}: {
    text: string;
    icon: ReactElement;
    open?: boolean;
}) => {
    return <div className="flex items-center pl-6 cursor-pointer hover:bg-gray-300 transition-all">
        <div className="p-3">
            {icon}
        </div>
        {open && <div className="p-3 text-lg">
            {text}
        </div>}
    </div>
}