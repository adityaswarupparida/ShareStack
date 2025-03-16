import { Moon, Sun } from "lucide-react";
import { useMove } from "../../hooks/useMove";
import { Logo } from "../Logo";
import { useState } from "react";

export const Navbar = () => {
    const { moved } = useMove();
    const [mode, setMode] = useState(true);

    const onChangeMode = () => {
        setMode(mode => !mode);
        const root = document.querySelector("html")!;
        root.classList.toggle("dark");
    }

    return (
        <nav className={`fixed w-screen h-16 z-40 dark:mix-blend-plus-lighter ${ moved ? `bg-purple-600/5 border-b dark:border-slate-950 shadow-md backdrop-blur-3xl`: ``}`}>
            <div className="flex justify-between">
                <div className={`flex items-center py-4 px-6 gap-2`}>
                    <div className="text-purple-600">
                        <Logo
                            width={12}
                            height={15}
                            className="w-12 h-15 text-purple-600 animate-float-md"
                        />
                    </div>
                    <div className="text-2xl font-bold font-alegreya cursor-pointer dark:text-white">ShareStack</div>
                </div>
                <div className="py-4 px-6">
                    <button 
                        className={`flex w-12 ${mode ? `justify-start border-white` :`justify-end border-black`} rounded-3xl shadow-sm border`}
                        onClick={() => onChangeMode()}
                    >
                        {mode && <span className="rounded-full bg-white"><Sun fill="#000000" size={22}/></span>}
                        {!mode && <span className="rounded-full bg-black"><Moon fill="#ffffff" size={22}/></span>}
                    </button>
                </div>
            </div>
        </nav>
    );
}