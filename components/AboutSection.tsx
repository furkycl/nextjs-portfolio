"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
  SiDocker,
} from "react-icons/si";

const skills = [
  { name: "JavaScript (ES6+)", icon: <SiJavascript size={20} /> },
  { name: "TypeScript", icon: <SiTypescript size={20} /> },
  { name: "React", icon: <SiReact size={20} /> },
  { name: "Next.js", icon: <SiNextdotjs size={20} /> },
  { name: "Node.js", icon: <SiNodedotjs size={20} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={20} /> },
  { name: "Python", icon: <SiPython size={20} /> },
  { name: "Docker", icon: <SiDocker size={20} /> },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-10 bg-[#112240]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#E6F1FF] mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-gray-300 leading-relaxed">
              Hello! I&apos;m Furkan, a passionate Full Stack Developer who
              loves turning complex problems into elegant, user-friendly digital
              experiences. My journey into technology began with a deep
              curiosity for how things work, and it has evolved into a career
              where I can build, innovate, and continuously learn.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in both front-end and back-end development, with a
              strong proficiency in the JavaScript ecosystem. My goal is not
              just to write code, but to build products that are scalable,
              efficient, and provide real value.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I&apos;m not at my computer, I&apos;m likely planning my next
              trip. I&apos;m a firm believer in the digital nomad lifestyle,
              aspiring to combine my passion for code with my love for exploring
              the world.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-gray-300 mb-4">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-400">
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <span className="text-[#00BFFF]">{skill.icon}</span>
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
