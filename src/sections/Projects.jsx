import { motion } from "framer-motion";


const projects = [
  {
    title: "Potato Leaf Disease Detection System",
    description:
      "Detects diseases in potato leaves using machine learning and computer vision. Helps farmers protect their crops.",
    tech: "Python, OpenCV, Machine Learning, Streamlit",
    img: "/pranitha-portfolio/potato.png", // You can replace with an actual project screenshot
    link: "https://github.com/pranithagunti/PROJECT-AICTE",
  },
  {
    title: "Emotion Recognizer System",
    description:
      "Real-time emotion detection using facial expressions. Enhances human-computer interaction using AI.",
    tech: "Python, OpenCV, Deep Learning, TensorFlow",
    img: "/pranitha-portfolio/emotion.png", // You can replace with your actual image
    link: "https://github.com/pranithagunti/Emotion-Recognizer",
  },
];

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects I'm Proud Of 🚀
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col justify-between border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">
                  🔧 Tech: {project.tech}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
