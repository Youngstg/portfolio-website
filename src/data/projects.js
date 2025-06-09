export const projects = [
  {
    id: 1,
    title: "AI-Powered Content Generator",
    description: "Platform berbasis machine learning untuk menghasilkan konten otomatis menggunakan GPT API dan neural networks.",
    tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    github: "https://github.com/username/project1",
    demo: "https://project1-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Analytics Dashboard",
    description: "Dashboard real-time untuk analisis data e-commerce dengan visualisasi interaktif dan prediksi penjualan.",
    tech: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    github: "https://github.com/username/project2",
    demo: "https://project2-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Computer Vision Object Detection",
    description: "Sistem deteksi objek real-time menggunakan YOLO dan OpenCV untuk aplikasi keamanan.",
    tech: ["Python", "OpenCV", "YOLO", "Flask", "Docker"],
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=200&fit=crop",
    github: "https://github.com/username/project3",
    demo: "https://project3-demo.com",
    featured: true
  },
  {
    id: 4,
    title: "Progressive Web App",
    description: "Aplikasi web progresif dengan fitur offline, push notifications, dan performa tinggi.",
    tech: ["React", "Service Worker", "IndexedDB", "Tailwind"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop",
    github: "https://github.com/username/project4",
    demo: "https://project4-demo.com",
    featured: false
  }
];

// Filter featured projects
export const featuredProjects = projects.filter(project => project.featured);

// Filter by category
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};