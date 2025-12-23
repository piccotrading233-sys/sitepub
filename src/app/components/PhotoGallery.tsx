import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1562546015-561104102e8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBsb3Npb24lMjBmaXJlJTIwc21va2V8ZW58MXx8fHwxNzY2NDU5OTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Panache de fumée visible à plusieurs kilomètres",
    time: "08:15"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1635990438528-d938eb06cf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlZmlnaHRlcnMlMjBlbWVyZ2VuY3l8ZW58MXx8fHwxNzY2NDU5OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Intervention des pompiers",
    time: "09:30"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1759673824678-ebba6e13c424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwcmVzY3VlJTIwb3BlcmF0aW9ufGVufDF8fHx8MTc2NjQ1OTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Opération de sauvetage en cours",
    time: "10:45"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1699299345918-c61da8dafa0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9rZSUyMHBsdW1lJTIwc2t5fGVufDF8fHx8MTc2NjQ1OTk3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Fumée s'élevant dans le ciel",
    time: "11:15"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1606171505200-0fd9aacd550c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBkYW1hZ2V8ZW58MXx8fHwxNzY2NDU5OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Dégâts sur le bâtiment industriel",
    time: "11:20"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1764684994219-8347a5ab0e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZXNwb25zZSUyMHRlYW18ZW58MXx8fHwxNzY2NDM0OTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Équipes d'urgence mobilisées",
    time: "12:00"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1600683605785-d51d43138eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYWNjaWRlbnQlMjBzY2VuZXxlbnwxfHx8fDE3NjY0NTk5NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Périmètre de sécurité établi",
    time: "13:30"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1546734901-f88cb9da45ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwcHJlc3MlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2NjQ1NDM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Point presse des autorités",
    time: "14:00"
  }
];

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="galerie" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Galerie photos</h2>
          <p className="text-gray-600">Images de l'intervention et du site</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium mb-1">{image.caption}</p>
                  <p className="text-xs text-gray-300">{image.time}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setSelectedImage(null)}>
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-lg"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-lg"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-6xl max-h-[90vh] px-16" onClick={(e) => e.stopPropagation()}>
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].caption}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-white text-center mt-4">
                <p className="font-medium">{galleryImages[selectedImage].caption}</p>
                <p className="text-sm text-gray-400 mt-1">{galleryImages[selectedImage].time}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}