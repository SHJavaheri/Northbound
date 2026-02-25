import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Principles = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });

  const principles = [
    {
      number: '01',
      title: 'Quality Over Speed',
      description: 'We build things right, not fast. Every line of code, every feature, every decision is made with long-term excellence in mind.',
    },
    {
      number: '02',
      title: 'User-Centric Design',
      description: 'Our platforms exist to serve users, not the other way around. We obsess over experience, usability, and value.',
    },
    {
      number: '03',
      title: 'Sustainable Growth',
      description: 'We grow deliberately and sustainably. No shortcuts, no compromises, no burning out our team or our vision.',
    },
    {
      number: '04',
      title: 'Transparency & Trust',
      description: 'We build in the open, communicate honestly, and earn trust through consistent action and integrity.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 px-6 md:px-12 bg-deep-black"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Our Principles
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            The values that guide every decision we make.
          </p>
        </motion.div>

        <div className="space-y-12">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 hover:bg-white/5"
            >
              <div className="text-6xl md:text-8xl font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500">
                {principle.number}
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  {principle.title}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
