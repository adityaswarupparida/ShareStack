import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <section className="relative overflow-hidden mt-4 py-20 md:py-28">

            {/* Animated dots */}
            <div className="absolute inset-0 -z-10">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-purple-600/20 animate-pulse-slow"
                        style={{
                            width: Math.random() * 6 + 2 + 'px',
                            height: Math.random() * 6 + 2 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDelay: Math.random() * 5 + 's',
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="flex flex-col text-center items-center max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-center items-center gap-2 mb-4">
                        <Logo
                            width={90}
                            height={72}
                            className="h-24 w-24 text-purple-600 animate-float-lg"
                        />
                        <Sparkles className="h-6 w-6 text-purple-600/80 hover:animate-spin" />
                    </div>

                    <motion.div
                        initial= {{ opacity: 0 }}
                        animate= {{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-cardo mb-4">
                            Your <span className="text-purple-600 hover:text-purple-700 animate-pulse">Second Brain</span> for the Digital Age
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl text-black/60 antialiased mb-8 max-w-2xl"
                    >
                        Organize your digital life in one place. Connect your thoughts, save
                        content from across the web, and interact with your knowledge in new ways.
                    </motion.p>
                    
                    <motion.div>  
                        <div className="flex justify-between gap-4">         
                            <Link to="/signin">
                                <Button variant="Primary" size="lg" text="Get Started" />
                            </Link>
                            <Link to="/explore">
                                <Button variant="Tertiary" size="lg" text="Explore Public Brains" />
                            </Link>
                        </div>  
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}