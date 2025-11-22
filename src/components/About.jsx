const About = () => {
	return (
		<section className='mb-10'>
			<div className='container mx-auto'>
				<h1 className='text-3xl font-bold mb-5 lowercase'>О компании</h1>
				<div className='flex items-center justify-between flex-wrap'>
					<img
						className='max-w-[600px]'
						src='/images/team.jpg'
						alt='команда компании'
					/>
					<div className='max-w-[600px]'>
						<h2 className='text-2xl font-[600] mb-4'>О компании</h2>
						<p>
							С 2009 года мы продаем компьютерную технику в Узбекистане. Мы -
							официальные партнеры многих международных компаний, что
							гарантирует качество нашей продукции.
							<br />
							<br />
							Наши опытные сотрудники всегда готовы помочь с выбором техники. В
							нашем шоуруме представлен широкий ассортимент товаров.
							<br />
							<br />
							Мы предлагаем доставку по всей республике и поддерживаем все виды
							оплаты для вашего удобства.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
