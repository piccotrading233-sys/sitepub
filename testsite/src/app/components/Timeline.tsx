import { Clock } from 'lucide-react';

const timelineEvents = [
  {
    time: "14:00",
    title: "Le feu est maîtrisé",
    description: "Les pompiers annoncent avoir circonscrit l'incendie après 6 heures d'intervention.",
    type: "success"
  },
  {
    time: "12:00",
    title: "Point presse du préfet",
    description: "Conférence de presse pour faire le point sur la situation et rassurer la population.",
    type: "info"
  },
  {
    time: "10:30",
    title: "Évacuation terminée",
    description: "L'évacuation du périmètre de sécurité de 500m est achevée. 2 400 personnes ont été évacuées.",
    type: "warning"
  },
  {
    time: "09:15",
    title: "Déclenchement du plan ORSEC",
    description: "Le plan d'urgence départemental est activé. Tous les moyens sont mobilisés.",
    type: "warning"
  },
  {
    time: "08:00",
    title: "Explosion dans l'usine",
    description: "Une violente explosion se produit dans l'usine chimique du secteur sud de Lyon.",
    type: "danger"
  }
];

export function Timeline() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Chronologie des événements</h2>
          <p className="text-gray-600">Déroulé de la journée minute par minute</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex gap-6">
                <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10
                  ${event.type === 'success' ? 'bg-green-100 text-green-600' : ''}
                  ${event.type === 'info' ? 'bg-blue-100 text-blue-600' : ''}
                  ${event.type === 'warning' ? 'bg-orange-100 text-orange-600' : ''}
                  ${event.type === 'danger' ? 'bg-red-100 text-red-600' : ''}
                `}>
                  <Clock className="w-6 h-6" />
                </div>
                
                <div className="flex-1 pb-8">
                  <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2
                      ${event.type === 'success' ? 'bg-green-100 text-green-700' : ''}
                      ${event.type === 'info' ? 'bg-blue-100 text-blue-700' : ''}
                      ${event.type === 'warning' ? 'bg-orange-100 text-orange-700' : ''}
                      ${event.type === 'danger' ? 'bg-red-100 text-red-700' : ''}
                    `}>
                      {event.time}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
