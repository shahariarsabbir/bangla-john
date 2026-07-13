import React, { useEffect, useState } from 'react'
import Product from './Product'

const Products = ({ handleAddToCart }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch('product.json')
			.then((res) => res.json())
			.then((data) => setProducts(data))
	}, [])

	return (
		<div className="py-5 px-4 lg:px-6 xl:px-10">
			<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
				{products.map((product) => (
					<Product
						key={product.id}
						product={product}
						handleAddToCart={handleAddToCart}
					/>
				))}
			</div>
		</div>
	)
}

export default Products
