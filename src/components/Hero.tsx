import { Github, Mail, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="animate-fade-in-up">
          <p className="text-primary font-medium tracking-wide mb-3 uppercase text-sm">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
            Mohammed Saleh Bakarman
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light mb-8">
            Junior Front-End Developer <span className="font-semibold text-primary">(React & TypeScript)</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:mohmmwdbk48@gmail.com"
              className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <Mail size={20} />
              Contact Me
            </a>
            <a
              href="https://github.com/mohmmed5205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          
          <a
            href="#about"
            className="inline-flex flex-col items-center text-gray-400 hover:text-primary transition-colors animate-bounce"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowRight className="transform rotate-90" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
