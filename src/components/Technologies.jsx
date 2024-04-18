import { DiPhp } from "react-icons/di";
import { FaLaravel, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiFastapi } from "react-icons/si";
import { motion } from "framer-motion";

// Define constants for icons
const icons = [
    { Icon: FaPython, color: "text-cyan-600", text: "Python" },
    { Icon: DiPhp, color: "text-[#335e9e]", text: "PHP" },
    { Icon: FaLaravel, color: "text-red-600", text: "Laravel" },
    { Icon: SiFastapi, color: "text-[#00868d]", text: "FastAPI" },
    { Icon: GrMysql, color: "text-cyan-900", text: "MySQL" },
];

// Define motion variants function
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
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
            >Technologies
            </motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {icons.map((icon, index) => (
                    <motion.div
                        key={index}
                        variants={iconVariants(2.5 + index)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center"
                    >
                        <icon.Icon className={`text-7xl ${icon.color}`} />
                        <p className={`text-center text-md mt-2 pt-1 ${icon.color}`}>{icon.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Technologies;
