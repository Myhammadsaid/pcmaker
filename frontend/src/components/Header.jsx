import { useEffect, useState } from 'react'
import { BsCircle } from 'react-icons/bs'
import { CiHeadphones, CiHeart, CiShoppingCart } from 'react-icons/ci'
import { IoSearchOutline } from 'react-icons/io5'
import { RxPerson } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { products } from '../data/products.data'

const Header = () => {
	const [search, setSearch] = useState('')

	useEffect(() => {
		const items = products.filter(item =>
			item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
		)
		console.log(items)
	}, [search])

	return (
		<header className='py-4'>
			<div className='container mx-auto flex items-center justify-between'>
				<h1 className='text-2xl'>
					<Link to={'/'}>
						<span className='text-4xl'>P</span>c{' '}
						<span className='text-4xl'>M</span>aker
					</Link>
				</h1>
				<form className='relative w-full h-max-[40px] max-w-[400px]'>
					<input
						onChange={e => setSearch(e.target.value)}
						className='w-full h-[38px] border py-1 px-3 border-[#dbdbdb]'
						type='search'
						placeholder='Поиск товаров...'
						value={search}
					/>
					<button className='absolute right-2.5 top-0 bottom-0' type='button'>
						<IoSearchOutline size={18} color='#9c9c9c' />
					</button>
				</form>
				<ul className='flex items-center justify-center gap-6 **:flex **:flex-col **:items-center **:justify-center'>
					<li>
						<Link to='/favorite'>
							<CiHeart size={26} />
							<span className='text-[12px]'>Избранное</span>
						</Link>
					</li>
					<li>
						<Link to='/cart'>
							<CiShoppingCart size={26} />
							<span className='text-[12px]'>Корзина</span>
						</Link>
					</li>
					<li>
						<Link to='/contact'>
							<CiHeadphones size={26} />
							<span className='text-[12px]'>Контакты</span>
						</Link>
					</li>
					<li>
						<Link to=''>
							<BsCircle size={21} />
							<span className='text-[12px]'>Тема</span>
						</Link>
					</li>
					<li>
						<Link to='/account'>
							<RxPerson size={22} />
							<span className='text-[12px]'>Аккаунт</span>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
