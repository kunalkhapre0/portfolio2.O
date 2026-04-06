
Action: file_editor create /app/frontend/src/components/ContactSection.jsx --file-text "import { motion, useInView } from \"framer-motion\";
import { useRef, useState } from \"react\";
import { Send, CheckCircle2, AlertCircle } from \"lucide-react\";
import axios from \"axios\";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: \"-100px\" });
  const [form, setForm] = useState({ name: \"\", email: \"\", subject: \"\", message: \"\" });
  const [status, setStatus] = useState(\"idle\"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(\"sending\");
    try {
      await axios.post(`${API}/contact`, form);
      setStatus(\"sent\");
      setForm({ name: \"\", email: \"\", subject: \"\", message: \"\" });
      setTimeout(() => setStatus(\"idle\"), 4000);
    } catch {
      setStatus(\"error\");
      setTimeout(() => setStatus(\"idle\"), 4000);
    }
  };

  const inputClasses =
    \"w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E5E7EB] placeholder:text-[#4B5563] focus:border-[#3B82F6] focus:shadow-[0_0_10px_rgba(59,130,246,0.3)] outline-none transition-all\";

  return (
    <section
      id=\"contact\"
      data-testid=\"contact-section\"
      className=\"relative py-24 sm:py-32\"
    >
      <div className=\"section-container\" ref={ref}>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className=\"font-mono text-xs tracking-[0.3em] uppercase text-[#3B82F6] mb-3\"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className=\"font-heading font-bold text-2xl sm:text-3xl text-white mb-4\"
        >
          Let's work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className=\"text-[#9CA3AF] text-sm max-w-md mb-12\"
        >
          Have a project in mind or just want to chat about AI? Drop me a message.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className=\"max-w-xl\"
        >
          <form
            onSubmit={handleSubmit}
            data-testid=\"contact-form\"
            className=\"glass-card p-8 space-y-5\"
          >
            <div className=\"grid grid-cols-1 sm:grid-cols-2 gap-5\">
              <div>
                <label className=\"block text-xs text-[#9CA3AF] mb-2 font-mono uppercase tracking-wider\">
                  Name
                </label>
                <input
                  type=\"text\"
                  name=\"name\"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder=\"Your name\"
                  data-testid=\"contact-name-input\"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className=\"block text-xs text-[#9CA3AF] mb-2 font-mono uppercase tracking-wider\">
                  Email
                </label>
                <input
                  type=\"email\"
                  name=\"email\"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder=\"you@example.com\"
                  data-testid=\"contact-email-input\"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label className=\"block text-xs text-[#9CA3AF] mb-2 font-mono uppercase tracking-wider\">
                Subject
              </label>
              <input
                type=\"text\"
                name=\"subject\"
                value={form.subject}
                onChange={handleChange}
                placeholder=\"What's this about?\"
                data-testid=\"contact-subject-input\"
                className={inputClasses}
              />
            </div>

            <div>
              <label className=\"block text-xs text-[#9CA3AF] mb-2 font-mono uppercase tracking-wider\">
                Message
              </label>
              <textarea
                name=\"message\"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder=\"Tell me about your project...\"
                data-testid=\"contact-message-input\"
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type=\"submit\"
              disabled={status === \"sending\"}
              data-testid=\"contact-submit-button\"
              className=\"relative inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white bg-[#020617] border border-[#3B82F6] rounded-full overflow-hidden group hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all disabled:opacity-50\"
            >
              <span className=\"absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300\" />
              <span className=\"relative z-10 flex items-center gap-2\">
                {status === \"sending\" ? \"Sending...\" : status === \"sent\" ? (
                  <><CheckCircle2 size={16} /> Sent!</>
                ) : status === \"error\" ? (
                  <><AlertCircle size={16} /> Error — Retry</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
"
Observation: Create successful: /app/frontend/src/components/ContactSection.jsx