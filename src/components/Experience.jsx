import React, { Fragment } from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Experience</motion.h1>

            <div className="flex flex-col gap-y-3 w-full my-4">
                <Circle />
                {EXPERIENCES.map((experience, key) => (
                    <Fragment key={key}>
                        <div className="lg:grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
                            {experience.direction === 'left' ? (
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1 }}
                                    className="event-card-container"
                                >

                                    <EventCard year={experience.year} role={experience.role} company={experience.company} description={experience.description} technologies={experience.technologies} textAlign="lg:text-end"/>
                                </motion.div>
                            ) : (
                                <div></div>
                            )}

                            <Pillar />

                            {experience.direction === 'right' ? (
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 1 }}
                                    className="event-card-container"
                                >

                                    <EventCard year={experience.year} role={experience.role} company={experience.company} description={experience.description} technologies={experience.technologies} textAlign="lg:text-start" />
                                </motion.div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        {key < (EXPERIENCES.length - 1) && <Circle />}
                    </Fragment>
                ))}
                <Circle />
            </div>
        </div>
    );
};

const Circle = () => {
    return (
        <div className="bg-gradient-to-r from-fuchsia-900 to-purple-900 rounded-full w-4 h-4 mx-auto"></div>
    );
};

const Pillar = () => {
    return (
        <div className="bg-gradient-to-b from-fuchsia-900 to-purple-900 rounded-t-full rounded-b-full w-1 h-full mx-auto"></div>
    );
};

const EventCard = ({ year, role, company, description, technologies, textAlign }) => {
    return (
        <div className={`transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 p-4 ${textAlign}`}>
            <h6 className="mb-2 font-semibold underline underline-offset-8">
                {role} - {" "}
                <span className="text-sm text-purple-100">{company}</span>
            </h6>
            <div className="text-sm text-gray-200">{year}</div>
            <p className="mb-4 text-justify text-gray-400">{description}</p>
            <div className="flex flex-wrap">
                {technologies.map((tech, index) => (
                    <span key={index} className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-600">{tech}</span>
                ))}
            </div>
        </div>
    );
};

export default Experience;
