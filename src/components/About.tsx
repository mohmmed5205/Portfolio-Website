import { Code2, Monitor } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I am a passionate <strong className="text-gray-900 dark:text-white">Junior Front-End Developer</strong> specializing in building exceptional digital experiences. My core expertise lies in utilizing modern web technologies, specifically <strong className="text-primary">React</strong> and <strong className="text-blue-500">TypeScript</strong>, to create responsive, scalable, and beautifully designed user interfaces.
            </p>
            <p>
              I focus on writing clean, maintainable code and building component-driven architectures. I am continuously learning and adapting to the latest industry standards to deliver optimal web performance and seamless user interactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors">
              <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Responsive UI</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Crafting layouts that adapt perfectly to any screen size.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors">
              <div className="bg-blue-50 dark:bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Clean Code</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Writing maintainable and modular TypeScript codebases.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
