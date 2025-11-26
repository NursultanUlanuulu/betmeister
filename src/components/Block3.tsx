const Block3 = () => {
  return (
    <div className="bg-black text-white h-200 w-100% mx-auto ">
      <hr className="w-100% h-[0.5px] bg-rose-50 mx-auto mb-6 border-0" />
      <header className="text-center mb-12 max-w-6xl mx-auto mt-50">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl  leading-tight">
          Ověřené tipy. Žádný balast.
        </h2>
        <p className="text-2xl sm:text-3xl lg:text-5xl  mt-2">
          Systém místo chaosu.
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-25">
        <div className="bg-white text-black p-8 rounded-xl shadow-2xl transition duration-300 hover:shadow-cyan-500/50">
          <div className="flex flex-col h-full">
            <div className="mb-6 flex justify-center md:justify-start">
              <span
                role="img"
                aria-label="Question mark people"
                className="text-3xl"
              ></span>
            </div>

            <h3 className="text-2xl font-bold mb-4">Analýza od expertů</h3>
            <p className="text-gray-700">
              Zkušený tým sleduje statistiky, formu týmů, zranění i sázkové
              pohyby. Každý tip má důvod.
            </p>
          </div>
        </div>

        <div className="bg-white text-black p-8 rounded-xl shadow-2xl transition duration-300 hover:shadow-cyan-500/50">
          <div className="flex flex-col h-full">
            <div className="mb-6 flex justify-center md:justify-start">
              <span
                role="img"
                aria-label="Question mark people"
                className="text-3xl"
              >
                ❓👤
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4">Tipy přímo do Telegramu</h3>
            <p className="text-gray-700 ">
              Nemusíš nic hledat. Všechny sázky ti dorazí rovnou do soukromého
              kanálu. Rychle, přehledně, včas.
            </p>
          </div>
        </div>

        <div className="bg-white text-black p-8 rounded-xl shadow-2xl transition duration-300 hover:shadow-cyan-500/50">
          <div className="flex flex-col h-full">
            <div className="mb-6 flex justify-center md:justify-start">
              <span
                role="img"
                aria-label="Trophy on a pedestal"
                className="text-3xl"
              >
                🏆
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4">Důraz na výsledky</h3>
            <p className="text-gray-700 ">
              Žádné mlžení. Pravidelné vyhodnocování, transparentní statistiky a
              reálné výsledky.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block3;
