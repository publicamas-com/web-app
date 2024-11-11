import React from 'react';

export function Header() {
  return (
    <div className="relative bg-publicamas-header">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden"></div>
      <div aria-hidden="true" className="absolute inset-0 bg-publicamas-header opacity-90"></div>
      <header className="relative z-10">
        <nav aria-label="Top">
          <div className="bg-publicamas-header">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

              {/* Logo */}
              <a href="/" className="flex items-center space-x-2">
                {/*<img src="/logo.png" alt="Logo" className="h-8 w-auto" />*/}
                <span className="text-lg font-bold text-gray-50">Publicamas</span>
              </a>

              {/* Ubicación */}
              {/*<div className="flex items-center space-x-2 text-sm text-gray-700">
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 0C6.142 0 3 3.142 3 7c0 1.911 1.464 4.882 4.391 8.387l2.605 2.934 2.605-2.934C15.536 11.882 17 8.911 17 7c0-3.858-3.142-7-7-7zm0 10a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
                <span>Enviar a Buenos Aires 1744</span>
              </div>*/}

              {/* Formulario de búsqueda */}
              <form className="flex-1 mx-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar productos, marcas y más..."
                    className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <button type="submit" className="absolute inset-y-0 right-0 flex items-center px-3">
                    <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M17.707 16.293a8 8 0 111.414-1.414l4.243 4.242a1 1 0 01-1.414 1.415l-4.243-4.243z" />
                    </svg>
                  </button>
                </div>
              </form>

              {/* Enlaces de usuario */}
              <div className="flex items-center space-x-6">
                <a href="/sign-in" className="text-sm font-medium text-publicamas-font hover:text-gray-300">Iniciar sesión</a>
                <a href="/sign-up" className="text-sm font-medium text-publicamas-font hover:text-gray-300">Mis compras</a>
                <a href="/cart" className="text-sm font-medium text-publicamas-font hover:text-gray-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h15l-1.5 9h-15z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
