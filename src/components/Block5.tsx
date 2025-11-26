// Сүрөт файлдарынын жолун (path) тууралаңыз, анткени бул жерде мен аларды мисал катары колдонуп жатам.
import form3 from "../assets/form3.jpeg";
import icon from "../assets/arrow.svg";
import betmeister from "../assets/betmeister-scaled.jpg";

const Block5 = () => {
  return (
    <div className="bg-black text-white h-300 pt-40">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
            VIP мүчөлүк
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3">
              1. Вариант – Айлык мүчөлүк
            </h2>
            <h3 className="text-xl font-semibold mb-2">Эмнеге ээ болосуз:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>**VIP каналга 30 күн бою кирүү**</li>
              <li>Күн сайын деталдуу талдоосу бар матчтар боюнча кеңештер</li>
              <li>Рейтинг системасын колдонуу ( škála AAA-D)</li>
              <li>Ыкчам, түшүнүктүү жана жеткиликтүү маалымат</li>
            </ul>
          </div>

          <hr className="border-gray-700 my-8" />

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-3">
              2. Вариант – Бир жолку кеңеш
            </h2>
            <h3 className="text-xl font-semibold mb-2">Эмнеге ээ болосуз:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
              <li>
                **Бир жолку кеңеш** – деталдуу талдоосу жана рейтинги бар
                премиум кеңеш
              </li>
            </ul>
          </div>

          <hr className="border-gray-700 my-8" />

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">Эмне үчүн Telegram?</h2>
            <p className="text-gray-300">
              Сиз эч жакка кирүүнүн кереги жок. Бардык кеңештер түз Telegram
              аркылуу келет – тез, түшүнүктүү жана кечиктирилбестен.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold mb-3">
              Төлөгөндөн кийин эмне алам?
            </h2>
            <p className="text-gray-300">
              Шилтеме жана QR коду **төлөгөндөн кийин дароо** көрсөтүлөт.
            </p>
          </div>

          <div className="space-y-4">
            <button className="flex justify-between items-center w-full max-w-sm px-6 py-4 bg-white text-black font-bold text-lg rounded-lg shadow-xl hover:bg-gray-200 transition duration-300">
              Айлык мүчөлүктү $14.999
              <img src={icon} alt="Жебе" className="w-5 h-5 ml-4" />
            </button>

            <button className="flex justify-between items-center w-full max-w-sm px-6 py-4 bg-white text-black font-bold text-lg rounded-lg shadow-xl hover:bg-gray-200 transition duration-300">
              Бир жолку кеңешти $999
              <img src={icon} alt="Жебе" className="w-5 h-5 ml-4" />
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={betmeister}
              alt="Betmeister картасы"
              className="rounded-xl shadow-2xl w-full max-w-lg object-cover"
            />
            <div>
              <img
                src={form3}
                alt="Кеңештин мисалы"
                className="absolute w-full max-w-sm md:max-w-md lg:max-w-xs xl:max-w-75 left-80 top-1/2.1 transform -translate-y-1/4 rounded-xl  border-4 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block5;
