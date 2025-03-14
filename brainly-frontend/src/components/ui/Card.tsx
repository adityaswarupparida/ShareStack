import { BinIcon } from "../../icons/BinIcon";
import { DocumentIcon } from "../../icons/DocumentIcon";
import { ShareIcon } from "../../icons/ShareIcon"
import { XIcon } from "../../icons/XIcon";
import { YouTubeIcon } from "../../icons/YoutubeIcon";
import { Tag } from "./Tag";

interface CardProps {
    title: string;
    link: string;
    source: "Youtube" | "Twitter" | "Notes";
}

// Default size: w-96 h-80 
export const Card = ({ title, link, source }: CardProps) => {
    return <div>
        <div className="p-4 max-w-96 rounded-xl border border-slate-200 shadow-md bg-white">
            <div className="flex justify-between items-center pb-2">
                <div className="flex gap-2 items-center">
                    <span className="text-gray-500">
                        {source === 'Twitter' && <XIcon size='lg'/>}
                        {source === 'Youtube' && <YouTubeIcon size='lg'/>}
                        {source === 'Notes' && <DocumentIcon size='lg'/>}
                    </span>
                    <span className="font-semibold font-sans">
                        {title}
                    </span>
                </div>
                <div className="flex gap-2 text-gray-400">
                    <span>
                        <a href={link} target="_blank">
                            <ShareIcon size='md'/>
                        </a>
                    </span>
                    <BinIcon size='md'/>
                </div>
            </div>
            <div className="h-48 overflow-y-auto">
                {source === 'Youtube' && <iframe className="w-full h-full" src={link.replace("watch?v=","embed/")}
                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>}
                {source === 'Twitter' && <blockquote className="twitter-tweet m-0" data-theme="dark">
                    <a href={link.replace("//x.com","//twitter.com")}></a> 
                </blockquote>}
                {source === 'Notes' && <iframe className="w-full h-full" src={link} title={title} allowFullScreen>
                </iframe>}
            </div>
            <div className="pt-3 pr-2">
                <Tag tags="productivity" />
                <Tag tags="learning" />
            </div>
            <div>
                <div className="text-gray-400 text-xs pt-3">Added on 12/31/2024</div>
            </div>
        </div>
    </div>
}



//     <blockquote className="twitter-tweet">
//         <a href="https://twitter.com/XDevelopers/status/1861111894100320572"></a> 
//     </blockquote> 
//     https://twitter.com/XDevelopers/status/1861111894100320572

{/* <blockquote class="twitter-tweet" data-theme="dark">
    <p lang="en" dir="ltr">
    New Apple buyer’s guide for November!<br><br>Are you buying any new products this month? 
    <a href="https://t.co/uBcI0uCFX3">pic.twitter.com/uBcI0uCFX3</a></p>&mdash; Apple Hub (@theapplehub) <a href="https://twitter.com/theapplehub/status/1856779655182708851?ref_src=twsrc%5Etfw">November 13, 2024</a></blockquote> 
    // <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}