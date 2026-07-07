import React from 'react'
import Products from './products/Products'
import Cart from './cart/Cart'

const Shop = () => {
	return (
		<div className="pt-16">
			<div className="flex">
				<div className="w-4/5">
					<Products />
				</div>

				<div className="w-1/5">
					<div className="sticky top-16 bg-orange-200 h-[calc(100vh-4rem)]">
						<Cart />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Shop
