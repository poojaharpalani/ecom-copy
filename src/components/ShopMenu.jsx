import { Link } from 'react-router-dom';
// ShopMenu.jsx
import { X } from "lucide-react";

export default function ShopMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-all duration-300 shadow-lg
          ${isOpen ? "w-64 sm:w-full opacity-100" : "w-0 opacity-0"} 
          sm:max-w-screen md:max-w-md
          ${isOpen ? "sm:block" : "hidden"}
          ${isOpen ? "sm:translate-x-0" : "sm:-translate-x-full"}
          ${isOpen ? "sm:opacity-100" : "sm:opacity-0"}
        `}
      >
        <div className="p-8  ">
          <div className="flex justify-start">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-6">
            <ul className="space-y-6  font-atacama  text-[#34474A]">
              <li>
                <Link
                  href="/earrings"
                  className="block py-2 text-2xl hover:text-gray-900 transition border-b border-transparent hover:border-gray-200"
                >
                  EARRINGS
                </Link>
              </li>
              <li>
                <Link
                  href="/necklaces"
                  className="block py-2 text-2xl hover:text-gray-900 transition border-b border-transparent hover:border-gray-200"
                >
                  NECKLACES
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-2xl hover:text-gray-900 transition border-b border-transparent hover:border-gray-200"
                >
                  BRACELETS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-2xl hover:text-gray-900 transition border-b border-transparent hover:border-gray-200"
                >
                  RINGS
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-2xl hover:text-gray-900 transition border-b border-transparent hover:border-gray-200"
                >
                  READY TO SHIP
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 text-2xl hover:text-gray-900 transition border-b border-transparent hover:border-gray-200"
                >
                  ONE OF A KIND
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="block py-2 text-2xl hover:text-gray-900 transition border-b border-transparent hover:border-gray-200"
                >
                  GIFT CARDS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
    </>
  );
}
