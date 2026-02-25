import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const FutureScope = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-12 bg-gradient-to-b from-deep-black via-near-black to-deep-black"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12),_rgba(10,10,10,0))] mix-blend-screen opacity-70" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            The Road Ahead
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            We're just getting started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Multi-Platform Vision
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  FirstLine is our foundation, but it's not our destination. We're building a portfolio of platforms, each designed to solve specific, meaningful problems across different industries and use cases.
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Expanding Horizons
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  As we grow, we'll continue to identify gaps in the market, listen to real needs, and build solutions that create lasting value. Our roadmap is ambitious but grounded in reality.
                </p>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Built for the Long Term
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  We're not interested in quick wins or fleeting trends. We're building a company that will be here for decades, creating platforms that stand the test of time.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-center text-gray-500 italic">
                The only way is up.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
