// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { TypeAnimation } from "react-type-animation";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8">
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-y-10 max-w-7xl">
//         {/* Left: Text Content */}
//         <div className="text-center md:text-left flex-1 w-full max-w-xl md:max-w-2xl order-2 md:order-1">
//           <motion.h1
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
//             initial={{ opacity: 0, y: -40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <TypeAnimation
//               sequence={["Hi, I'm Sai Pranitha Gunti ", 2000]}
//               wrapper="span"
//               speed={50}
//               className="inline-block"
//               cursor={false}
//             />
//             <br className="hidden md:inline" />
//           </motion.h1>

//           {/* Typing Animation */}
//           <TypeAnimation
//             sequence={[
//               "AIML-Developer 💻",
//               2000,
//               "Software Engineer 🤖",
//               2000,
//               "Fullstack Explorer 🌐",
//               2000,
//               "Tech Enthusiast 🚀",
//               2000,
//             ]}
//             wrapper="span"
//             speed={50}
//             className="block text-lg sm:text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6"
//             repeat={Infinity}
//           />

//           <motion.p
//             className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//           >
//             Accelerated Development with Artificial Intelligence by focussing on
//             real-world projects.
//           </motion.p>

//           <motion.div
//             className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//           >
//             <Link
//               to="/projects"
//               className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
//             >
//               Check My Work
//             </Link>
//             <a
//               href="https://drive.google.com/file/d/1gpJy0nu9CkPfo8gNcymL-2BKJVvVXPuJ/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="border hover:bg-indigo-500 border-indigo-600 text-indigo-400 px-6 py-3 rounded-xl font-medium transition hover:text-indigo-700 sm:hover:bg-indigo-100 dark:hover:bg-gray-800 dark:hover:text-white md:hover:bg-transparent "
//             >
//               Download Resume
//             </a>
//           </motion.div>
//         </div>
//         {/* Social Links with Icons */}
//           <motion.div
//             className="flex justify-center md:justify-start gap-4 mt-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.5 }}
//           >
//             {/* LeetCode */}
//             <a
//               href="https://leetcode.com/u/SaiPranithaGunti/" // Replace with your LeetCode profile
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//               aria-label="LeetCode Profile"
//             >
//               <SiLeetcode size={24} />
//             </a>
//             {/* Gmail */}
//             <a
//               href="mailto:pranitha.gunti1609@gmail.com" // Replace with your Gmail
//               className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//               aria-label="Email Me"
//             >
//               <FaEnvelope size={24} />
//             </a>
//             {/* GitHub */}
//             <a
//               href="https://github.com/pranithagunti" // Replace with your GitHub profile
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//               aria-label="GitHub Profile"
//             >
//               <FaGithub size={24} />
//             </a>
//             {/* HackerRank */}
//             <a
//               href="https://www.hackerrank.com/profile/pranitha_gunti11" // Replace with your HackerRank profile
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//               aria-label="HackerRank Profile"
//             >
//               <SiHackerrank size={24} />
//             </a>
//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/in/sai-pranitha-gunti-4486772b3/" // Replace with your LinkedIn profile
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//               aria-label="LinkedIn Profile"
//             >
//               <FaLinkedin size={24} />
//             </a>
//             {/* Website */}
//             <a
//               href="https://yourwebsite.com" // Replace with your website URL
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//               aria-label="Personal Website"
//             >
//               <FaGlobe size={24} />
//             </a>
//           </motion.div>
//         </div>

//         {/* Right: Image */}
//         <motion.div
//           className="flex-1 w-full flex justify-center order-1 md:order-2"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.6, duration: 0.7 }}
//         >
//           <img
//             src="src\imgs\helloworld.png"
//             alt="Sai Pranitha Gunti"
//             border="0"
//             className=" w-100 h-100 md:w-100 md:h-100 ...  "
//           ></img>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
// Import icons from react-icons
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-y-10 max-w-7xl">
        {/* Left: Text Content */}
        <div className="text-center md:text-left flex-1 w-full max-w-xl md:max-w-2xl order-2 md:order-1">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <TypeAnimation
              sequence={["Hi, I'm Sai Pranitha Gunti ", 2000]}
              wrapper="span"
              speed={50}
              className="inline-block"
              cursor={false}
            />
            <br className="hidden md:inline" />
          </motion.h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "AIML-Developer 💻",
              2000,
              "Software Engineer 🤖",
              2000,
              "Fullstack Explorer 🌐",
              2000,
              "Tech Enthusiast 🚀",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="block text-lg sm:text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6"
            repeat={Infinity}
          />

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Accelerated Development with Artificial Intelligence by focusing on
            real-world projects.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
            >
              Check My Work
            </Link>
            <a
              href="https://drive.google.com/file/d/1gpJy0nu9CkPfo8gNcymL-2BKJVvVXPuJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border hover:bg-indigo-500 border-indigo-600 text-indigo-400 px-6 py-3 rounded-xl font-medium transition hover:text-indigo-700 sm:hover:bg-indigo-100 dark:hover:bg-gray-800 dark:hover:text-white md:hover:bg-transparent"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links with Icons */}
          <motion.div
            className="flex justify-center md:justify-start gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/SaiPranithaGunti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFA116] hover:text-[#E69500] dark:text-[#FFB347] dark:hover:text-[#FF9F1A] transition-colors"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode size={24} />
            </a>
            {/* Gmail */}
            <a
              href="mailto:pranitha.gunti1609@gmail.com"
              className="text-[#EA4335] hover:text-[#C13528] dark:text-[#F28B82] dark:hover:text-[#E57373] transition-colors"
              aria-label="Email Me"
            >
              <FaEnvelope size={24} />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/pranithagunti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
            {/* HackerRank */}
            <a
              href="https://www.hackerrank.com/profile/pranitha_gunti11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00EA64] hover:text-[#00C853] dark:text-[#4CAF50] dark:hover:text-[#66BB6A] transition-colors"
              aria-label="HackerRank Profile"
            >
              <SiHackerrank size={24} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sai-pranitha-gunti-4486772b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A66C2] hover:text-[#094E99] dark:text-[#4A90E2] dark:hover:text-[#5CA0EF] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
  
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 w-full flex justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <img
            src="/helloworld.png" // Updated path (assuming it's in public)
            alt="Sai Pranitha Gunti"
            className="w-40 h-40 md:w-48 md:h-48 border-4 border-blue-500 rounded-full shadow-lg ring-2 ring-blue-400/50 shadow-blue-500"
          />
        </motion.div>
      </div>
    </section>
  );
}