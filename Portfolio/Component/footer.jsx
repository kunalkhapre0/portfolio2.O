
Action: file_editor create /app/frontend/src/components/Footer.jsx --file-text "import { Github, Linkedin, ArrowUp } from \"lucide-react\";

export default function Footer() {
  return (
    <footer data-testid=\"footer\" className=\"relative py-12 border-t border-white/5\">
      <div className=\"section-container flex flex-col sm:flex-row items-center justify-between gap-6\">
        <p className=\"text-[#9CA3AF] text-sm\">
          &copy; {new Date().getFullYear()}{\" \"}
          <span className=\"text-[#E5E7EB]\">Kunal Khapre</span>. Built with passion.
        </p>

        <div className=\"flex items-center gap-5\">
          <a
            href=\"https://github.com/kunalkhapre0\"
            target=\"_blank\"
            rel=\"noopener noreferrer\"
            data-testid=\"footer-github-link\"
            className=\"text-[#9CA3AF] hover:text-white hover:scale-110 transition-all\"
          >
            <Github size={18} />
          </a>
          <a
            href=\"https://www.linkedin.com/in/kunal-khapre-431096369/\"
            target=\"_blank\"
            rel=\"noopener noreferrer\"
            data-testid=\"footer-linkedin-link\"
            className=\"text-[#9CA3AF] hover:text-white hover:scale-110 transition-all\"
          >
            <Linkedin size={18} />
          </a>
          <a
            href=\"#hero\"
            data-testid=\"footer-scroll-top\"
            className=\"text-[#9CA3AF] hover:text-[#3B82F6] hover:scale-110 transition-all ml-2\"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
"
Observation: Create successful: /app/frontend/src/components/Footer.jsx