import React from 'react';

export const ServicesSection = () => {
  return (
    <div className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">Our Services</h2>
        
        <div className="mb-12">
          <nav>
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg">Corporate</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg">Private</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg">Special</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Corporate Events",
              price: "$2999",
              description: "Premium organic catering for corporate meetings, conferences, and team events. Includes setup, service, and cleanup with our signature organic menu selections."
            },
            {
              title: "Private Celebrations",
              price: "$1999",
              description: "Custom menus for birthdays, anniversaries, and family gatherings. Fresh, organic ingredients and personalized service to make your celebration unforgettable."
            },
            {
              title: "Wedding Packages",
              price: "$4999",
              description: "Complete wedding catering with custom menus, professional service, and beautiful presentation. Let us make your special day truly magical with our organic creations."
            },
            {
              title: "Holiday Parties",
              price: "$2499",
              description: "Festive organic menus perfect for seasonal celebrations and holiday gatherings. Full-service catering available with themed menu options and decorative presentations."
            },
            {
              title: "Wellness Events",
              price: "$1799",
              description: "Health-focused menus featuring organic, nutrient-rich ingredients perfect for wellness retreats and health seminars. Special dietary accommodations available."
            },
            {
              title: "Social Gatherings",
              price: "$1599",
              description: "Casual yet elegant catering for social events, featuring our signature organic appetizers and refreshments. Perfect for cocktail parties and networking events."
            },
            {
              title: "Charity Events",
              price: "$2299",
              description: "Special rates for non-profit events with custom menus and professional service. Supporting your cause with sustainable, organic catering solutions."
            },
            {
              title: "Educational Events",
              price: "$1899",
              description: "Nutritious catering options for schools, workshops, and educational conferences. Healthy, organic choices that keep attendees energized and focused."
            },
            {
              title: "Outdoor Events",
              price: "$2199",
              description: "Weather-appropriate menus and setups for garden parties, picnics, and outdoor celebrations. Fresh, seasonal ingredients perfect for open-air gatherings."
            },
            {
              title: "Custom Experience",
              price: "Custom",
              description: "Fully customizable catering experience tailored to your specific needs. From intimate gatherings to grand celebrations, we'll create the perfect organic menu."
            }
          ].map((service, index) => (
            <div key={index} className="bg-[#222222] p-8 rounded-lg hover:-translate-y-2 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-yellow-400">{service.title}</h3>
                <span className="text-white text-xl font-bold">{service.price}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
              <button className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};