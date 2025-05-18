import React from "react"

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center   items-center h-screen bg-gray-900 space-y-6">
      <h1 className="text-5xl font-bold text-white">404</h1>
      <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
      <h2 className="text-3xl font-bold text-white">
        Visit our{" "}
        <a href="/" className="text-blue-300">
          Home Page
        </a>
      </h2>
    </div>
  )
}

export default NotFound
