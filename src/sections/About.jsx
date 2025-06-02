import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-gray-900 py-20 px-6 md:px-16 text-gray-800 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-lg leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hey there! I'm{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Sai Pranitha Gunti
          </span>
          , a passionate CSE undergrad at Neil Gogte Institute Of Technology (2022-2026). I'm always
          chasing new tech, turning ideas into projects, and learning something
          cool every day.
        </motion.p>

        {/* Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-4 mb-10"
        >
          <p>
  🚀 <strong>Software & AI/ML Journey:
    </strong> Diving deep into software engineering and AI/ML — crafting intelligent solutions like predictive models,automation tools, and scalable applications.
        </p>

          <p>
            🧠 <strong>Stack:</strong> JavaScript, Python, Node.js, Bootstrap. Forever in glow-up mode.
          </p>

          <p>
            🌱 <strong>Always Learning:</strong> Not just building — I’m
            evolving. Every project, collab, and bug makes me better.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-500">
            📚 Education
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>B.E in Computer Science And Engineering </strong> – Neil Gogte  Institute of
              Technology ,Hyderabad. (2022 – 2026)
              <br />
              CGPA: 8.5 🔥
            </li>
            <li>
              <strong>Intermediate (MPC)</strong> – Sarath Junior College
              (2020 – 2022)
              <br />
              94% Boards
            </li>
          </ul>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-500">
            🏆 Achievements
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              🚀{" "}
              <strong>
                <a
                  href="https://drive.google.com/file/d/1x2wJTXojgjIToRSLovuw3fgjGehTf2Xq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Participated IIT-H Artificial Intelligence Workshop
                </a>
              </strong>
              : Been a part of Artificial Intelligence Workshop At IIT-H And Been a part of Hackathon Conducted By IIT-H.
            </li>
            <li>
              🚀{" "}
              <strong>
                <a
                  href="https://drive.google.com/file/d/1uC-i7bn81wEFa3POneJXGB537TAToqJV/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Coding Ninja Slayground 2.o
                </a>
              </strong>
              : Participated in 21-day DSA Coding Challenge.
            </li>
            <li>
              🚀{" "}
              <strong>
                <a
                  href="https://drive.google.com/file/d/1QLbue-RuMzumzW1ArIbcmzt_gYmixE85/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  TATA-Crucible Campus Quiz
                </a>
              </strong>
              : Participated in Campus Quiz Conducted by TATA-Group.
            </li>
          </ul>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10"
        >
          <h3 className="text-2xl font-semibold mb-3 text-indigo-500">
            Certifications
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              📜{" "}
              <strong>
                <a
                  href="https://drive.google.com/file/d/1Rwg57p_6vdQRW0ME0BY1DHDIeM_Gz_iv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Programming In Java
                </a>
              </strong>{" "}
              – NPTEL
            </li>
            <li>
              📜{" "}
              <strong>
                <a
                  href="https://drive.google.com/file/d/1YKDKkp5kne6DNUzA0GW3e05CnJi0kGN3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Machine Learning Using Python
                </a>
              </strong>{" "}
              – Udemy
            </li>
            <li>
              📜{" "}
              <strong>
                <a
                  href="https://drive.google.com/file/d/1ipbH9z9q9cmYA4BLC6qrNvUqfZ9eaM31/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  JAVA(Basic)
                </a>
              </strong>{" "}
              – HackerRank
            </li>
            <li>
              📜{" "}
              <strong>
                <a
                  href="https://drive.google.com/file/d/1tUScrA-hKzkv8_Rajoi9MxkQMc0pZb75/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Generative AI
                </a>
              </strong>{" "}
              – LinkedIn Learning
            </li>
            <li>
              📜{" "}
              <strong>
                <a
                  href="https://drive.google.com/file/d/1aJ7mYYfK_ZsDO0moA_mriama9uVWb39D/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                 Data Analytics and Visualization Job Simulation
                </a>
              </strong>{" "}
              – Accenture
            </li>
            <li>
              📜{" "}
              <strong>
                <a
                  href="https://drive.google.com/file/d/19FpHk59yWgabyWVNFEWh7kN1yqWweYbI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                 Natural Language Processing in Practice
                </a>
              </strong>{" "}
              – Infosys SpringBoard
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}