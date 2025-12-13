import { useEffect, useRef } from 'react';

const Block6 = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Автовоспроизведение заблокировано:", e));
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Видеофон с анимацией спортивной аналитики */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
        >
          {/* Альтернативные видео источники на спортивную/аналитическую тематику */}
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-data-points-uploading-on-screen-43227-large.mp4" 
            type="video/mp4" 
          />
          <source 
            src="https://cdn.coverr.co/videos/coverr-data-visualization-on-multiple-screens-2006/1080p.mp4" 
            type="video/mp4" 
          />
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-financial-data-in-motion-34606-large.mp4" 
            type="video/mp4" 
          />
          Ваш браузер не поддерживает видео тег.
        </video>
        
        {/* Затемнение фона для лучшей читаемости */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Стилизованные элементы анимации */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-20 w-40 h-40 border border-cyan-500/15 rounded-full animate-ping"></div>
      </div>

      {/* Основной контент */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="w-full max-w-6xl mx-auto text-center">
          <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block">Относись к спорту</span>
            <span className="block mb-4">как к рынку.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Прогнозируй, анализируй, зарабатывай.
            </span>
          </h2>
          
          
          
          
        </div>
      </div>
    </section>
  );
};

export default Block6;