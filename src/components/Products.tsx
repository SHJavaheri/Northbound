import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-12 bg-gradient-to-b from-deep-black via-dark-gray to-deep-black"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.13),_rgba(10,10,10,0))] mix-blend-screen opacity-75" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Our Platforms
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Building the future, one platform at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
            
            <div className="relative bg-gradient-to-br from-near-black to-deep-black p-12 md:p-16 rounded-3xl border border-white/10">
              <div className="absolute top-8 right-8">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-500/30">
                  In Development
                </span>
              </div>

              <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                FirstLine
              </h3>

              <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
                Our first platform. A comprehensive solution designed to transform how teams collaborate, communicate, and execute on their most critical work.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <p className="text-gray-400">
                    Built for scale, designed for simplicity
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <p className="text-gray-400">
                    Engineered with modern architecture and best practices
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2" />
                  <p className="text-gray-400">
                    Launching soon with a focus on real-world impact
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500 italic">
                  More details coming soon. Stay tuned.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
