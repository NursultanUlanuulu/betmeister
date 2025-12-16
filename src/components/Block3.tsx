import img1 from '../assets/brainstorm.png'
import img2 from '../assets/question-and-answer.png'
import img3 from '../assets/podium.png'

const Block3 = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        <hr className="w-full h-0.5 bg-white/30 mb-8 sm:mb-10 md:mb-12 border-0" />
        
        {/* Заголовок */}
        <header className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Ověřené tipy. Žádný balast.
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 leading-snug">
           Systém místo chaosu.
          </p>
        </header>

        {/* Карточки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4">
          {/* Карточка 1 */}
          <div className="group relative bg-white text-black p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer overflow-hidden">
          
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-transparent group-hover:from-purple-500/10 group-hover:via-purple-500/5 transition-all duration-500" />
            
            
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
                <img 
                  src={img1} 
                  alt="Анализ" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Analýza od expertů</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Zkušený tým sleduje statistiky,<br />
                 formu týmů, zranění i sázkové<br />
                  pohyby. Každý tip má důvod.
              </p>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="group relative bg-white text-black p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer overflow-hidden">
           
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-transparent group-hover:from-purple-500/10 group-hover:via-purple-500/5 transition-all duration-500" />
            
            
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
                <img 
                  src={img2} 
                  alt="Telegram" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Tipy přímo do Telegramu</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Nemusíš nic hledat. Všechny sázky <br />
                 ti dorazí rovnou do soukromého <br />
                  kanálu. Rychle, přehledně, včas.
              </p>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="group relative bg-white text-black p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-transparent group-hover:from-purple-500/10 group-hover:via-purple-500/5 transition-all duration-500" />
            
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            
            <div className="relative flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
                <img 
                  src={img3} 
                  alt="Результаты" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Důraz na výsledky</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Žádné mlžení. Pravidelné <br />
                 vyhodnocování, transparentní <br />
                  statistiky a reálné výsledky.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block3;
