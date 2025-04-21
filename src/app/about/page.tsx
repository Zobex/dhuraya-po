import React from "react";

const About = () => {
  return (
    <section className="px-6 py-16 text-orange-900 bg-orange-50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Hero Text */}
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-orange-700">
            About Eden Isles Escapes
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            At Eden Isles Escapes Tours, we don’t just plan trips — we create
            joyful stories, lasting memories, and soulful escapes. Our mission
            is simple: help you see the world with wonder, curiosity, and ease.
          </p>
        </div>

        {/* Section 1 */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-orange-700">
              Our Story
            </h2>
            <p className="leading-relaxed text-gray-700">
              Born out of a deep love for adventure and a dream to make travel
              more personal, Eden Isles Escapes Tours started with just a
              backpack and a bold heart. Since day one, w focused on curating
              authentic experiences — from mountain hideaways to cultural gems
              tucked away in vibrant towns.
            </p>
          </div>
          <img
            src="/assets/1.jpg"
            alt="Our journey"
            className="shadow-md rounded-2xl"
          />
        </div>

        {/* Section 2 */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src="/assets/1.jpg"
            alt="Travel experience"
            className="shadow-md rounded-2xl"
          />
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-orange-700">
              Why Travel With Us?
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Personalized itineraries designed around your vibe</li>
              <li>Locally-rooted guides who love storytelling</li>
              <li>Hidden gems over tourist traps</li>
              <li>Transparent pricing with zero surprise fees</li>
              <li>24/7 support — because your peace of mind matters</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold text-orange-700">
            Let Explore Together!
          </h3>
          <p className="max-w-xl mx-auto mb-6 text-gray-700">
            Whether yoe dreaming of mountain sunrises, seaside bliss, or be your
            travel buddy.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 font-semibold text-white transition bg-orange-600 rounded-full hover:bg-orange-700"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
