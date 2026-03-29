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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="break-inside-avoid mb-[20px] relative overflow-hidden rounded-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpen(item.videoUrl)}
    >
      <motion.div
        animate={{ 
          scale: isHovered ? 1.03 : 1,
          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full"
      >
        <video
          muted
          loop
          autoPlay
          playsInline
          className="w-full h-auto block rounded-2xl"
        >
          <source src={item.videoUrl} type="video/mp4" />
        </video>
      </motion.div>
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
    <section id="in-motion" className="py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-accent font-mono text-sm uppercase tracking-widest mb-4">Living Gallery</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">IN MOTION.</h3>
          <p className="text-xl text-muted mt-8 max-w-2xl leading-relaxed">
            A curated collection of motion design and video editing work. 
            Immersive, continuous, and dynamic.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-[20px]">
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
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedVideo(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-[1000]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                autoPlay
                controls
                className="w-full h-full max-h-[90vh] object-contain rounded-xl"
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
