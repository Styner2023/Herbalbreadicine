// React import removed as it's not used in this component
import { UtensilsCrossed, Users, Clock, Leaf } from 'lucide-react';

export const Catering = () => {
  const services = [
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Custom Menus",
      description: "Personalized organic menus tailored to your event",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Any Size Event",
      description: "From intimate gatherings to large celebrations",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Scheduling",
      description: "Available for breakfast, lunch, or dinner events",
      image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Organic",
      description: "Only the freshest organic ingredients used",
      image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="catering" className="py-24 bg-black relative">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
          alt="Catering background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Organic Catering</h2>
          <p className="text-gray-300 text-lg">
            Elevate your events with our premium organic catering services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-yellow-400">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">Ready to Create Something Special?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us bring our organic magic to your next event. From intimate gatherings to grand celebrations,
            we'll create a memorable culinary experience tailored just for you.
          </p>
          <button className="px-8 py-4 bg-yellow-400 text-black rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/50">
            Request Catering Quote
          </button>
        </div>
      </div>
    </section>
  );
};