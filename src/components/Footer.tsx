const Footer = () => {
  return (
    <footer className="bg-white/95 backdrop-blur-sm shadow-sm mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          
          {/* Лого и описание */}
          <div className="md:w-1/3">
            <div className="text-2xl font-bold text-[#2e1a5e] relative inline-block">
              betmeister
              
            </div>
            <p className="text-gray-600 mt-4 max-w-[220px]">
              Data místo náhody. Výhry místo tipů.
            </p>
          </div>

          {/* Навигация */}
          <div className="md:w-1/3 flex flex-col space-y-2">
            <button className="text-gray-900 font-medium text-left hover:text-[#C8A2D6] transition">
              Domů
            </button>
            <button className="text-gray-900 font-medium text-left hover:text-[#C8A2D6] transition">
              Jak to funguje
            </button>
            <button className="text-gray-900 font-medium text-left hover:text-[#C8A2D6] transition">
              Členství
            </button>
            <button className="text-gray-900 font-medium text-left hover:text-[#C8A2D6] transition">
              Obchodní podmínky
            </button>
          </div>

          {/* О системе */}
          <div className="md:w-1/3">
            <h3 className="text-gray-900 font-medium mb-2">Náš systém</h3>
            <p className="text-gray-500 text-sm leading-6">
              Vše přehledné, včas a bez zbytečností. Každý tip má hlavu a patu — žádné „možná to vyjde“.
            </p>
          </div>

        </div>

        <hr className="border-gray-200 my-6" />

        {/* Копирайт и предупреждение */}
        <div className="text-gray-500 text-sm leading-relaxed">
          <p className="mb-2">
            Copyright: © 2025 betmeister.eu. Všechna práva vyhrazena.
          </p>
          <p className="text-xs">
            Upozornění: Tipy nejsou investičním doporučením. Sázení je rizikové a může vést ke ztrátě vkladu. Služba je určena pouze pro osoby starší 18 let.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
