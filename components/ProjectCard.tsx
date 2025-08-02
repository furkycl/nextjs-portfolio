"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const cardVariants: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  githubUrl: string;
  tags: string[];
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
  tags,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      className="bg-[#112240] rounded-lg overflow-hidden shadow-lg flex flex-col"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-[#E6F1FF] mb-2">{title}</h3>

        <p className="text-gray-400 text-base mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#0A192F] text-[#00BFFF] text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-700">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00BFFF] hover:underline mr-4"
          >
            View Live
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00BFFF] transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
