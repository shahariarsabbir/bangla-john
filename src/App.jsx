import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './layout/Main.jsx'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import Manageinventory from './components/manageInventory/Manageinventory'
import OrderReview from './components/orderReview/OrderReview'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			children: [
				{ index: true, element: <Home /> },
				{ path: 'home', element: <Home /> },
				{ path: 'shop', element: <Shop /> },
				{ path: 'manage-inventory', element: <Manageinventory /> },
				{ path: 'order-review', element: <OrderReview /> },
			],
		},
	])
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
