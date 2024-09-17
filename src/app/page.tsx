import Image from "next/image";
import "../app/component/HomePage.css"
import Component from "./component/more-air-homepage";
export default function Home() {
  return (
    <main>
    {/* Header Section */}
    <Component/>
     {/* Header Section */}
     <header className="w-full flex justify-between items-center px-8 header">
        <h1 className="logo">Quantechbit®</h1>
        <button className="hamburger-icon">
          <span></span> {/* Custom hamburger icon with rounded border */}
        </button>
      </header>

    {/* Hero Section */}
    <section className="flex-1 flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-6xl md:text-8xl font-semibold leading-tight">
        Designing the <br /> future today
      </h2>
      <p className="text-lg md:text-2xl mt-4">
        We move brands to their <br /> next chapter.
      </p>
    </section>

    {/* Scroll Indicator */}
    <div className="mb-8">
      <a href="#next-section" className="text-2xl">
        ↓
      </a>
    </div>
  </main>

  );
}
