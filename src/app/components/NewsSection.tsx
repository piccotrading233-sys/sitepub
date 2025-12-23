import { Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const newsArticles = [
  {
    id: 1,
    title: "Point de situation à 14h : le feu est maîtrisé",
    excerpt: "Les pompiers ont réussi à circonscrire l'incendie après 6 heures d'intervention intensive. La zone reste cependant interdite d'accès.",
    time: "Il y a 2h",
    category: "Urgent",
    image: "https://images.unsplash.com/photo-1635990438528-d938eb06cf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlZmlnaHRlcnMlMjBlbWVyZ2VuY3l8ZW58MXx8fHwxNzY2NDU5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true
  },
  {
    id: 2,
    title: "Témoignage : \"On a entendu une déflagration énorme\"",
    excerpt: "Les riverains décrivent une scène de panique après l'explosion survenue vers 8h ce matin.",
    time: "Il y a 4h",
    category: "Témoignages",
    image: "https://images.unsplash.com/photo-1699299345918-c61da8dafa0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZSUyMHBsdW1lJTIwc2t5fGVufDF8fHx8MTc2NjQ1OTk3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 3,
    title: "Conférence de presse du préfet à 16h",
    excerpt: "Le préfet du Rhône doit tenir une conférence de presse pour faire le point sur la situation et les mesures prises.",
    time: "Il y a 5h",
    category: "Annonce",
    image: "https://images.unsplash.com/photo-1546734901-f88cb9da45ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwcHJlc3MlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2NjQ1NDM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 4,
    title: "Analyse de la qualité de l'air en cours",
    excerpt: "Des prélèvements sont réalisés pour vérifier l'absence de risque toxique pour les habitants du secteur.",
    time: "Il y a 6h",
    category: "Santé",
    image: "https://images.unsplash.com/photo-1606171505200-0fd9aacd550c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBkYW1hZ2V8ZW58MXx8fHwxNzY2NDU5OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  }
];

export function NewsSection() {
  const featuredArticle = newsArticles[0];
  const otherArticles = newsArticles.slice(1);

  return (
    <section id="actualites" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Actualités en direct</h2>
          <button className="text-red-600 hover:text-red-700 flex items-center gap-2 font-medium">
            Tout voir
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
            <div className="relative h-80">
              <img 
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <Badge variant="destructive" className="absolute top-4 left-4">
                {featuredArticle.category}
              </Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Clock className="w-4 h-4" />
                <span>{featuredArticle.time}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
            </CardContent>
          </Card>

          {/* Other Articles */}
          <div className="space-y-6">
            {otherArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex gap-4">
                  <div className="relative w-40 h-32 flex-shrink-0">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {article.category}
                    </Badge>
                    <h3 className="font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{article.time}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}