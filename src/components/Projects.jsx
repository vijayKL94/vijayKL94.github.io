import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [expandedDescriptions, setExpandedDescriptions] = useState({});
    const defaultWidth = '1200px';
    const defaultHeight = '600px';

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseImage = () => {
        setSelectedImage(null);
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            handleCloseImage();
        }
    };

    const toggleDescription = (index) => {
        setExpandedDescriptions({
            ...expandedDescriptions,
            [index]: !expandedDescriptions[index]
        });
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {PROJECTS.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                            onClick={() => handleImageClick(project.image)}
                        >
                            <img src={project.image} width={150} height={150} alt={project.title} className="my-6 rounded cursor-pointer" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4 pr-12 pl-6"
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 text-justify">
                                {expandedDescriptions[index] ? project.description : `${project.description.slice(0, 150)}...`}
                                <button onClick={() => toggleDescription(index)} className="text-blue-700 hover:underline focus:outline-none pl-1">
                                    {expandedDescriptions[index] ? "Read Less" : "Read More"}
                                </button>
                            </p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-600">{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-90 flex justify-center items-center" onClick={handleOverlayClick}>
                    <img src={selectedImage} alt="Full screen" className="max-h-full max-w-full" style={{ width: defaultWidth, height: defaultHeight }} />
                </div>
            )}
        </div>
    );
};

export default Projects;
