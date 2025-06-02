// // components/Navbar.jsx

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();
//   const activePath = location.pathname;

//   const navItem = (name, path) => {
//     const isActive = activePath === path;
//     return (
//       <motion.div
//         key={path}
//         className="relative px-1"
//         initial="rest"
//         whileHover="hover"
//         animate="rest"
//       >
//         <motion.span
//           className={`absolute left-0 -bottom-0.5 h-[2px] w-full bg-indigo-600 origin-left`}
//           variants={{
//             rest: { scaleX: isActive ? 1 : 0 },
//             hover: { scaleX: 1 },
//           }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//           style={{ transformOrigin: "left" }}
//         />
//         <motion.div
//           variants={{
//             rest: { scale: 1 },
//             hover: { scale: 1.05 },
//           }}
//         >
//           <Link
//             to={path}
//             className={`font-medium ${
//               isActive
//                 ? "text-indigo-600"
//                 : "text-gray-700 hover:text-indigo-600"
//             }`}
//           >
//             {name}
//           </Link>
//         </motion.div>
//       </motion.div>
//     );
//   };

//   return (
//     <motion.nav
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ type: "spring", stiffness: 70, damping: 12 }}
//       className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow z-50"
//     >
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <motion.h1
//           whileHover={{ scale: 1.01, rotate: 1 }}
//           className="text-2xl font-bold text-indigo-600 cursor-pointer"
//         >
//           <Link to="/">Welcome to my Portfolio</Link>
//         </motion.h1>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-6">
//           {navItem("About", "/about")}
//           {navItem("Skills", "/skills")}
//           {navItem("Projects", "/projects")}
//           {navItem("Contact", "/contact")}
//         </div>

//         {/* Mobile Menu Icon */}
//         <button
//           className="md:hidden text-gray-700 dark:text-white"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900"
//         >
//           <Link
//             to="/about"
//             onClick={() => setIsOpen(false)}
//             className="block py-2 text-gray-700 dark:text-white hover:text-indigo-600 font-medium"
//           >
//             About
//           </Link>
//           <Link
//             to="/skills"
//             onClick={() => setIsOpen(false)}
//             className="block py-2 text-gray-700 dark:text-white hover:text-indigo-600 font-medium"
//           >
//             Skills
//           </Link>
//           <Link
//             to="/projects"
//             onClick={() => setIsOpen(false)}
//             className="block py-2 text-gray-700 dark:text-white hover:text-indigo-600 font-medium"
//           >
//             Projects
//           </Link>
//           <Link
//             to="/contact"
//             onClick={() => setIsOpen(false)}
//             className="block py-2 text-gray-700 dark:text-white hover:text-indigo-600 font-medium"
//           >
//             Contact
//           </Link>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  const navItem = (name, path) => {
    const isActive = activePath === path;
    return (
      <motion.div
        key={path}
        className="relative px-1"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.span
          className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-indigo-600 origin-left"
          variants={{
            rest: { scaleX: isActive ? 1 : 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />
        <motion.div
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 },
          }}
        >
          <Link
            to={path}
            className={`font-medium ${
              isActive
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            }`}
          >
            {name}
          </Link>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 12 }}
      className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.01, rotate: 1 }}
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 cursor-pointer"
        >
          <Link to="/">Welcome to my Portfolio</Link>
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navItem("About", "/about")}
          {navItem("Skills", "/skills")}
          {navItem("Projects", "/projects")}
          {navItem("Contact", "/contact")}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900"
        >
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
          >
            About
          </Link>
          <Link
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}