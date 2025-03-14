import { useMove } from "../../hooks/useMove";
import { Logo } from "../Logo";

export const Navbar = () => {
    const { moved } = useMove();
    return (
        <nav className={`fixed w-screen h-16 ${ moved ? `bg-purple-600/5 border border-b border-slate-200 shadow-md z-40 backdrop-blur-3xl`: ``}`}>
            <div className={`flex items-center py-4 px-6 gap-2`}>
                <div className="text-purple-600">
                    <Logo
                        width={12}
                        height={15}
                        className="w-12 h-15 text-purple-600 animate-float-md"
                    />
                </div>
                <div className="text-2xl font-bold font-alegreya">ShareStack</div>
            </div>
        </nav>
    );
}