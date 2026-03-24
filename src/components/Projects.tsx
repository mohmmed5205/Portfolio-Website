import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive admin dashboard built with React, TypeScript, and Tailwind CSS. Features real-time data visualization and inventory management.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/mohmmed5205',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'A slick, responsive Kanban-style task manager with drag-and-drop functionality and local storage persistence.',
    tech: ['React', 'Context API', 'CSS Modules'],
    github: 'https://github.com/mohmmed5205',
    live: '#',
  },
  {
    title: 'Weather Forecast SPA',
    description: 'A sleek weather application consuming a REST API to display current weather and 5-day forecasts for any city globally.',
    tech: ['JavaScript', 'REST APIs', 'HTML/CSS'],
    github: 'https://github.com/mohmmed5205',
    live: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                  <FolderGit2 size={28} />
                </div>
                <div className="flex gap-3 text-gray-500 dark:text-gray-400">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/mohmmed5205"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
          >
            View more on GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
