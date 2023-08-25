import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    const backgroundColor = '#151823'
  return (
    <header className="top-0 left-0 w-full bg-black  shadow-md p-4" id="header" style={{ backgroundColor }}>
        <nav  className="flex justify-between items-center h-10 p-4 max-w-7xl mx-auto px-3">
        <Link href="/" className="nav__logo">
            <img src="assets/img/logo11.png" alt="Zanime" className="nav__logo-img" />
        </Link>

        <div className="nav__menu" id="nav-menu">
            <ul className="flex gap-x-7">
            <li className="nav__item">
                <a href="" className="text-white transition duration-300 ease-in-out">Home</a>
            </li>

            <li className="nav__item">
                <Link to="/grid" className="text-white transition duration-300 ease-in-out">Wallpapers</Link>
            </li>

            <li className="nav__item">
                <a href="" className="text-white transition duration-300 ease-in-out">Anime Collection</a>
            </li>

            <li className="nav__item">
                <a href="/collection.html" className="text-white transition duration-300 ease-in-out">DCU Collection</a>
            </li>

            <li className="nav__item">
                <a href="" className="text-white transition duration-300 ease-in-out">Marvel Collection</a>
            </li>
            <li className="nav__item">
                <a href="" className="text-white transition duration-300 ease-in-out">Cart</a>
            </li>

            </ul>
        </div>
        </nav>
    </header>
  )
}

export default Navbar