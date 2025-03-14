import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Logo } from "./Logo";
import { FaTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border border-t border-slate-200 shadow-xl w-screen mt-10 h-60 bg-white px-4">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay:0.2 }}
                viewport={{ once: true }}
                className="flex justify-between pt-4 px-12"
            >
                <div className={`flex items-center gap-2`}>
                    <div className="text-purple-600">
                        <Logo
                            width={12}
                            height={15}
                            className="w-10 h-12 text-purple-600 animate-float-md"
                        />
                    </div>
                    <div className="text-xl font-bold font-alegreya">ShareStack</div>
                </div>
                <motion.div 
                    transition={{ type: "inertia", bounceStiffness: 400 }}
                    viewport={{ once: true }}
                    className="flex justify-end gap-2 items-center"
                >
                    <FaGithub size={25} className="hover:text-purple-600 cursor-pointer" />
                    <FaTwitter size={25} className="hover:text-purple-600 cursor-pointer" />
                    <FaLinkedin size={25} className="hover:text-purple-600 cursor-pointer" />
                </motion.div>
            </motion.div>
            <p className="px-12 text-black/50">Organize your digital life, connect your thoughts, and unlock new insights.</p>
            <hr className="mx-12 my-8 border border-1 border-black/10 " />   
            <div className="flex justify-end px-12">
                <div>
                    &#169;{`${currentYear} `} ShareStack. All rights reserved.
                </div>
            </div> 
        </footer>
    );
}