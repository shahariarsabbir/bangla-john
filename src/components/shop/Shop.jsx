import React, { useState } from 'react'
import Products from './products/Products'
import Cart from './cart/Cart'
import CartContent from './cart/CartContent'
import { addTo } from '../../utility/fakedata'

const Shop = () => {
	const [cart, setCart] = useState([])

	const handleAddToCart = (selectedProduct) => {
		const exists = cart.find((product) => product.id === selectedProduct.id)

		if (!exists) {
			const newProduct = {
				...selectedProduct,
				quantity: 1,
			}

			setCart([...cart, newProduct])
			console.log('Added:', newProduct)
			addTo(selectedProduct.id)
		} else {
			const rest = cart.filter((product) => product.id !== selectedProduct.id)
			const updatedProduct = {
				...exists,
				quantity: exists.quantity + 1,
			}

			setCart([...rest, updatedProduct])
			console.log('Updated:', updatedProduct)
			addTo(selectedProduct.id)
		}
	}
	return (
		<div className="pt-16">
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-4/5">
					<Products handleAddToCart={handleAddToCart} />
				</div>

				<div className="w-full lg:w-1/5">
					<div className="hidden lg:block sticky top-16 bg-orange-200 min-h-[calc(100vh-4rem)]">
						<CartContent cart={cart} />
					</div>

					{/* Mobile drawer */}
					<div className="lg:hidden">
						<Cart cart={cart} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Shop
