import { AWARDS } from "../constants";
import { motion } from "framer-motion";

const Awards = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Awards & Recognition
            </motion.h1>
            <div className="flex flex-wrap">
                {AWARDS.map((award, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="w-full mb-6"
                    >
                        <div className="rounded-lg border-2 border-neutral-600 bg-purple-950/5 p-6 shadow-lg shadow-purple-500/40">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white font-bold text-lg">★</span>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        {award.title}
                                    </h2>
                                    <p className="text-neutral-400 text-lg">
                                        {award.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Awards;
