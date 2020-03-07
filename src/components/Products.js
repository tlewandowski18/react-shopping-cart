import React, {useContext} from 'react';

//context
import { ProductContext } from '../contexts/ProductContext'

// Components
import Product from './Product';
import { fromEventPattern } from 'rxjs';

const Products = props => {
	const { products, addItem } = useContext(ProductContext)
	
	return (
		<div className="products-container">
			{products.map(item => (
				<Product
					key={item.id}
					product={item}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
