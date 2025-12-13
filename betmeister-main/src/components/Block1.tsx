import { useEffect, useState } from 'react'
import img2 from '../assets/block1.png'
import img from '../assets/kurzy-1365x2048.jpg.png'

export function Block1() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="block1" className="w-full bg-white">
    <section className="w-full bg-white">
      <div className="max-w-[1252px] mx-auto px-4">
        <div className="flex flex-wrap lg:flex-nowrap justify-between py-20">
          {/* LEFT TEXT */}
          <div className="w-full lg:w-[600px] flex flex-col gap-6">
            <h1 className="font-extrabold text-[36px] md:text-[52px] leading-[1.1] px-3">
                   Данные вместо случая.
            </h1>

            <h1 
              className={`
                inline-block px-3 font-extrabold text-[36px] md:text-[52px] leading-[1.1]
                transition-all duration-500 ease-out
                ${active ? 'bg-[#C8A2D6]' : 'bg-transparent'}
              `}
            >
              Выигрыши вместо прогнозов.
            </h1>

            <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.7] max-w-[520px] mt-2">
              Присоединяйся к закрытой группе экспертов, которые предоставят тебе
              ставки с высокой уверенностью — на основе данных, аналитики и
              актуальной информации. Будь ты новичок или опытный игрок,
              мы здесь для тебя.
            </p>

          <button
  className="
    flex items-center gap-3
    bg-black text-white
    font-semibold rounded-full px-10 py-4 mt-6
    hover:bg-[#C8A2D6]
  "
>
  Присоединиться к победителям
  <svg viewBox='0 0 448 512' width='14' fill='currentColor'>
    <path d='M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z' />
  </svg> 
</button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full lg:w-[480px] h-[600px] md:h-[650px] mt-12 lg:mt-0">
            <img
              src={img}
              alt="photo"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <img
              src={img2}
              alt="photo small"
              className="absolute max-w-[45%] rounded-lg shadow-2xl hidden sm:block"
              style={{
                bottom: "-18%",
                left: "-15%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
 </section>
  );
}