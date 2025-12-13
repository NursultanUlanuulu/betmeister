

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 sm:px-8 lg:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Горизонтальная линия, как на макете */}
        <hr className="border-gray-200 mt-0 mb-6" />

        <div className="text-sm text-gray-500 leading-relaxed">
          {/* Copyright */}
          <p className="mb-2">
            Copyright: © 2025 betmeister.eu. Все права защищены.
          </p>
          
          {/* Предупреждение */}
          <p className="mt-4 text-xs">
            Предупреждение: Советы не являются инвестиционной рекомендацией. Ставки связаны с риском и могут привести к потере вклада. Услуга предназначена только для лиц старше 18 лет.
          </p>
        </div>
        
        {/* Стрелка "Наверх" (имитация элемента, видимого на макете) */}
        <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8">
            <button className="w-10 h-10 bg-white border border-gray-300 shadow-md rounded flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;