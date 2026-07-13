import { createBrowserRouter } from 'react-router-dom'

import Main from '../Main/Main'
import Home from '../../components/home/Home'
import Shop from '../../components/shop/Shop'
import Manageinventory from '../../components/manageInventory/Manageinventory'
import OrderReview from '../../components/orderReview/OrderReview'
import NotFound from '../../shared/NotFound/NotFound'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'shop',
				element: <Shop />,
			},
			{
				path: 'manage-inventory',
				element: <Manageinventory />,
			},
			{
				path: 'order-review',
				element: <OrderReview />,
				loader: async () => {
					const response = await fetch(
						`${import.meta.env.BASE_URL}product.json`,
					)

					if (!response.ok) {
						throw new Error('Failed to load products')
					}

					return response.json()
				},
			},
			{
				path: '*',
				element: <NotFound />,
			},
		],
	},
])

export default Router
