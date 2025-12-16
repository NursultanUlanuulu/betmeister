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
      <div className="max-w-[1252px] mx-auto px-6 z-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between py-28">
          
         
          <div className="w-full lg:w-[600px] flex flex-col">
            
            <h1 className="font-extrabold text-[40px] md:text-[56px] leading-[1.15]">
              Data místo náhody.
            </h1>

            <h1
              className={`
                inline-block
                font-extrabold text-[40px] md:text-[56px] leading-[1.15]
                mt-2
                px-4 py-1
                transition-all duration-500 ease-out
                ${active ? 'bg-[#C8A2D6]' : 'bg-transparent'}
              `}
            >
              Výhry místo tipů.
            </h1>

            <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.7] max-w-[520px] mt-6">
              Přidej se k uzavřené skupině expertů, kteří ti doručí sázky s vysokou důvěrou – 
              na základě dat, analýz a aktuálních informací. Ať jsi začátečník nebo zkušený 
              sázkař, jsme tu pro tebe.
            </p>

         
            <button
              className="
                flex items-center justify-center gap-4
                bg-black text-white
                text-[16px] md:text-[17px]
                font-semibold
                rounded-full
                px-14 py-5
                mt-10
                w-fit
                min-w-[260px]
                hover:bg-[#C8A2D6]
                transition-colors
              "
            >
              Přidej se k vítězům
              <svg viewBox="0 0 448 512" width="14" fill="currentColor">
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
              </svg>
            </button>
          </div>

          
          <div className="relative w-full lg:w-[480px] h-[600px] md:h-[650px] mt-16 lg:mt-0">
            <img
              src={img}
              alt="photo"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />

            <img
              src={img2}
              alt="photo small"
              className="absolute max-w-[45%] rounded-xl shadow-2xl hidden sm:block"
              style={{
                bottom: '-18%',
                left: '-15%',
              }}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
