import { Menu, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Lyon Actualités</h1>
                <p className="text-xs text-gray-500">Info en continu</p>
              </div>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-gray-900 hover:text-red-600 transition-colors">Accueil</a>
            <a href="#actualites" className="text-gray-600 hover:text-red-600 transition-colors">Actualités</a>
            <a href="#galerie" className="text-gray-600 hover:text-red-600 transition-colors">Galerie</a>
            <a href="#videos" className="text-gray-600 hover:text-red-600 transition-colors">Vidéos</a>
            <a href="#temoignages" className="text-gray-600 hover:text-red-600 transition-colors">Témoignages</a>
          </nav>

          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
