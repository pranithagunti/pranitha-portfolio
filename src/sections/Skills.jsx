import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaPython,
  FaDatabase,
  FaBriefcaseMedical,
  FaLaptop,
} from "react-icons/fa";
import { FaCubes, FaFerry } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiArduino,
  SiC,
  SiFramer,
} from "react-icons/si";

const skills = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-orange-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  ],
  AItools: [
    { name: "ChatGPT", icon: <FaReact className="text-blue-500" /> }, // using React icon as placeholder
  ],
  Languages: [
    { name: "Java", icon: <FaLaptop className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "C", icon: <SiC className="text-purple-400" /> },
  ],
  "Tools & Others": [
    { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
    { name: "Database", icon: <FaDatabase className="text-indigo-400" /> },
  ],
};

export default function Skills() {
  return (
    <section className="bg-gradient-to-b from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skill Arsenal 🧠⚙️
        </motion.h2>

        {Object.entries(skills).map(([category, techList], index) => (
          <motion.div
            key={category}
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {techList.map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:scale-105 transition-transform"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm text-center">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
