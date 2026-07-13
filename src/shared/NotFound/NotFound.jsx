import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-base-200 px-5">
			<div className="text-center max-w-lg">
				<h1 className="text-8xl md:text-9xl font-extrabold text-warning">
					404
				</h1>

				<h2 className="mt-4 text-3xl md:text-5xl font-bold text-base-content">
					Page Not Found
				</h2>

				<p className="mt-5 text-base md:text-lg text-base-content/70">
					Sorry, the page you are looking for doesn't exist or has been moved.
					Please check the URL or return to the homepage.
				</p>

				<div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
					<Link to="/" className="btn btn-warning">
						Go Home
					</Link>

					<button
						onClick={() => window.history.back()}
						className="btn btn-outline"
					>
						Go Back
					</button>
				</div>
			</div>
		</div>
	)
}

export default NotFound
