// pages/explore.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "/assets/beach.jpg",
    description:
      "Enjoy stunning sunsets, white-washed buildings, and deep blue waters in one of Greece’s most iconic islands.",
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    image: "/assets/sea.jpg",
    description:
      "Step into history with Kyoto's temples, cherry blossoms, and tranquil bamboo forests.",
  },
  {
    id: 3,
    name: "Banff, Canada",
    image: "/assets/milaidhoo.jpg",
    description:
      "Breathtaking turquoise lakes, mountain hikes, and cozy lodges in the Canadian Rockies.",
  },
  {
    id: 4,
    name: "Marrakech, Morocco",
    image: "/assets/sea.jpg",
    description:
      "Experience vibrant souks, spicy cuisine, and colorful riads in the heart of Morocco.",
  },
  {
    id: 5,
    name: "Marrakech, Morocco",
    image: "/assets/sea.jpg",
    description:
      "Experience vibrant souks, spicy cuisine, and colorful riads in the heart of Morocco.",
  },
];

export default function Explore() {
  const [selected, setSelected] = useState<null | (typeof destinations)[0]>(
    null
  );

  return (
    <div className="min-h-screen px-6 py-12 bg-orange-50">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-extrabold text-orange-700">
          Your Adventure Begins!
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-orange-900">
          Discover breathtaking destinations, thrilling experiences, and unique
          travel stories from around the world.
        </p>
      </div>

      {/* Destination Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {destinations.map((place) => (
          <div
            key={place.id}
            className="overflow-hidden transition bg-white shadow-lg cursor-pointer rounded-xl hover:scale-105"
            onClick={() => setSelected(place)}
          >
            <div className="relative w-full h-56">
              <Image
                src={place.image}
                alt={place.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold text-orange-700">
                {place.name}
              </h2>
              <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                {place.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50">
          <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-lg shadow-xl">
            <button
              onClick={() => setSelected(null)}
              className="absolute text-2xl text-orange-600 top-2 right-2 hover:text-orange-800"
            >
              &times;
            </button>
            <Image
              src={selected.image}
              alt={selected.name}
              width={800}
              height={400}
              className="object-cover w-full"
            />
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold text-orange-700">
                {selected.name}
              </h3>
              <p className="text-gray-700">{selected.description}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 font-semibold text-white transition bg-orange-600 rounded-lg shadow hover:bg-orange-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
