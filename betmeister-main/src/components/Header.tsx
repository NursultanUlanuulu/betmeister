import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../store/Store'
import logo from '/bet.png' 

export function Header() {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const membershipItem = {
      id: 1,
      name: 'VIP членство – 1 месяц',
      price: 14999,
      originalPrice: 16999,
      description: 'Получите ежемесячно доступ к VIP каналу Telegram',
    }
    dispatch(addToCart(membershipItem))
  }

  const scrollToBlock = blockId => {
    const element = document.getElementById(blockId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm'>
      <div className='flex max-w-[1200px] py-4 m-auto items-center h-[50px] px-4'>
        
        <div className='flex items-center gap-12 flex-1'>
          <div>
            <Link to='/'>
              <img src={logo} width={200} alt='Betmeister Logo' />
            </Link>
          </div>

          <nav className='hidden lg:block'>
            <ul className='flex gap-8 items-center text-500 text-[16px]'>
              <li>
                <button
                  onClick={() => scrollToBlock('block1')}
                  className='cursor-pointer transition duration-300 hover:text-[#C8A2D6] bg-transparent border-none text-inherit'
                >
                  Домой
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToBlock('block2')}
                  className='cursor-pointer transition duration-300 hover:text-[#C8A2D6] bg-transparent border-none text-inherit'
                >
                  Как это работает
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToBlock('block5')}
                  className='cursor-pointer transition duration-300 hover:text-[#C8A2D6] bg-transparent border-none text-inherit'
                >
                  Членство
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className='ml-8'>
          <Link to='/cart'>
            <button
              onClick={handleAddToCart}
              className='bg-[#16171C] text-white rounded-[100px] px-5 py-2 text-[15px] 
                         transition duration-300 whitespace-nowrap
                         hover:bg-[#C8A2D6] hover:shadow-lg'
            >
              Добавить членство в корзину
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}