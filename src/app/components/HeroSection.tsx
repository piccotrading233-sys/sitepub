import { Clock, AlertTriangle } from 'lucide-react';
import { Badge } from './ui/badge';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1562546015-561104102e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBsb3Npb24lMjBmaXJlJTIwc21va2V8ZW58MXx8fHwxNzY2NDU5OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Explosion"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="destructive" className="flex items-center gap-1.5">
              <AlertTriangle className="w-3 h-3" />
              ALERTE INFO
            </Badge>
            <div className="flex items-center gap-1.5 text-sm text-gray-300">
              <Clock className="w-4 h-4" />
              <span>Mise à jour il y a 2 heures</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Explosion dans une usine chimique à Lyon
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Une violente explosion s'est produite ce matin dans une usine du secteur sud de Lyon. 
            Les secours sont toujours sur place. Un périmètre de sécurité a été établi.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Dernières informations
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium backdrop-blur-sm transition-colors">
              Voir la galerie
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}