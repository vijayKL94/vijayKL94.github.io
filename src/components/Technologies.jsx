import { FRONTTECH } from "../constants";
import { BACKTECH } from "../constants";
import { motion } from "framer-motion";

// Define motion variants function
const iconVariants = (duration) => ({
    initial: { y: -4 },
    animate: {
        y: [4, -4],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full py-2 lg:w-1/2 lg:pl-10 lg:pr-5"
                >
                    <div className="flex flex-wrap items-center justify-center py-10 lg:px-20 rounded-2xl border-2 border-neutral-600 bg-purple-950/5 shadow-lg shadow-purple-500/40">
                        <motion.h1
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1.5 }}
                            className="my-5 w-full text-center text-2xl font-black"
                        >
                            Front End
                        </motion.h1>
                        {FRONTTECH.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <motion.div
                                    key={index}
                                    variants={iconVariants(1.5 + index)}
                                    initial="initial"
                                    animate="animate"
                                    className="rounded-2xl border-2 border-neutral-600 p-3 flex items-center m-1"
                                >
                                    <img
                                        src={tech.image}
                                        width={25}
                                        height={"auto"}
                                        alt={tech.title}
                                        className="rounded cursor-pointer"
                                    />
                                    <span className="px-2 text-neutral-400">{tech.title}</span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1.5 }}
                    className="w-full py-2 lg:w-1/2 lg:pl-5 lg:pr-10"
                >
                    <div className="flex flex-wrap items-center justify-center py-10 lg:px-20 rounded-2xl border-2 border-neutral-600 bg-purple-950/5 shadow-lg shadow-purple-500/40">
                        <motion.h1
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 1.5 }}
                            className="my-5 w-full text-center text-2xl font-black"
                        >
                            Back End
                        </motion.h1>
                        {BACKTECH.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <motion.div
                                    key={index}
                                    variants={iconVariants(1.5 + index)}
                                    initial="initial"
                                    animate="animate"
                                    className="rounded-2xl border-2 border-neutral-600 p-3 flex items-center m-1"
                                >
                                    <img
                                        src={tech.image}
                                        width={25}
                                        height={"auto"}
                                        alt={tech.title}
                                        className="rounded cursor-pointer"
                                    />
                                    <span className="px-2 text-neutral-400">{tech.title}</span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div >
        </div >
    );
};

export default Technologies;
