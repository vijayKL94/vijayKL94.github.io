import React, { useState, useRef, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (modalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalOpen]);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalOpen(false);
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
                        <div
                            className="w-full lg:w-1/4"
                            onClick={() => openModal(project)}
                        >
                            <motion.img
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="my-6 rounded cursor-pointer"
                            />
                        </div>
                        <div
                            className="w-full max-w-xl lg:w-3/4 pr-12 pl-6 cursor-pointer"
                        >
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 text-justify">
                                {project.description.length > 100 ? (
                                    <>
                                        {project.description.substring(0, 150)}
                                        <span>...</span>{" "}
                                        <button
                                            onClick={() => openModal(project)}
                                            className="text-purple-600 underline"
                                        >
                                            Read More
                                        </button>
                                    </>
                                ) : (
                                    project.description
                                )}
                            </p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-600"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
                    <div ref={modalRef}>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-lg p-8 max-w-3xl overflow-y-auto relative"
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 bg-purple-600 rounded-2xl text-white hover:text-gray-300"
                            >
                                <MdClose size={28} />
                            </button>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="mt-1 mx-auto mb-4 rounded-lg"
                                width="auto"
                                height={450}
                            />
                            <h2 className="text-2xl font-semibold mb-2 underline">
                                {selectedProject.title}
                            </h2>
                            <p className="text-neutral-300 mb-4 text-justify">
                                {selectedProject.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
