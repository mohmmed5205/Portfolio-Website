import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'mohmmwdbk48@gmail.com',
    href: 'mailto:mohmmwdbk48@gmail.com',
    icon: Mail,
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-900/20',
  },
  {
    label: 'GitHub',
    value: 'github.com/mohmmed5205',
    href: 'https://github.com/mohmmed5205',
    icon: Github,
    color: 'text-gray-800 dark:text-gray-200',
    bg: 'bg-gray-100 dark:bg-gray-800/50',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohammed',
    href: 'https://linkedin.com/in/',
    icon: Linkedin,
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    label: 'Phone',
    value: '+966 580 445 205',
    href: 'tel:+966580445205',
    icon: Phone,
    color: 'text-green-500',
    bg: 'bg-green-50 dark:bg-green-900/20',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-500 dark:text-gray-400 mt-6 max-w-lg mx-auto text-lg leading-relaxed">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi — my inbox is always open!
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          {contactLinks.map(({ label, value, href, icon: Icon, color, bg }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-5 bg-white dark:bg-gray-950 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${bg}`}>
                <Icon className={color} size={26} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-gray-800 dark:text-gray-200 font-medium text-sm truncate">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="mailto:mohmmwdbk48@gmail.com"
            className="inline-flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
          >
            <Send size={20} />
            Send Me an Email
          </a>
        </div>

      </div>
    </section>
  );
}