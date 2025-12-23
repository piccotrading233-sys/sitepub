import { Play } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const videos = [
  {
    id: 1,
    title: "Résumé de la situation - 14h",
    duration: "3:45",
    thumbnail: "https://images.unsplash.com/photo-1562546015-561104102e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBsb3Npb24lMjBmaXJlJTIwc21va2V8ZW58MXx8fHwxNzY2NDU5OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "15.2k vues"
  },
  {
    id: 2,
    title: "Témoignage des riverains",
    duration: "2:18",
    thumbnail: "https://images.unsplash.com/photo-1699299345918-c61da8dafa0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZSUyMHBsdW1lJTIwc2t5fGVufDF8fHx8MTc2NjQ1OTk3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "8.7k vues"
  },
  {
    id: 3,
    title: "Images aériennes du site",
    duration: "1:52",
    thumbnail: "https://images.unsplash.com/photo-1600683605785-d51d43138eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYWNjaWRlbnQlMjBzY2VuZXxlbnwxfHx8fDE3NjY0NTk5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "12.1k vues"
  },
  {
    id: 4,
    title: "Intervention des pompiers",
    duration: "4:12",
    thumbnail: "https://images.unsplash.com/photo-1635990438528-d938eb06cf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlZmlnaHRlcnMlMjBlbWVyZ2VuY3l8ZW58MXx8fHwxNzY2NDU5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    views: "19.5k vues"
  }
];

export function VideoSection() {
  return (
    <section id="videos" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Vidéos</h2>
          <p className="text-gray-600">Reportages et images de l'événement</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {video.views}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}