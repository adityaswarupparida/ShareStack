import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Brain, NotebookTabs, Share2, Store } from "lucide-react";

export const Features = () => {
    return (
        <article className="relative py-16 px-4">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-3xl md:4xl font-bold font-cardo mb-4 dark:text-white"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            className="font-alegreya text-3xl md:text-4xl text-purple-600"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            {/* ShareSpace:{' '} */}
                        </motion.span>
                        Share anything, worry about nothing. {' '}
                        <motion.span
                            className="font-alegreya font-semibold md:text-3xl text-purple-600/90"
                        >
                            ShareCharged.
                        </motion.span>
                    </motion.h2>
                    <p className="text-lg max-w-2xl mx-auto text-black/60 dark:text-white/70 mb-4">
                        Organize, connect, and interact with your digital content in ways
                        you never thought possible. The last stop for your digital clutter. 
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
                    <FeatureCard
                        content={
                            <div className="h-full flex flex-col items-center text-center">
                                <Brain
                                    className="text-purple-600 h-9 w-9 mb-3"
                                />
                                <motion.h3
                                    className="text-2xl font-bold mb-3 font-cardo dark:text-white"
                                >
                                    Knowledge Universe
                                </motion.h3>
                                <p className="text-black/60 dark:text-white/70 mb-4">
                                    Gather, organize, and access all your digital assets in a centralized location
                                </p>
                            </div>
                        }
                    ></FeatureCard>
                    <FeatureCard
                        content={
                            <div className="h-full flex flex-col items-center text-center">
                                <Share2
                                    className="text-purple-600 h-9 w-9 mb-3"
                                />
                                <motion.h3
                                    className="text-2xl font-bold mb-3 font-cardo dark:text-white"
                                >
                                    Share Publicly
                                </motion.h3>
                                <p className="text-black/60 dark:text-white/70 mb-4">
                                    Share your knowledge with the world or keep it private - you decide.
                                </p>
                            </div>
                        }
                    ></FeatureCard>
                    <FeatureCard
                        content={
                            <div className="h-full flex flex-col items-center text-center">
                                <Store
                                    className="text-purple-600 h-9 w-9 mb-3"
                                />
                                <motion.h3
                                    className="text-2xl font-bold mb-3 font-cardo dark:text-white"
                                >
                                    Unlimited Space
                                </motion.h3>
                                <p className="text-black/60 dark:text-white/70 mb-4">
                                    Keep dumping until the cosmos collapses. Your unlimited digital junkyard.
                                </p>
                            </div>
                        }
                    ></FeatureCard>
                    <FeatureCard
                        content={
                            <div className="h-full flex flex-col text-center items-center">
                                <NotebookTabs
                                    className="text-purple-600 h-9 w-9 mb-3"
                                />
                                <motion.h3
                                    className="text-2xl font-bold mb-3 font-cardo dark:text-white"
                                >
                                    Unrestricted Additions
                                </motion.h3>
                                <p className="text-black/60 dark:text-white/70 mb-4">
                                    Seamlessly add videos, tweets, documents, links, notes from any source.
                                </p>
                            </div>
                        }
                    ></FeatureCard>
                </div>
            </div>

        </article>
    );
}

const FeatureCard = ({
    content,
    className
}: {
    content   : ReactNode;
    className?: string;
}) => {
    return (
        <motion.div
            className={`border border-gray-400/50 rounded-lg shadow overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
                scale: 1.05,
            }}
            transition={{
                type: 'tween',
                duration: 0.5,
            }}
            viewport={{ once: true }}
        >
            <div className="p-6 h-full">
                {content}
            </div>
        </motion.div>
    );
}