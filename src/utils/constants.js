// Navigation items
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Theme colors
export const themeColors = {
  primary: {
    gradient: 'from-cyan-400 to-purple-600',
    text: 'text-cyan-400'
  },
  secondary: {
    gradient: 'from-purple-400 to-pink-400',
    text: 'text-purple-400'
  },
  accent: {
    gradient: 'from-green-400 to-emerald-500',
    text: 'text-green-400'
  }
};

// Social media links
export const socialLinks = [
  {
    name: 'GitHub',
    icon: 'Github',
    url: 'https://github.com/yourusername',
    color: 'hover:text-gray-300'
  },
  {
    name: 'LinkedIn', 
    icon: 'Linkedin',
    url: 'https://linkedin.com/in/yourprofile',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Email',
    icon: 'Mail', 
    url: 'mailto:developer@example.com',
    color: 'hover:text-cyan-400'
  }
];

// Contact information
export const contactInfo = [
  {
    icon: 'Mail',
    title: 'Email',
    value: 'developer@example.com',
    link: 'mailto:developer@example.com',
    color: 'text-cyan-400'
  },
  {
    icon: 'Github',
    title: 'GitHub', 
    value: '@yourhandle',
    link: 'https://github.com/yourusername',
    color: 'text-purple-400'
  },
  {
    icon: 'Linkedin',
    title: 'LinkedIn',
    value: 'Your Name',
    link: 'https://linkedin.com/in/yourprofile', 
    color: 'text-cyan-400'
  }
];