
Action: file_editor create /app/frontend/src/components/ProjectsSection.jsx --file-text "import { motion, useInView } from \"framer-motion\";
import { useRef } from \"react\";
import { ExternalLink, Github } from \"lucide-react\";

const projects = [
  {
    title: \"Neural Style Transfer Engine\",
    description: \"Real-time artistic style transfer using CNNs. Deployed on AWS Lambda with a React frontend. Processes images in under 2 seconds.\",
    tags: [\"PyTorch\", \"AWS Lambda\", \"React\", \"Docker\"],
    image: \"https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGFyayUyMGJsdWUlMjBwdXJwbGV8ZW58MHx8fHwxNzc1NDQ1OTIxfDA&ixlib=rb-4.1.0&q=85\",
    github: \"https://github.com/kunalkhapre0\",
    live: \"#\",
    featured: true,
  },
  {
    title: \"Cloud ML Pipeline\",
    description: \"End-to-end ML pipeline on GCP with automated retraining, model versioning, and A/B testing for production deployments.\",
    tags: [\"GCP\", \"MLflow\", \"Kubernetes\", \"Python\"],
    image: \"https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwyfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGFyayUyMGJsdWUlMjBwdXJwbGV8ZW58MHx8fHwxNzc1NDQ1OTIxfDA&ixlib=rb-4.1.0&q=85\",
    github: \"https://github.com/kunalkhapre0\",
    live: \"#\",
    featured: false,
  },
  {
    title: \"Conversational AI Bot\",
    description: \"RAG-based chatbot with custom knowledge bases, built using LangChain and deployed with FastAPI and WebSocket streaming.\",
    tags: [\"LangChain\", \"FastAPI\", \"OpenAI\", \"Redis\"],
    image: \"https://images.unsplash.com/photo-1647356161576-4e80c6619a0e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGFyayUyMGJsdWUlMjBwdXJwbGV8ZW58MHx8fHwxNzc1NDQ1OTIxfDA&ixlib=rb-4.1.0&q=85\",
    github: \"https://github.com/kunalkhapre0\",
    live: \"#\",
    featured: false,
  },
  {
    title: \"Anomaly Detection System\",
    description: \"Time-series anomaly detection for IoT sensor data using autoencoders. Alerts via Slack integration.\",
    tags: [\"TensorFlow\", \"TimeSeries\", \"Slack API\", \"PostgreSQL\"],
    image: \"https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxuZXVyYWwlMjBuZXR3b3JrJTIwZGFyayUyMGJsdWUlMjBwdXJwbGV8ZW58MHx8fHwxNzc1NDQ1OTIxfDA&ixlib=rb-4.1.0&q=85\",
    github: \"https://github.com/kunalkhapre0\",
    live: \"#\",
    featured: false,
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: \"-100px\" });

  return (
    <section
      id=\"projects\"
      data-testid=\"projects-section\"
      className=\"relative py-24 sm:py-32\"
    >
      <div className=\"section-container\" ref={ref}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className=\"font-mono text-xs tracking-[0.3em] uppercase text-[#8B5CF6] mb-3\"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=\"font-heading font-bold text-2xl sm:text-3xl text-white mb-12\"
        >
          Things I've built
        </motion.h2>

        <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              data-testid={`project-card-${i}`}
              className={`glass-card overflow-hidden group ${
                project.featured ? \"bento-item md:col-span-2 lg:col-span-2\" : \"\"
              }`}
            >
              {/* Image */}
              <div className=\"relative h-48 overflow-hidden\">
                <img
                  src={project.image}
                  alt={project.title}
                  className=\"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110\"
                />
                <div className=\"absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/60 to-transparent\" />
                {/* Overlay links */}
                <div className=\"absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300\">
                  <a
                    href={project.github}
                    target=\"_blank\"
                    rel=\"noopener noreferrer\"
                    data-testid={`project-github-${i}`}
                    className=\"p-2 rounded-full bg-[#020617]/80 backdrop-blur text-white hover:text-[#3B82F6] transition-colors\"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.live}
                    target=\"_blank\"
                    rel=\"noopener noreferrer\"
                    data-testid={`project-live-${i}`}
                    className=\"p-2 rounded-full bg-[#020617]/80 backdrop-blur text-white hover:text-[#3B82F6] transition-colors\"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className=\"p-6\">
                <h3 className=\"font-heading font-bold text-lg text-white mb-2 group-hover:text-[#A5B4FC] transition-colors\">
                  {project.title}
                </h3>
                <p className=\"text-sm text-[#9CA3AF] leading-relaxed mb-4\">
                  {project.description}
                </p>
                <div className=\"flex flex-wrap gap-2\">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className=\"font-mono text-[10px] px-2.5 py-1 rounded-full border border-[#8B5CF6]/25 text-[#A5B4FC] bg-[#8B5CF6]/5\"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"
Observation: Create successful: /app/frontend/src/components/ProjectsSection.jsx