
Action: file_editor create /app/frontend/src/components/SkillsSection.jsx --file-text "import { motion, useInView } from \"framer-motion\";
import { useRef } from \"react\";
import {
  Brain, Cloud, Database, Terminal, Server,
  Code2, GitBranch, Container, Cpu, BarChart3,
  Globe, Layers,
} from \"lucide-react\";

const skills = [
  { name: \"Python\", icon: Terminal, category: \"lang\" },
  { name: \"TensorFlow\", icon: Brain, category: \"ml\" },
  { name: \"PyTorch\", icon: Cpu, category: \"ml\" },
  { name: \"Scikit-Learn\", icon: BarChart3, category: \"ml\" },
  { name: \"AWS\", icon: Cloud, category: \"cloud\" },
  { name: \"GCP\", icon: Cloud, category: \"cloud\" },
  { name: \"Docker\", icon: Container, category: \"devops\" },
  { name: \"Kubernetes\", icon: Server, category: \"devops\" },
  { name: \"FastAPI\", icon: Code2, category: \"lang\" },
  { name: \"PostgreSQL\", icon: Database, category: \"data\" },
  { name: \"MongoDB\", icon: Database, category: \"data\" },
  { name: \"Git\", icon: GitBranch, category: \"devops\" },
  { name: \"React\", icon: Globe, category: \"lang\" },
  { name: \"LangChain\", icon: Layers, category: \"ml\" },
  { name: \"MLflow\", icon: BarChart3, category: \"ml\" },
  { name: \"Redis\", icon: Database, category: \"data\" },
];

const categoryColors = {
  lang: \"#3B82F6\",
  ml: \"#8B5CF6\",
  cloud: \"#22D3EE\",
  devops: \"#60A5FA\",
  data: \"#A5B4FC\",
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: \"-100px\" });

  return (
    <section
      id=\"skills\"
      data-testid=\"skills-section\"
      className=\"relative py-24 sm:py-32\"
    >
      <div className=\"section-container\" ref={ref}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className=\"font-mono text-xs tracking-[0.3em] uppercase text-[#22D3EE] mb-3\"
        >
          Tech Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=\"font-heading font-bold text-2xl sm:text-3xl text-white mb-12\"
        >
          Skills & Technologies
        </motion.h2>

        <div className=\"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4\">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const color = categoryColors[skill.category];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, \"-\")}`}
                className=\"glass-card flex flex-col items-center justify-center p-5 gap-3 cursor-default\"
              >
                <Icon
                  size={24}
                  style={{ color }}
                  className=\"transition-transform duration-300 group-hover:scale-110\"
                />
                <span className=\"font-mono text-xs text-[#E5E7EB] text-center\">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"
Observation: Create successful: /app/frontend/src/components/SkillsSection.jsx