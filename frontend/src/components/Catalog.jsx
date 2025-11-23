const Catalog = () => {
	return (
		<section className='mb-10'>
			<div className='container mx-auto'>
				<h1 className='text-3xl font-bold mb-5 lowercase'>Комплектующие</h1>
				<div className='flex items-center justify-center gap-5 flex-wrap'>
					<div className='w-full max-w-[320px] p-3 bg-[#f7f7f7]'>
						<img
							src='https://files.ox-sys.com/cache/original/image/d3/23/48/d32348b36c863e6fbcec18f69f0d2274d898db0eceda1675e89fd0ed08b7db0c.png'
							alt=''
						/>
						<h1 className='text-center font-medium'>Клавиатура</h1>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Catalog
