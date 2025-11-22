import { BsCircle } from 'react-icons/bs'
import { CiHeadphones, CiHeart, CiShoppingCart } from 'react-icons/ci'
import { IoSearchOutline } from 'react-icons/io5'
import { RxPerson } from 'react-icons/rx'

const Header = () => {
	return (
		<header className='py-4'>
			<div className='container mx-auto flex items-center justify-between'>
				<h1 className='text-2xl'>
					<span className='text-4xl'>P</span>c{' '}
					<span className='text-4xl'>M</span>aker
				</h1>
				<form className='relative w-full h-max-[40px] max-w-[400px]'>
					<input
						className='w-full h-[38px] border-[1px] py-1 px-3 border-[#dbdbdb]'
						type='search'
						placeholder='Поиск товаров...'
					/>
					<button
						className='absolute right-[10px] top-0 bottom-0'
						type='button'
					>
						<IoSearchOutline size={18} color='#9c9c9c' />
					</button>
				</form>
				<ul className='flex items-center justify-center gap-6 [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center'>
					<li>
						<CiHeart size={26} />
						<span className='text-[12px]'>Избранное</span>
					</li>
					<li>
						<CiShoppingCart size={26} />
						<span className='text-[12px]'>Корзина</span>
					</li>
					<li>
						<CiHeadphones size={26} />
						<span className='text-[12px]'>Контакты</span>
					</li>
					<li>
						<BsCircle size={21} />
						<span className='text-[12px]'>Тема</span>
					</li>
					<li>
						<RxPerson size={22} />
						<span className='text-[12px]'>Аккаунт</span>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
