import React from "react";

function ProjectCard({ image, title, description, technologies, link }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-400">
      <img className="w-full h-80 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="text-slate-700 font-bold text-xl mb-2">{title}</div>
        <p className="text-slate-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-slate-400 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 h-24">
        <a
          href={link}
          className="inline-block bg-gray-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Proyecto
        </a>
      </div>
      
    </div>
  );
}

export default ProjectCard;
