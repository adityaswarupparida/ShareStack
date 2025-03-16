import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/ui/Navbar";

const theme = `from-purple-600/10 via-purple-400/20 to-purple-100/10`;
// const darkTheme = `from-violet-950 via-black to-violet-950`;

export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <div className={`fixed inset-0 bg-gradient-to-br ${theme} dark:bg-black -z-20`}></div>
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}

{/* <div className="w-full h-screen bg-[radial-gradient(var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600"></div> */}
