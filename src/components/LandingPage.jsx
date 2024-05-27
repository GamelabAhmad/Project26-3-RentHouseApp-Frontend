import React from "react";

export default function LandingPage() {
  return (
    <section
      id="landing-page"
      className="landing-page font-public min-h-screen relative"
    >
      <main className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <div className="text-center bg-red-300 p-8 flex flex-col justify-center items-center rounded-lg">
          <h1 className="text-5xl uppercase text-purple-500 font-extrabold mb-4">
            Rent House Indonesia
          </h1>
          <p className="text-xl text-white">
            Solusi Mudah Sewa Rumah Idaman Anda
          </p>
        </div>
      </main>
    </section>
  );
}
