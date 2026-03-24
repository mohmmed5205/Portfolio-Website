import { Blocks, FileJson, Github, LayoutTemplate, Palette, Cpu, Paintbrush } from 'lucide-react';

const skills = [
  { name: 'React', icon: Blocks, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { name: 'TypeScript', icon: Cpu, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { name: 'JavaScript', icon: FileJson, color: 'text-yellow-500', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
  { name: 'HTML', icon: LayoutTemplate, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' },
  { name: 'CSS', icon: Palette, color: 'text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { name: 'Git & GitHub', icon: Github, color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-100 dark:bg-gray-800/50' },
  { name: 'REST APIs', icon: Paintbrush, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Core Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center p-6 bg-white dark:bg-gray-950 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all hover:-translate-y-1 w-40"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${skill.bg}`}>
                  <Icon className={skill.color} size={32} />
                </div>
                <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
