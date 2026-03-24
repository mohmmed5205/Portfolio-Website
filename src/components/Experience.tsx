import { Briefcase, CheckCircle2, Calendar } from 'lucide-react';

const achievements = [
  'Built and shipped responsive web interfaces using React.js and TypeScript used by internal teams.',
  'Integrated multiple REST APIs to handle dynamic data rendering and real-time state updates.',
  'Developed a library of reusable, scalable UI components that reduced development time across the team.',
  'Improved page load performance by identifying and resolving rendering bottlenecks.',
  'Collaborated with designers and backend developers in an Agile cross-functional team environment.',
  'Maintained code quality standards through regular code reviews and refactoring.',
];

const tags = ['React.js', 'TypeScript', 'REST APIs', 'Agile', 'UI Components', 'Performance'];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">

            <div className="md:grid md:grid-cols-5 gap-8 items-start relative mb-12">

              {/* Timeline dot — desktop */}
              <div
                className="hidden md:block absolute top-1 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-950 z-10"
                style={{ left: '39.5%', transform: 'translateX(-50%)' }}
              ></div>

              {/* Timeline dot — mobile */}
              <div className="absolute left-[-41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-950 z-10 md:hidden"></div>

              {/* Date column */}
              <div className="hidden md:flex md:col-span-2 flex-col items-end pt-1 pr-8 gap-2">
                <div className="flex items-center gap-2 text-primary font-semibold text-lg tracking-wide">
                  <Calendar size={18} />
                  <span>6 Months Internship</span>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-500">Jisr Company</span>
              </div>

              {/* Content card */}
              <div className="md:col-span-3 bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 hover:shadow-md transition-all md:ml-8">

                {/* Card header */}
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Briefcase className="text-primary" size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        Front-End Developer Intern
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-0.5">
                        React.js & TypeScript
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile: company + duration */}
                <div className="flex items-center justify-between md:hidden mt-3 mb-5">
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Jisr Company</span>
                  <span className="text-primary text-sm font-semibold bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                    6 Months
                  </span>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 dark:border-gray-800 my-5"></div>

                {/* Achievements list */}
                <ul className="space-y-3">
                  {achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      <CheckCircle2
                        size={17}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}