import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'To-Do List Application',
    description:
      'Built a clean and responsive task management application to organize daily activities efficiently ,Implemented core features such as adding, editing, deleting, and marking tasks as completed Developed task filtering functionality (All / Active / Completed) to enhance user experience and productivity  Utilized local storage to persist user data across sessions without backend integration Designed an intuitive and user-friendly interface with focus on simplicity and usability Applied component-based architecture to ensure scalability and maintainability',
    tech: ['React.js',  'Local Storage', 'State Management', 'UI Design'],
    github: 'https://github.com/mohmmed5205',
    live: 'https://todt-list.netlify.app/',
  },
  {
    title: 'Admin Dashboard Application',
    description: 
      'Built a multi-page dashboard with dynamic charts, data tables, and real-time updates. Implemented global state management for seamless data flow across components. Designed a clean, accessible UI with attention to responsiveness across all screen sizes.',
    tech: ['React.js', 'State Management', 'UI Design', 'Recharts'],
    github: 'https://github.com/mohmmed5205',
    live: 'https://dashboard-delta-blush-65.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Card top */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                  <FolderGit2 size={28} />
                </div>
                <div className="flex gap-3 text-gray-400 dark:text-gray-500">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    title="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  ) : (
                    <span
                      className="opacity-30 cursor-not-allowed"
                      title="Live demo not available"
                    >
                      <ExternalLink size={20} />
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
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