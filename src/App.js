import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <section id="about" className="bg-white py-16 px-8">

        <div className="flex justify-center mb-6">
          <img
            src= "https://i.imgur.com/MK3eW3As.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Tentang Saya</h2>
          <p className="text-gray-700 text-lg">
            Halo! Nama saya <strong>Rafi Amrullah Al-Baihaqi Gunawan</strong>. Saya seorang
            <span className="text-blue-500"> Front-End Developer </span> dengan
            pengalaman dalam membangun web modern menggunakan
            <span className="text-blue-500"> React, Node.js, </span>
            dan teknologi lainnya. Saya suka belajar teknologi baru dan membangun sesuatu yang bermakna!
          </p>
        </div>
      </section>

      <section id="projects" className="bg-white py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Proyek Saya
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-gray-200 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Aplikasi Ste-Newz
              </h3>
              <p className="text-gray-600">
                Aplikasi berita dengan menggunakan Flutter yang bernama Ste-Newz.
              </p>
              <a
                href="https://github.com/imrapii/Ste-Newz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block"
              >
                Lihat Proyek &rarr;
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Aplikasi Pembelajaran
              </h3>
              <p className="text-gray-600">
                Aplikasi pembelajaran yang dibuat menggunakan React Native pada bagian Front End dan React JS pada bagian Back End
              </p>
              <a
                href="https://github.com/imrapii/RumahNusantara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-4 inline-block"
              >
                Lihat Proyek &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-100 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Kontak Saya</h2>
          <p className="text-gray-700 text-lg">
            Saya terbuka untuk diskusi atau peluang kolaborasi. Jangan ragu untuk
            menghubungi saya melalui email atau media sosial.
          </p>
          <div className="mt-6 space-y-4">
            <p>
              Email:{" "}
              <span className="text-blue-500">rafiamrullahalbaihaqi@gmail.com</span>
            </p>
            <p>
              Instagram:{" "}
              <a
                href="https://www.instagram.com/imrapii/?hl=en"
                className="text-blue-500"
              >
                instagram.com/in/imrapii
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/imrapii"
                className="text-blue-500"
              >
                github.com/imrapii
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
