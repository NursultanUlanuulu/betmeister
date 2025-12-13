import block2img2 from '../assets/2.jpeg'
import block2img from '../assets/tips-scaled.jpg'

export function Block2() {
  return (
    <section id="block2" className='bg-black mt-[200px] text-white h-190 w-100% mx-auto pt-15 font-dm-sans'>
    <section className='bg-black mt-[200px] text-white h-190 w-100% mx-auto pt-15 font-dm-sans'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className='max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-10 lg:py-20'>
          
          {/* Левая часть: Изображение - центрируем в левой колонке */}
          <div className='relative flex justify-center lg:justify-start'>
            <div className='relative w-full flex justify-center -mt-8 lg:-mt-12'>
              {/* Центрируем изображение в левой колонке и увеличиваем */}
              <img 
                src={block2img} 
                alt="Предыдущее изображение" 
                className='max-w-[calc(100%-140px)] lg:max-w-[calc(100%-160px)] rounded-lg shadow-lg mx-auto lg:mx-0'
              />
              
              {/* Скриншот остается поверх - также поднимаем вверх */}
              <img 
                src={block2img2} 
                alt="Скриншот ставки" 
                className='absolute w-[70%] max-w-[290px] top-[50%] left-1/2 transform -translate-x-1/2 lg:left-[60%] lg:top-[80%] shadow-2xl rounded-lg border-2 border-gray-700 lg:-translate-x-16'
              />
            </div>
          </div>

          {/* Правая часть: Текст */}
          <div className='mt-16 lg:mt-0 lg:pl-8 xl:pl-12'>
            {/* Основной заголовок - уменьшили на 1 размер */}
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 leading-tight'>
              Первая рейтинговая система в Чехии
            </h1>

            <div className='space-y-4 lg:space-y-6'>
              <p className='text-lg lg:text-xl text-gray-300'>
                Ставки можно измерить. Мы делаем это с помощью цифр.
              </p>

              <p className='text-lg lg:text-xl text-gray-300'>
                Наша собственная методология присваивает спортивным событиям рейтинги (AAA–D) на основе анализа данных, вероятности и ценности коэффициентов. Никаких прогнозов по наитию — только проверенные цифры и модели, которые дают результаты.
              </p>

              {/* Заключительная фраза - уменьшили на 1 размер */}
              <p className='text-lg lg:text-xl font-extrabold text-white mt-6 lg:mt-8'>
                Рейтинг ≠ случайность. Рейтинг = математика.
              </p>
            </div>
          </div>
        </div>
      </div>
     </section>
    </section>
  );
}
