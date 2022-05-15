import Product from '../product.js';

const Task1 = () => {
	return (
		<section className='task'>
			<p className='task--heading'>Exercitiu 1</p>
			<div className='products--container'>
				<div className='products--head'>
					<p>Product</p>
					<p>Price</p>
					<p>Category</p>
				</div>
				<Product
					bgColor='#D4DFA9'
					name='Bananas'
					price={10}
					category='Fruits'
				/>
				<Product bgColor='#A9B2DF' name='Beer' price={4} />
				<Product
					bgColor='#DFA9BD'
					name='Cherries'
					price={350}
					category='Fruits'
				/>
			</div>
		</section>
	);
};

export default Task1;
