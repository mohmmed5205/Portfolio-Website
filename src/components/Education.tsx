import { GraduationCap, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 dark:border-gray-800 text-center group hover:shadow-md transition-all">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="text-primary" size={40} />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              University Graduate
            </h3>
            
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-6">
              Degree in Computer Science / Information Technology
            </p>
            
            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full">
              <Calendar className="text-primary" size={18} />
              <span className="font-semibold text-gray-800 dark:text-gray-200">Class of 2024 / 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
