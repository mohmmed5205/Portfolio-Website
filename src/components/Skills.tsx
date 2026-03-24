import {
  Blocks,
  FileJson,
  Github,
  LayoutTemplate,
  Palette,
  Cpu,
  Globe,
  Layers,
  Zap,
  MonitorCheck,
  GitMerge,
  Component,
} from 'lucide-react';

const technicalSkills = [
  { name: 'React.js',       icon: Blocks,       color: 'text-blue-500',                    bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { name: 'TypeScript',     icon: Cpu,          color: 'text-blue-600',                    bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { name: 'JavaScript',     icon: FileJson,     color: 'text-yellow-500',                  bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
  { name: 'HTML5',          icon: LayoutTemplate, color: 'text-orange-500',                bg: 'bg-orange-50 dark:bg-orange-900/20' },
  { name: 'CSS3',           icon: Palette,      color: 'text-blue-400',                    bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { name: 'REST APIs',      icon: Globe,        color: 'text-green-500',                   bg: 'bg-green-50 dark:bg-green-900/20' },
  { name: 'Git & GitHub',   icon: Github,       color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-100 dark:bg-gray-800/50' },
  { name: 'Responsive UI',  icon: MonitorCheck, color: 'text-purple-500',                  bg: 'bg-purple-50 dark:bg-purple-900/20' },
];

const conceptSkills = [
  { name: 'Component-Based Architecture', icon: Component,  color: 'text-blue-500',   bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { name: 'State Management',             icon: Layers,     color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
  { name: 'Performance Optimization',     icon: Zap,        color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
  { name: 'Cross-Browser Compatibility',  icon: GitMerge,   color: 'text-green-500',  bg: 'bg-green-50 dark:bg-green-900/20' },
];

function SkillCard({ name, icon: Icon, color, bg }: { name: string; icon: React.ElementType; color: string; bg: string }) {
  return (
    <div className="group flex flex-col items-center p-5 bg-white dark:bg-gray-950 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:-translate-y-1 w-36">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${bg}`}>
        <Icon className={color} size={28} />
      </div>
      <span className="font-medium text-gray-700 dark:text-gray-300 text-xs text-center leading-snug">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Skills
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-5">
            {technicalSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 dark:border-gray-800 my-10 max-w-xs mx-auto"></div>

        {/* Concept Skills */}
        <div>
          <h3 className="text-center text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8">
            Concepts & Practices
          </h3>
          <div className="flex flex-wrap justify-center gap-5">
            {conceptSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}