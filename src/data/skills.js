export const skillCategories = {
  "Web Development": {
    icon: "Globe",
    color: "from-cyan-400 to-blue-500",
    skills: [
      "React", "Next.js", "Vue.js", "Node.js", 
      "Express", "GraphQL", "TypeScript", "Tailwind CSS"
    ]
  },
  "AI & Machine Learning": {
    icon: "Brain",
    color: "from-purple-400 to-pink-500", 
    skills: [
      "Python", "TensorFlow", "PyTorch", "Scikit-learn",
      "OpenCV", "Pandas", "NumPy", "Jupyter"
    ]
  },
  "Database & Cloud": {
    icon: "Database",
    color: "from-green-400 to-emerald-500",
    skills: [
      "PostgreSQL", "MongoDB", "Redis", "AWS", 
      "Docker", "Kubernetes", "Firebase"
    ]
  }
};

// Get all skills as flat array
export const getAllSkills = () => {
  return Object.values(skillCategories).flatMap(category => category.skills);
};

// Get skills by category
export const getSkillsByCategory = (categoryName) => {
  return skillCategories[categoryName]?.skills || [];
};