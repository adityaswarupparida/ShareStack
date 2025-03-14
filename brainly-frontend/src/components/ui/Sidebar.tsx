import { DocumentIcon } from "../../icons/DocumentIcon"
import { LinkIcon } from "../../icons/LinkIcon"
// import { MainLogoIcon } from "../../icons/MainLogoIcon"
import { TagIcon } from "../../icons/TagIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YouTubeIcon } from "../../icons/YoutubeIcon"
import { Logo } from "../Logo"
import { SidebarItem } from "./SidebarItem"

export const Sidebar = ({open}: {
    open: boolean;
}) => {
    return <div>
        <div className={`${open ? `w-80 bg-white transition ease-out duration-200`: `w-24`} h-screen border-r border-slate-200 shadow-md fixed pt-4`}>
            <div className={`flex gap-2 items-center pl-6`}>
                {/* <div className="text-purple-600"><MainLogoIcon size="xl" /></div> */}
                <div className="text-purple-600">
                    <Logo
                        width={12}
                        height={15}
                        className="w-12 h-15 text-purple-600 animate-float-md"
                    />
                </div>
                {open && <div className="text-2xl font-bold font-alegreya">ShareStack</div>}
            </div>
            <div className="pt-20">
                <SidebarItem open={open} text="Tweets" icon={<TwitterIcon size="lg"/>} />
                <SidebarItem open={open} text="Videos" icon={<YouTubeIcon size="lg"/>} />
                <SidebarItem open={open} text="Document" icon={<DocumentIcon size="lg"/>} />
                <SidebarItem open={open} text="Links" icon={<LinkIcon size="lg"/>} />
                <SidebarItem open={open} text="Tags" icon={<TagIcon size="lg"/>} />
            </div>
        </div>
    </div>
}