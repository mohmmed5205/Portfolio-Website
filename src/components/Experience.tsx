import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0">
            {/* Timeline item */}
            <div className="md:grid md:grid-cols-5 gap-8 items-start relative mb-12 last:mb-0">
              {/* Dot */}
              <div className="absolute left-[-41px] md:left-auto md:right-[-9px] md:col-start-2 top-0 md:top-1 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-950 z-10 hidden md:block" style={{ gridColumn: '2 / span 1', justifySelf: 'end', marginTop: '2px', marginRight: '-4px' }}></div>
              <div className="absolute left-[-41px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-950 z-10 md:hidden"></div>

              {/* Date Column Desktop */}
              <div className="hidden md:block col-span-2 text-right pt-1 pr-8">
                <span className="text-primary font-semibold text-lg tracking-wide">6 Months Internship</span>
              </div>

              {/* Content Column */}
              <div className="md:col-span-3 bg-white dark:bg-gray-950 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors md:ml-8">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Front-End Developer</h3>
                </div>
                
                <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-4 flex items-center justify-between">
                  <span>Jisr Company</span>
                  <span className="md:hidden text-primary text-sm">6 Months</span>
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Contributed as a front-end developer intern focusing on building and maintaining user interfaces. Gained hands-on experience using modern React features and collaborated with the team to improve overall code quality and user experience.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-medium rounded-full">React</span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-medium rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-medium rounded-full">UI/UX Layout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
