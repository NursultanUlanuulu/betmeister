

const Block7 = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 lg:px-20 font-sans border-l border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Колонка 1: Логотип и слоган */}
          <div className="md:col-span-3">
            {/* Логотип betmeister с точкой */}
            <div className="text-3xl font-bold text-[#2e1a5e] tracking-tight relative inline-block">
              betmeister
              {/* Финальная корректировка положения точки над i */}
              <span className="absolute top-1 right-[2.85rem] w-1.5 h-1.5 bg-[#ff5e1e] rounded-full"></span>
            </div>
            {/* Слоган: Данные вместо случайности. Выигрыши вместо предположений. */}
            <p className="text-gray-600 mt-6 leading-relaxed max-w-[200px]">
              Данные вместо случайности. Выигрыши вместо предположений.
            </p>
          </div>

          {/* Колонка 2: Главная */}
          <div className="md:col-span-2 md:pl-8">
            <a 
              href="#" 
              className="relative text-gray-900 font-medium group transition-colors hover:text-[#2e1a5e]"
            >
              Главная
              {/* Ховер-эффект: Подчеркивание */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2e1a5e] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Колонка 3: Как это работает + Условия использования */}
          <div className="md:col-span-2 flex flex-col space-y-8">
            <a 
              href="#" 
              className="relative w-fit text-gray-900 font-medium group transition-colors hover:text-[#2e1a5e]"
            >
              Как это работает
              {/* Ховер-эффект: Подчеркивание */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2e1a5e] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="#" 
              className="relative w-fit text-gray-900 font-medium group transition-colors hover:text-[#2e1a5e]"
            >
              Условия использования
              {/* Ховер-эффект: Подчеркивание */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2e1a5e] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Колонка 4: Членство */}
          <div className="md:col-span-2">
            <a 
              href="#" 
              className="relative text-gray-900 font-medium group transition-colors hover:text-[#2e1a5e]"
            >
              Членство
              {/* Ховер-эффект: Подчеркивание */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2e1a5e] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Колонка 5: Наша система */}
          <div className="md:col-span-3">
            <h3 className="text-gray-900 font-medium mb-6">
              Наша система
            </h3>
            <p className="text-gray-500 text-sm leading-7">
              Всё наглядно, вовремя и без лишнего. Каждая рекомендация имеет голову и хвост — никаких «может быть, сработает».
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Block7;