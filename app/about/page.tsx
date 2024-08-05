// src/app/about/page.tsx

import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-[#0c0a09] text-white min-h-screen">
      <header className=" text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
      </header>

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-[#00d155]">Our Mission</h2>
            <p className="text-gray-300">
              Welcome to Daily Esports, where we bring you the latest in esports news, tournament updates, and in-depth game reviews. Our mission is to provide gamers and esports enthusiasts with the most accurate and up-to-date information to enhance their gaming experience.
            </p>
          </section>

          <section className="space-y-8 mt-12">
            <h2 className="text-3xl font-semibold text-[#00d155]">Our Team</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-[#1c1b1a] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#00d155]">Jane Doe</h3>
                <p className="text-gray-400">Founder & CEO</p>
                <p className="text-gray-300 mt-2">
                  Jane is the visionary behind Daily Esports. With a passion for gaming and esports, she leads our team with dedication and creativity.
                </p>
              </div>
              <div className="flex-1 bg-[#1c1b1a] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#00d155]">John Smith</h3>
                <p className="text-gray-400">Lead Developer</p>
                <p className="text-gray-300 mt-2">
                  John is the tech guru who ensures that our platform runs smoothly. His expertise in development keeps Daily Esports at the forefront of technology.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8 mt-12">
            <h2 className="text-3xl font-semibold text-[#00d155]">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions or feedback, feel free to reach out to us at <a href="mailto:contact@dailyesports.com" className="text-[#00d155] hover:underline">contact@dailyesports.com</a>.
            </p>
          </section>
        </div>
      </main>

      <footer className=" text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>
            &copy; 2024 Daily Esports. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
