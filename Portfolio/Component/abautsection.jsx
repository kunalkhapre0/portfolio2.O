
Action: file_editor create /app/frontend/src/components/AboutSection.jsx --file-text "import { motion } from \"framer-motion\";
import { useInView } from \"framer-motion\";
import { useRef } from \"react\";

const PROFILE_IMG = \"https://images.unsplash.com/photo-1677212004257-103cfa6b59d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxkYXJrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMGFic3RyYWN0aW9ufGVufDB8fHx8MTc3NTQ0NTkwN3ww&ixlib=rb-4.1.0&q=85\";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: \"-100px\" });

  return (
    <section
      id=\"about\"
      data-testid=\"about-section\"
      className=\"relative py-24 sm:py-32\"
    >
      <div className=\"section-container\" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className=\"font-mono text-xs tracking-[0.3em] uppercase text-[#3B82F6] mb-3\"
        >
          About Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=\"font-heading font-bold text-2xl sm:text-3xl text-white mb-12\"
        >
          A bit about who I am
        </motion.h2>

        <div className=\"grid grid-cols-1 md:grid-cols-2 gap-12 items-center\">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className=\"flex justify-center md:justify-start\"
          >
            <div className=\"relative\">
              {/* Spinning gradient border */}
              <div className=\"profile-ring rounded-full p-[3px] w-64 h-64 sm:w-72 sm:h-72 pulse-glow\">
                <div className=\"rounded-full bg-[#020617] p-[3px] w-full h-full\">
                  <img
                    src={PROFILE_IMG}
                    alt=\"Kunal Khapre\"
                    data-testid=\"profile-image\"
                    className=\"rounded-full w-full h-full object-cover\"
                  />
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className=\"absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#3B82F6]/20 floating\" style={{ animationDelay: \"0s\" }} />
              <div className=\"absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-[#8B5CF6]/15 floating\" style={{ animationDelay: \"2s\" }} />
            </div>
          </motion.div>

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className=\"glass-card p-8\"
          >
            <p className=\"text-[#E5E7EB] leading-relaxed mb-4\">
              I'm <span className=\"text-[#60A5FA] font-semibold\">Kunal Khapre</span>, an AI Engineer
              passionate about building machine learning systems that solve real-world problems.
              I specialize in designing scalable ML pipelines, deploying models to the cloud,
              and turning complex data into actionable insights.
            </p>
            <p className=\"text-[#9CA3AF] leading-relaxed mb-6\">
              With a strong foundation in Python, TensorFlow, and cloud platforms like AWS and GCP,
              I bridge the gap between research and production. When I'm not training models,
              you'll find me exploring new architectures and contributing to open-source projects.
            </p>
            <div className=\"flex flex-wrap gap-3\">
              {[\"Python\", \"TensorFlow\", \"AWS\", \"Docker\", \"FastAPI\"].map((tag) => (
                <span
                  key={tag}
                  className=\"font-mono text-xs px-3 py-1.5 rounded-full border border-[#3B82F6]/30 text-[#60A5FA] bg-[#3B82F6]/5\"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"
Observation: Create successful: /app/frontend/src/components/AboutSection.jsx