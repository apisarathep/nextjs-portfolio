"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import {motion} from "framer-motion";

const ProjectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "JavaScript, ReactJS, TailwindCSS, Next.js",
        image: "/images/projectimg/yamport.png",
        tag: ["All", "Web"],
    },

    {
        id: 2,
        title: "Centralsee",
        description: "HTML/CSS/JavaScript, Bootstrap, MySQL",
        image: "/images/projectimg/centralsee.png",
        tag: ["All", "Web"],
    },

    {
        id: 3,
        title: "Tourism industry",
        description: "Python, Data Wrangling, Data Visualization",
        image: "/images/projectimg/tourism.jpg",
        tag: ["All", "Web"],
    },

    {
        id: 4,
        title: "Global Air Pollution",
        description: "Python, Data Wrangling, Data Mining",
        image: "/images/projectimg/air.png",
        tag: ["All", "Web"],
    },
]

const ProjectSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}>
                    My Projects
                    </h2>
                <motion.div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-20">
                    {ProjectsData.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        tags={project}
                        />
                        ))}
            </motion.div>
        </>
       
        
    )
}

export default ProjectSection;