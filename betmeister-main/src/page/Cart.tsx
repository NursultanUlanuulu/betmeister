import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addToCart, decrementQuantity, incrementQuantity, removeItem } from '../store/Store'
import betmeister from "../assets/betmeister-scaled.jpg"

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  quantity: number;
  type: string;
}

interface CartState {
  items: CartItem[];
}

interface RootState {
  cart: CartState;
}

const CartContent = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotalSavings = () => {
    return cart.items.reduce((total, item) => {
      if (item.originalPrice) {
        return total + ((item.originalPrice - item.price) * item.quantity);
      }
      return total;
    }, 0);
  };

  if (cart.items.length === 0) {
    return (
      <div className="py-32 px-8 bg-gray-50 min-h-screen">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Корзина пуста</h2>
          <p className="text-gray-600 mb-8 text-lg">Добавьте товары в корзину</p>
          <Link 
            to="/" 
            className="inline-block bg-black text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-[1200px] mx-auto bg-white rounded-xl shadow-lg p-0">
        
        {/* Шапка с названиями колонок */}
        <div className="hidden md:flex justify-between border-b pb-4 mb-8 text-sm font-bold text-gray-700 uppercase mx-8 pt-8">
          <div className="w-1/2">ПРОДУКТ</div>
          <div className="w-1/4 text-right">ОБЩАЯ ЦЕНА</div>
          <div className="w-1/4 text-right">К ОПЛАТЕ</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Левая колонка: Товары */}
          <div className="lg:col-span-2 border-r pr-8 pl-8 pt-4">
            
            {cart.items.map((item) => (
              <div key={item.id} className="pb-8 border-b-2 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  
                  <div className="flex items-start md:w-2/3 mb-4 md:mb-0">
                    
                    {/* Изображение товара */}
                    <div className="w-[120px] h-[120px] mr-6 flex-shrink-0">
                      <div className="bg-gray-200 w-full h-full relative overflow-hidden rounded-lg">
                        <img 
                          src={betmeister} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Информация о товаре */}
                    <div className="flex-grow">
                      <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                      
                      {/* Цены */}
                      <div className="flex items-center gap-4 mb-3">
                        {item.originalPrice && item.originalPrice > item.price && (
                          <span className="text-gray-500 line-through text-lg">
                            {item.originalPrice.toLocaleString('cs-CZ')} Kč
                          </span>
                        )}
                        <span className="text-2xl font-bold text-black">
                          {item.price.toLocaleString('cs-CZ')} Kč
                        </span>
                      </div>

                      {/* Скидка */}
                      {item.originalPrice && item.originalPrice > item.price && (
                        <div className="bg-green-50 text-green-700 border border-green-700 font-medium px-4 py-2 text-sm inline-block rounded-md">
                          ВЫ ЭКОНОМИТЕ {((item.originalPrice - item.price) * item.quantity).toLocaleString('cs-CZ')} KČ
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Правая часть: Управление количеством */}
                  <div className="flex flex-col items-end md:w-1/3">

                    <div className="flex flex-col items-start w-full">
                      {/* Блок количества */}
                      <div className="flex items-center border border-gray-300 rounded-lg mb-3">
                        <button 
                          className="px-4 py-2 text-xl font-light hover:bg-gray-100 rounded-l-lg"
                          onClick={() => dispatch(decrementQuantity(item.id))}
                        >
                          -
                        </button>
                        <span className="px-6 py-2 border-x border-gray-300 font-medium text-lg">
                          {item.quantity}
                        </span>
                        <button 
                          className="px-4 py-2 text-xl font-light hover:bg-gray-100 rounded-r-lg"
                          onClick={() => dispatch(incrementQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                      
                      {/* Цена за штуку */}
                      <p className="text-gray-500 text-sm mb-3">
                        {item.price.toLocaleString('cs-CZ')} Kč / шт
                      </p>

                      {/* Кнопка удаления */}
                      <button 
                        className="text-sm text-gray-500 hover:text-red-500 underline"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Удалить товар
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}

            {/* Итог по товарам */}
            <div className="flex justify-end mt-8">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  ОБЩАЯ ЦЕНА: {calculateTotal().toLocaleString('cs-CZ')} Kč
                </div>
                {calculateTotalSavings() > 0 && (
                  <div className="text-lg text-green-700">
                    ВЫ ЭКОНОМИТЕ {calculateTotalSavings().toLocaleString('cs-CZ')} KČ
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Правая колонка: Итоги и оплата */}
          <div className="lg:col-span-1 bg-white pt-8 pl-8 pr-8 pb-8">
            <div className="sticky top-12">
                
              <h2 className="font-bold text-2xl mb-6 text-gray-800 uppercase border-b pb-4">
                К ОПЛАТЕ
              </h2>
              
              {/* Промокод */}
              <div className="relative mb-8">
                <select 
                  className="w-full border-2 border-gray-300 bg-white rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-base"
                  defaultValue=""
                >
                  <option value="" disabled>Добавить промокод</option>
                  <option value="discount10">Скидка 10%</option>
                  <option value="freeShipping">Бесплатная доставка</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                  <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
              
              {/* Итоговая сумма */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b">
                <span className="font-medium text-xl text-gray-700">Общая сумма</span>
                <span className="font-bold text-3xl">
                  {calculateTotal().toLocaleString('cs-CZ')} Kč
                </span>
              </div>
              
              {/* Кнопки оплаты */}
              <div className="space-y-4 pt-4">
                
                {/* Google Pay */}
                <button className="w-full bg-black text-white py-4 px-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors font-medium text-lg shadow-md">
                  <span className="font-bold text-2xl">G</span>
                  <span className="font-medium text-xl">Pay</span>
                </button>
                
                {/* Plate s ◎ link */}
                <button className="w-full bg-[#39ff14] text-black py-4 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-green-500 transition-colors font-bold text-lg shadow-md">
                  <span>Оплатить через</span>
                  <span className="text-2xl font-extrabold tracking-tight">◎ link</span>
                </button>
                
                {/* Разделитель */}
                <div className="text-center text-gray-500 py-2 text-sm">ИЛИ</div>
                
                {/* Переход к оформлению */}
                <Link 
                  to="/checkout" 
                  className="block w-full bg-black text-white py-4 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors text-center text-lg shadow-md"
                >
                  Перейти к оплате
                </Link>
                
                {/* Продолжить покупки */}
                <button 
                  onClick={() => navigate('/')}
                  className="block w-full bg-gray-100 text-gray-800 py-3 px-4 rounded-xl font-medium hover:bg-gray-200 transition-colors text-center border border-gray-300"
                >
                  Продолжить покупки
                </button>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CartContent;