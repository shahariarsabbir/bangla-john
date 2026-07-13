import './App.css'
import { RouterProvider } from 'react-router-dom'
import Router from './layout/Route/Route'

function App({ children }) {
	return (
		<>
			<RouterProvider router={Router}>{children}</RouterProvider>
		</>
	)
}

export default App
