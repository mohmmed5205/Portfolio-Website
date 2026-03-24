import { GraduationCap, Calendar, BookOpen, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-950 rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-primary/50 transition-all group">

            {/* Icon */}
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="text-primary" size={40} />
            </div>

            {/* Degree */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Bachelor's Degree in Information Technology
              </h3>
              <p className="text-primary font-semibold text-lg">
                University of Science and Technology
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 dark:border-gray-800 my-6"></div>

            {/* Details grid */}
            <div className="grid sm:grid-cols-3 gap-4 text-center">

              <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl">
                <BookOpen className="text-primary" size={20} />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">College</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug text-center">
                  Engineering & Computer Science
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl">
                <MapPin className="text-primary" size={20} />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Branch</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug text-center">
                  Hadhramout Branch
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl">
                <Calendar className="text-primary" size={20} />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Graduated</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug text-center">
                  Class of 2024 / 2025
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}