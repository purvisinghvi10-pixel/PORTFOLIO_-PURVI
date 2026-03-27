import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import { MotionItem } from '../types';

interface VideoCardProps {
  item: MotionItem;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ item, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Autoplay might be blocked by browser if not muted, 
          // but we ensure it's muted in the tag.
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -30 : 30]);

  return (
    <>
      <motion.div
        ref={containerRef}
        style={{ y }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="mb-6 break-inside-avoid"
      >
        <div 
          className="relative group cursor-pointer overflow-hidden rounded-2xl bg-ink/5"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsFullScreen(true)}
        >
          <motion.div
            animate={{ 
              scale: isHovered ? 1.03 : 1,
              filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full"
          >
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              poster={item.thumbnail}
              className={`w-full object-cover ${item.aspectRatio === '9/16' ? 'aspect-[9/16]' : 'aspect-[16/9]'}`}
            >
              <source src={item.videoUrl} type="video/mp4" />
            </video>
          </motion.div>

          {/* Overlay Info */}
          <div className={`absolute inset-0 bg-white/60 backdrop-blur-sm flex flex-col justify-end p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <h4 className="text-lg font-bold text-ink mb-1">{item.title}</h4>
            <p className="text-sm text-accent uppercase tracking-widest">{item.category}</p>
            <div className="absolute top-4 right-4 w-10 h-10 bg-ink/10 backdrop-blur-md rounded-full flex items-center justify-center text-ink">
              <Maximize2 size={18} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsFullScreen(false)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-ink/10 hover:bg-ink/20 rounded-full flex items-center justify-center text-ink transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsFullScreen(false);
              }}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-line"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                autoPlay
                controls
                loop
                playsInline
                className="w-full h-full object-contain bg-white"
                src={item.videoUrl}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const InMotion: React.FC<{ items: MotionItem[] }> = ({ items }) => {
  return (
    <section id="in-motion" className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Living Gallery</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">IN MOTION.</h3>
          <p className="text-xl text-muted mt-8 max-w-2xl leading-relaxed">
            A curated collection of motion design and video editing work. 
            Immersive, continuous, and dynamic.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, index) => (
            <VideoCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InMotion;
