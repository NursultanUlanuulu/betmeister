import block2img2 from '../assets/2.jpeg'
import block2img from '../assets/tips-scaled.jpg'

export function Block2() {
  return (
    // Негизги контейнер: кара фон, жогорку маржин, ак текст
    <section className='bg-black mt-[200px] text-white  h-190 w-100% mx-auto pt-15'>
      {/* Мазмунду борборлоштуруу жана туурасын чектөө */}
      <div className='max-w-[1200px]  mx-50  grid  lg:grid-cols-2 gap-5 items-center mt-20'>
        
        {/* Сол бөлүк: Сүрөт жана скриншот */}
        <div className='relative flex justify-center lg:justify-start'>
          {/* Чоң сүрөт */}
          <img 
            src={block2img} 
            alt="Мурунку сүрөт" 
            className='w-lg max-w-lg lg:max-w-none rounded-lg'
          />
          
          {/* Скриншот: чоң сүрөттүн үстүнө позицияланган */}
          <img 
            src={block2img2} 
            alt="Ставка скриншоту" 
            // Абсолюттук позициялоо жана көлөкө кошуу
            className='absolute w-[70%] max-w-[290px] top-[55%] left-1/2 transform -translate-x-1/2 lg:left-110  lg:top-[85%] shadow-2xl rounded-lg border-2 border-gray-700'
          />
        </div>

        {/* Оң бөлүк: Текст */}
        <div className='mt-20 lg:mt-0 ml-25'>
          {/* Башкы аталыш */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8'>
            První ratingový systém v Česku
          </h1>

          {/* Негизги тексттер */}
          <p className='text-lg mb-4'>
            Sázení se dá měřit. My to děláme pomocí čísel.
          </p>

          <p className='text-lg mb-8'>
            Naše vlastní metodika přiděluje sportovním událostem ratingy (AAA–D) podle datové analýzy, pravděpodobnosti a hodnoty kurzu. Žádné tipy podle pocitu – jen ověřená čísla a modely, které mají výsledky.
          </p>

          {/* Жыйынтыктоочу сүйлөм */}
          <p className='text-xl font-extrabold'>
            Rating = náhoda. Rating = matematika.
          </p>
        </div>
      </div>
    </section>
  );
}






