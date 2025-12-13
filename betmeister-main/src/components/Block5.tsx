import { useDispatch } from 'react-redux';
import { addToCart } from '../store/Store';
import form3 from "../assets/form3.jpeg";
import icon from "../assets/arrow.svg";
import betmeister from "../assets/betmeister-scaled.jpg";

const Block5 = () => {
  const dispatch = useDispatch();

  const handleAddMonthlyMembership = () => {
    const membershipItem = {
      id: 1,
      name: 'VIP členství – 1 měsíc',
      price: 14999,
      originalPrice: 18999,
      description: 'Доступ в VIP канал Telegram на 30 дней',
      quantity: 1,
      type: 'monthly'
    };
    dispatch(addToCart(membershipItem));
    alert('Товар добавлен в корзину!');
  };

  const handleAddSinglePrediction = () => {
    const predictionItem = {
      id: 2,
      name: 'Rozový prognóza',
      price: 999,
      originalPrice: 1499,
      description: 'Разовый прогноз с подробным разбором и рейтингом',
      quantity: 1,
      type: 'single'
    };
    dispatch(addToCart(predictionItem));
    alert('Товар добавлен в корзину!');
  };

  return (
    <div id="block5" className="bg-black text-white pt-48 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-12">
              VIP членство
            </h1>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                1. Вариант – Месячное членство
              </h2>
              <h3 className="text-2xl font-semibold mb-4">
                Что получишь:
              </h3>
              <ul className="list-disc list-inside space-y-3 ml-4 text-gray-300 text-lg">
                <li className="font-bold text-white">**Доступ в VIP канал Telegram на 30 дней**</li>
                <li>Ежедневные прогнозы на матчи с подробными разборами</li>
                <li>Использование рейтинговой системы (шкала AAA-D)</li>
                <li>Понятная, своевременная и доступная информация</li>
              </ul>
            </div>

            <hr className="border-gray-700 my-10" />

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
                2. Вариант – Разовый прогноз
              </h2>
              <h3 className="text-2xl font-semibold mb-4">
                Что получишь:
              </h3>
              <ul className="list-disc list-inside space-y-3 ml-4 text-gray-300 text-lg">
                <li className="font-bold text-white">
                  **Разовый прогноз** – премиум прогноз с подробным разбором и рейтингом
                </li>
              </ul>
            </div>

            <hr className="border-gray-700 my-10" />

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Почему Telegram?
              </h2>
              <p className="text-gray-300 text-lg">
                Тебе не нужно нигде регистрироваться. Все прогнозы приходят прямо в телефон через Telegram – вовремя, понятно и без задержек.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-4">
                Что я получу после покупки?
              </h2>
              <p className="text-gray-300 text-lg">
                Ссылка и QR-код будут автоматически показаны сразу после оплаты.
              </p>
            </div>

            <div className="space-y-6">
              <button 
                onClick={handleAddMonthlyMembership}
                className="flex justify-between items-center w-full max-w-md px-8 py-5 bg-white text-black font-bold text-xl rounded-xl shadow-xl hover:bg-[#C8A2D6] transition duration-300 transform hover:scale-[1.02]"
              >
                Купить месячное членство за 14.999 Kč
                <img src={icon} alt="Стрелка" className="w-6 h-6 ml-4" />
              </button>

              <button 
                onClick={handleAddSinglePrediction}
                className="flex justify-between items-center w-full max-w-md px-8 py-5 bg-white text-black font-bold text-xl rounded-xl shadow-xl hover:bg-[#C8A2D6] transition duration-300 transform hover:scale-[1.02]"
              >
                Купить разовый прогноз за 999 Kč
                <img src={icon} alt="Стрелка" className="w-6 h-6 ml-4" />
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <img
                src={betmeister}
                alt="Карта Betmeister"
                className="rounded-2xl shadow-2xl w-full max-w-xl object-cover"
              />
              <div>
                <img
                  src={form3}
                  alt="Пример прогноза"
                  className="absolute w-full max-w-md lg:max-w-sm xl:max-w-md 
                  left-48 top-1/2.1 transform -translate-y-1/4 rounded-xl border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Block5;