import PropTypes from 'prop-types';

const Product = (props) => {
	return (
		<div className='product' style={{ backgroundColor: props.bgColor }}>
			<p className='product--name'>{props.name}</p>
			<p className='product--price'>{props.price}</p>
			<p className='product--category'>{props.category}</p>
		</div>
	);
};

Product.propTypes = {
	bgColor: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	category: PropTypes.string,
};

Product.defaultProps = {
	bgColor: '#ddd',
	name: 'Produs inexistent',
	price: 'Pret inexistent',
	category: 'Categorie inexistenta',
};

export default Product;
