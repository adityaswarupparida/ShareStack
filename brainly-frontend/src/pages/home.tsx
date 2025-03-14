import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/ui/Navbar";

export const Home = () => {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <div className="fixed inset-0 bg-gradient-to-br from-purple-600/10 via-purple-400/20 to-purple-100/10 -z-20"></div>
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}