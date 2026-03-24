export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Mohammed Saleh Bakarman</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">Junior Front-End Developer</p>
        
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {currentYear} Mohammed. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
