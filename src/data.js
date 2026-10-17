// All content lives here. Components just map over it.

export const profile = {
  name: 'AK',
  tagline:
    'Computer Science Engineering student. I learn by building things that run — small, practical projects that solve one problem well.',
  email: 'nnm24cs312@nmamit.in',
  github: 'https://github.com/Ayush-cs312',
  linkedin: 'https://linkedin.com/in/ayushkumar-fsd',
}

export const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const about = [
  "I'm a Computer Science Engineering student, currently working through coursework in databases, networking, and software development while building small projects on the side to see how the theory actually holds up in practice.",
  "I like problems with a clear, visible outcome — something I can run, click through, and hand to someone else to try. That's why most of what I build starts small: a tool that does one thing well, rather than a half-built version of something large.",
  'Outside coursework, I\'m sharpening my web development and programming fundamentals, with an eye on campus placements and technical competitions coming up this year.',
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'C++'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'HTML & CSS', 'Tailwind'] },
  { group: 'Backend & Data', items: ['Node.js', 'REST APIs', 'SQLite', 'LangChain'] },
  { group: 'Tools & Workflow', items: ['Git & GitHub', 'Docker', 'Vite', 'pnpm'] },
]

export const projects = [
  {
    title: 'Simple Scientific Calculator',
    category: 'Web',
    description:
      'A browser-based calculator that goes beyond basic arithmetic — trigonometric functions, logarithms, exponents, and memory keys, built with plain JavaScript and no external math library.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Student Result Management System',
    category: 'Python',
    description:
      'A small system for entering student marks and generating result sheets automatically — add students, record subject-wise scores, and calculate totals, percentages, and grades without doing it by hand.',
    stack: ['Python', 'SQLite', 'CRUD'],
  },
  {
    title: 'Personal Expense Tracker',
    category: 'Web',
    description:
      'Logs daily expenses by category and shows where the money actually goes each month, with a simple chart to compare spending across categories at a glance.',
    stack: ['JavaScript', 'Chart.js', 'Local Storage'],
  },
  {
    title: 'Weather Forecast App',
    category: 'API',
    description:
      'Looks up current conditions and a short forecast for any city by name, pulling live data from a public weather API and handling the inevitable "city not found" case gracefully.',
    stack: ['JavaScript', 'REST API', 'Fetch'],
  },
  {
    title: 'To-Do List Application',
    category: 'Web',
    description:
      'A task manager with add, complete, and delete actions, filters by status, and a pending counter — saved in localStorage so tasks survive a refresh.',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]
