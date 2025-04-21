// src/pages/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Project Term 1",
    description: "A web project showcasing core features built in Term 1 at Scaler School of Technology.",
    github: "https://github.com/Lucifer-1709/Project",
    live: "https://lucifer-1709.github.io/Project/",
  },
  {
    title: "Project Term 2",
    description: "An advanced project demonstrating front-end and back-end integration from Term 2.",
    github: "https://github.com/Lucifer-1709/Project-term-2-",
    live: "https://lucifer-1709.github.io/Project-term-2-/",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
