import React from "react";
import ProjectCard from "./ProjectCard";
import projectImage1 from "../assets/1.jpg";
import projectImage2 from "../assets/2.jpg";
import projectImage3 from "../assets/3.jpg";
import projectImage4 from "../assets/4.jpg";
function ProjectsList() {
  const projects = [
    {
      image: projectImage1,
      title: "Weather Api rest",
      description: "Weather Api.",
      technologies: ["React", "Tailwind CSS", "API REST"],
      link: "https://weather-api-sand.vercel.app/",
    },
    {
      image: projectImage2,
      title: "Movie Api",
      description: "Movie Api rest.",
      technologies: ["React", "Tailwind CSS", "API REST"],
      link: "https://furiac3lta.github.io/movie-api-react/",
    },
   
    {
      image: projectImage3,
      title: "Rest Countries",
      description: "Rest country api front mentor",
      technologies: ["React", "Tailwind CSS", "API REST"],
      link: "https://restcountries-zeta.vercel.app/",
    },
    {
      image: projectImage4,
      title: "Proyecto 4",
      description: "Order tracker app.",
      technologies: ["JavaScript", "Java", "Spring", "MySql", "Deploy" ],
      link: "https://order-tracker-front.vercel.app/",
    },
  ];

  return (
   <>
    <h2 className="text-center py-6 text-4xl font-bold text-zinc">Check out my Portfolio</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
       
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
   </>
  );
}

export default ProjectsList;
