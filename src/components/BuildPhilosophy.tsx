import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const BuildPhilosophy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef, { threshold: 0.2 });

  const philosophies = [
    {
      icon: '⚡',
      title: 'Modern Architecture',
      description: 'We leverage cutting-edge technologies and proven patterns to build platforms that are fast, reliable, and maintainable.',
    },
    {
      icon: '🎯',
      title: 'Precision Engineering',
      description: 'Every component is crafted with care. We write clean code, comprehensive tests, and detailed documentation.',
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Security is not an afterthought. It\'s baked into every layer of our platforms from day one.',
    },
    {
      icon: '♾️',
      title: 'Built to Scale',
      description: 'Our platforms are designed to grow with our users, handling increasing complexity without breaking.',
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
            How We Build
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Our engineering philosophy in action.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative p-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-2xl transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
