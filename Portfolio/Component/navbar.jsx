
Action: file_editor create /app/frontend/src/components/Navbar.jsx --file-text "import { useState, useEffect } from \"react\";
import { motion, AnimatePresence } from \"framer-motion\";
import { Menu, X } from \"lucide-react\";

const navLinks = [
  { label: \"About\", href: \"#about\" },
  { label: \"Projects\", href: \"#projects\" },
  { label: \"Skills\", href: \"#skills\" },
  { label: \"Contact\", href: \"#contact\" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener(\"scroll\", onScroll);
    return () => window.removeEventListener(\"scroll\", onScroll);
  }, []);

  return (
    <motion.nav
      data-testid=\"navbar\"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: \"easeOut\" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? \"bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 shadow-lg\"
          : \"bg-transparent\"
      }`}
    >
      <div className=\"section-container flex items-center justify-between h-16\">
        <a
          href=\"#hero\"
          data-testid=\"nav-logo\"
          className=\"font-heading font-bold text-lg tracking-tight text-white hover:text-[#60A5FA] transition-colors\"
        >
          Kunal<span className=\"text-[#8B5CF6]\">.</span>dev
        </a>

        {/* Desktop links */}
        <div className=\"hidden md:flex items-center gap-8\">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className=\"nav-link text-sm text-[#9CA3AF] hover:text-white font-medium transition-colors\"
            >
              {link.label}
            </a>
          ))}
          <a
            href=\"/resume.pdf\"
            target=\"_blank\"
            rel=\"noopener noreferrer\"
            data-testid=\"nav-resume-btn\"
            className=\"relative inline-flex items-center px-5 py-2 text-sm font-medium text-white border border-[#3B82F6] rounded-full overflow-hidden group hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all\"
          >
            <span className=\"absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300\" />
            <span className=\"relative z-10\">Resume</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          data-testid=\"mobile-menu-toggle\"
          className=\"md:hidden text-white p-2\"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: \"auto\" }}
            exit={{ opacity: 0, height: 0 }}
            className=\"md:hidden bg-[#020617]/95 backdrop-blur-xl border-b border-white/5\"
          >
            <div className=\"section-container py-4 flex flex-col gap-4\">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                  className=\"text-[#9CA3AF] hover:text-white text-sm font-medium transition-colors\"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href=\"/resume.pdf\"
                target=\"_blank\"
                rel=\"noopener noreferrer\"
                data-testid=\"mobile-nav-resume-btn\"
                className=\"text-[#60A5FA] text-sm font-medium\"
                onClick={() => setMobileOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
"
Observation: Create successful: /app/frontend/src/components/Navbar.jsx