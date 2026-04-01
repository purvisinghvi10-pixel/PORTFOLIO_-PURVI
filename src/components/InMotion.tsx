import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { MotionItem } from '../types';

interface VideoCardProps {
  item: MotionItem;
  index: number;
  onOpen: (url: string) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ item, onOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      className="break-inside-avoid mb-[32px] motion-card cursor-pointer"
      onClick={() => onOpen(item.videoUrl)}
    >
      <video
        muted
        loop
        autoPlay
        playsInline
        className="w-full h-auto block"
      >
        <source src={item.videoUrl} type="video/mp4" />
      </video>
      
      <div className="motion-label">
        <h4>{item.title}</h4>
        {item.description && <p>{item.description}</p>}
      </div>
    </motion.div>
  );
};

const InMotion: React.FC<{ items: MotionItem[] }> = ({ items }) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedVideo(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="in-motion" className="py-48 bg-bg">
      <div className="max-w-7xl mx-auto px-10">
        <div className="mb-32">
          <h2 className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-6 opacity-80">Living Gallery</h2>
          <h3 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.9]">IN MOTION.</h3>
          <p className="text-xl md:text-2xl text-muted mt-12 max-w-2xl leading-relaxed font-light">
            A curated collection of motion design and video editing work. 
            Immersive, continuous, and dynamic.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12">
          {items.map((item, index) => (
            <VideoCard 
              key={item.id} 
              item={item} 
              index={index} 
              onOpen={(url) => setSelectedVideo(url)} 
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-white/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-8 right-8 w-14 h-14 bg-ink/5 hover:bg-ink/10 rounded-full flex items-center justify-center text-ink transition-all duration-500 z-[1000]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
            >
              <X size={28} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-6xl max-h-[85vh] rounded-[32px] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                autoPlay
                controls
                className="w-full h-full max-h-[85vh] object-contain rounded-[32px]"
                src={selectedVideo}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InMotion;
