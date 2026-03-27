import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-start pt-[18vh] md:justify-center md:pt-0 bg-black px-5 md:px-6 overflow-hidden">
      {/* Decorative background element for depth - Animated */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-[1200px] w-full">
        <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-6">
          
          {/* Refined Intro Label */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-[1px] h-4 bg-zinc-500"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-medium font-mono">Hello, I'm</span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(48px,15vw,120px)] md:text-[90px] lg:text-[120px] font-extrabold uppercase leading-[0.9] tracking-tighter mb-2"
            >
              Gianluca <br className="md:hidden" /> Grassi
            </motion.h1>
          </div>
          
          <div className="space-y-8 max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="text-zinc-500 text-[10px] md:text-sm uppercase tracking-[0.4em] font-light leading-relaxed"
            >
              Where product design meets revenue performance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="pt-8 border-t border-zinc-900"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-zinc-500 text-[10px] md:text-sm uppercase tracking-[0.4em] font-light leading-relaxed"
              >
                Operating at the intersection of <br className="hidden md:block" />
                <span className="text-white font-semibold">product strategy</span>, 
                <span className="text-white font-semibold"> UX systems</span>, and 
                <span className="text-white font-semibold"> business performance</span>.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Refined Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-zinc-700 rotate-90 mb-8 font-mono">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-800 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
