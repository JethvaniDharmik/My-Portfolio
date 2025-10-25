import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
         I'm a passionate Full Stack Developer specializing in the MERN Stack (MongoDB, Express, React, Node.js). I love turning ideas into modern, functional, and user-friendly web applications with clean UI and seamless performance.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
         My web development journey began during my BCA studies, and since then, I’ve been constantly learning and building real-world projects that sharpen my technical and creative skills. I’ve worked on multiple projects, including SastaMarket and other full-stack applications, focusing on both frontend design and backend logic.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
         I enjoy exploring new technologies like Next.js, Tailwind CSS, and Redux Toolkit to enhance my development process and performance optimization. Currently, I’m growing my skills through an internship at Aarya Softex, where I work on developing and improving dynamic web solutions.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        Beyond coding, I enjoy learning about tech startups, improving UI/UX design, and sharing my work and experiences on platforms like LinkedIn and GitHub.
        </p>
      </motion.div>
    </div>
  );
}
