// src/pages/ProjectsPage/ProjectsPage.js
import React from 'react';
import './ProjectsPage.css'; 
import project1 from '../../assets/img/project1.png';
import project2 from '../../assets/img/project2.png';
import project3 from '../../assets/img/project3.png';
import project4 from '../../assets/img/project4.png';
import project5 from '../../assets/img/project5.png';
import project6 from '../../assets/img/project6.png';
import video1 from '../../assets/video/video1.mp4'; // Caminho corrigido
import video2 from '../../assets/video/video2.mp4'; // Caminho corrigido
import video3 from '../../assets/video/video3.mp4'; // Caminho corrigido
import video4 from '../../assets/video/video4.mp4'; // Caminho corrigido
import video5 from '../../assets/video/video5.mp4'; // Caminho corrigido
import video6 from '../../assets/video/video6.mp4'; // Caminho corrigido

const projectsData = [
  {
    title: 'Projeto 1',
    description: 'Página de Divulgação Lions Seminovos',
    technologies: ['React', 'JavaScript', 'SCSS'],
    image: project1,
    video: video1
  },
  {
    title: 'Projeto 2',
    description: 'Site PyScript.tech',
    technologies: ['Python', 'Django', 'React','PostgreSQL'],
    image: project2,
    video: video2
  },
  {
    title: 'Projeto 3',
    description: 'Sistema de Tickets de TI para Empresa RWE Telemedicina',
    technologies: ['Python','Flask','HTML', 'CSS', 'JavaScript'],
    image: project3,
    video: video3
  },
  {
    title: 'Projeto 4',
    description: 'Conversor de Arquivos',
    technologies: ['React', 'Tailwind', 'Shadcn/UI', 'API CloudConvert'],
    image: project4,
    video: video4
  },
  {
    title: 'Projeto 5',
    description: 'SGE de Equipamentos de T.I',
    technologies: ['Python', 'Streamlit', 'SQLite'],
    image: project5,
    video: video5
  },
  {
    title: 'Projeto 6',
    description: 'Analisador e comparador de Ações e Fiis',
    technologies: ['Python', 'Streamlit', 'SQLite'],
    image: project6,
    video: video6
  }
];

const ProjectsPage = () => {
  return (
    <div className="projectPage">
      <h1 className="projectTitle">Nossos Projetos</h1>
      <div className="projectsContainer">
        {projectsData.map((project, index) => (
          <div key={index} className="projectItem">
            <img src={project.image} alt={project.title} className="projectImage" />
            <div className="projectDescription">
              <h2 className="projectTitle">{project.title}</h2>
              <p className="projectText">{project.description}</p>
              <div className="projectTechnologies">
                <h3>Tecnologias Utilizadas:</h3>
                <ul>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="projectVideo">
                <h3>Veja o vídeo:</h3>
                <video controls>
                  <source src={project.video} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
