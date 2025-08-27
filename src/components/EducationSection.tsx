
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useSectionInView } from "../assets/lib/hooks";
// import { useTheme } from "../context/theme-context";
// import { educationData } from "../assets/lib/data";

// const EducationSection: React.FC = () => {
//   const { ref } = useSectionInView("Education");
//   const { theme } = useTheme();
//   const animationRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: animationRef,
//     offset: ["0 1", "1.33 1"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

//   return (
//     <section className="education-section py-16 px-8" id="education" ref={ref}>
      
//       <motion.div
//         ref={animationRef}
//         style={{ scale, opacity }}
//         className="mb-12"
//       >
//         <p className="text-4xl font-bold text-[--darkblue] mb-6">
//           <span className="text-[--orange]">&lt;</span>
//           Education
//           <span className="text-[--orange]">/&gt;</span>
//         </p>
//            <h2>
//               { "My Educational Background"}
//             </h2>
//       </motion.div>

//       <div className="flex flex-col gap-8">
//         {educationData.map((edu, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: idx * 0.1 }}
//             viewport={{ once: true }}
//             className={`rounded-xl p-8 shadow-md ${
//               theme === "light" ? "bg-[--icewhite]" : "bg-[--darkblue]/30"
//             }`}
//           >
//             <h3 className="text-2xl font-semibold text-[--lightblue]">{edu.degree}</h3>
//             <p className="text-xl text-[--darkblue]">
//               {edu.institution}{" "}
//               <span className="text-gray-500">({edu.year})</span>
//             </p>
//             <p className="mt-2 text-lg text-[--grey]">{edu.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EducationSection;


import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "../assets/lib/hooks";
import { useTheme } from "../context/theme-context";
import { educationData } from "../assets/lib/data";

const EducationSection: React.FC = () => {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();
  const animationRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section
      className="relative education-section pb-16 max-lg:p-16"
      id="education"
      ref={ref}
    >
                <div className="title-container flex flex-col justify-center items-center p-32 w-1/2   gap-6 min-[1921px]:px-[55rem] max-lg:p-0  max-lg:w-full max-lg:items-start max-lg:py-16 ">

<motion.div
            ref={animationRef}
            style={{
              scale: scale,
              opacity: opacity,
            }}
          >
            <p className="font-black mb-6">
              <span className="text-[--orange]">&lt;</span>Education
              <span className="text-[--orange]">/&gt;</span>
            </p>
            <h2>
              { "My Educational Background"}
            </h2>
          </motion.div>
          </div>

      <div className="flex flex-col gap-16 items-center max-lg:items-start ">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`w-2/3 max-lg:w-full rounded-xl p-8 shadow-md transition-all  ${
            theme === "dark"
          ? "bg-[--blackblue] dark-mode-shadow"
          : "border-solid border-[0.1rem] border-[--lightblue]"
      }`}

          >
            <h3 className="text-3xl font-semibold text-[--lightblue]">{edu.degree}</h3>
            <p className="mt-2 text-2xl text-[--darkblue]">
              {edu.institution}{" "}
              <span className="text-gray-500">({edu.year})</span>
            </p>
             <p className="mt-3 text-xl text-[--grey]">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
