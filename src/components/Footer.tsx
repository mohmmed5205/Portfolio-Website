import { Github, Mail, Linkedin, Phone } from 'lucide-react';

const links = [
  {
    label: 'Email',
    href: 'mailto:mohmmwdbk48@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mohmmed5205',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/',
    icon: Linkedin,
  },
  {
    label: '+966 580 445 205',
    href: 'tel:+966580445205',
    icon: Phone,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Name & title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          Mohammed Saleh Bakarman
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-2">
          Junior Front-End Developer · React.js & TypeScript
        </p>

        {/* Languages */}
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-8 tracking-wide uppercase">
          Arabic (Native) &nbsp;·&nbsp; English (Professional)
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-4 mb-8">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all hover:scale-110"
              title={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {currentYear} Mohammed Saleh Bakarman · Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}