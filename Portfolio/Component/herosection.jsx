
Action: file_editor create /app/frontend/src/components/HeroSection.jsx --file-text "import { motion } from \"framer-motion\";
import { ArrowDown, Github, Linkedin } from \"lucide-react\";

export default function HeroSection() {
  return (
    <section
      id=\"hero\"
      data-testid=\"hero-section\"
      className=\"relative min-h-screen flex items-center justify-center overflow-hidden\"
    >
      <div className=\"section-container relative z-10 text-left w-full py-32\">
        <div className=\"max-w-3xl\">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=\"font-mono text-xs tracking-[0.3em] uppercase text-[#3B82F6] mb-6\"
          >
            AI Engineer &bull; ML &bull; Cloud
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: \"blur(8px)\" }}
            animate={{ opacity: 1, y: 0, filter: \"blur(0px)\" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=\"font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-4\"
          >
            Hi, I'm{\" \"}
            <span className=\"text-gradient\">Kunal Khapre</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className=\"text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-xl mb-10\"
          >
            Building intelligent systems at the intersection of machine learning,
            cloud architecture, and real-world impact. Turning data into decisions.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className=\"flex flex-wrap items-center gap-4\"
          >
            <a
              href=\"#projects\"
              data-testid=\"hero-cta-button\"
              className=\"relative inline-flex items-center px-8 py-3 text-sm font-semibold text-white bg-[#020617] border border-[#3B82F6] rounded-full overflow-hidden group hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all\"
            >
              <span className=\"absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300\" />
              <span className=\"relative z-10\">View My Work</span>
            </a>
            <a
              href=\"#contact\"
              data-testid=\"hero-contact-button\"
              className=\"inline-flex items-center px-8 py-3 text-sm font-semibold text-[#E5E7EB] border border-white/10 rounded-full hover:border-[#8B5CF6]/50 hover:text-white transition-all\"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className=\"flex items-center gap-4 mt-10\"
          >
            <a
              href=\"https://github.com/kunalkhapre0\"
              target=\"_blank\"
              rel=\"noopener noreferrer\"
              data-testid=\"hero-github-link\"
              className=\"text-[#9CA3AF] hover:text-white hover:scale-110 transition-all\"
            >
              <Github size={20} />
            </a>
            <a
              href=\"https://www.linkedin.com/in/kunal-khapre-431096369/\"
              target=\"_blank\"
              rel=\"noopener noreferrer\"
              data-testid=\"hero-linkedin-link\"
              className=\"text-[#9CA3AF] hover:text-white hover:scale-110 transition-all\"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className=\"absolute bottom-8 left-1/2 -translate-x-1/2 z-10\"
      >
        <a href=\"#about\" data-testid=\"scroll-indicator\" className=\"text-[#9CA3AF] hover:text-[#3B82F6] transition-colors\">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: \"easeInOut\" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
"
Observation: Create successful: /app/frontend/src/components/HeroSection.js