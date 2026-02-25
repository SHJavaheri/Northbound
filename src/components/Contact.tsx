import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { copyToClipboard } from '../utils/clipboard';

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });
  const [showCopied, setShowCopied] = useState(false);

  const email = 'northboundinc.hq@gmail.com';

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(email);
    if (success) {
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between py-32 px-6 md:px-12 bg-deep-black"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.18),_rgba(10,10,10,0))] mix-blend-screen opacity-75" />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Have questions? Want to learn more? We'd love to hear from you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative inline-block"
          >
            <button
              onClick={handleCopyEmail}
              className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xl rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {email}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {showCopied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg whitespace-nowrap"
              >
                Email copied to clipboard
              </motion.div>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-sm text-gray-500"
          >
            Click to copy email address
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-12 pt-12 border-t border-white/10 text-center"
      >
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Northbound Inc. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          The only way is up.
        </p>
      </motion.div>
    </section>
  );
};
