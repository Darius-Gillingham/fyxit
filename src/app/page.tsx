"use client";

import React, { useState } from "react";

type Product = {
  title: string;
  description: string;
  image: string;
  price: string;
};

const sections = ["Info", "Products", "Contact"];

const categories: string[] = [];

const products: Record<string, Product[]> = {};

function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-yellow-400">
      <h3 className="text-2xl font-bold text-yellow-300 mb-2">{product.title}</h3>
      <img
        src={product.image}
        alt={product.title}
        className="rounded-lg mb-4 w-full max-w-md"
      />
      <p className="mb-2 text-white">{product.description}</p>
      <p className="font-semibold text-lg text-yellow-300">{product.price}</p>
    </div>
  );
}

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>("Info");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const resetView = () => {
    setSelectedProduct(null);
    setActiveSection("Info");
  };

  return (
    <>
      {/* Header with gradient */}
      <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-900 via-blue-700 to-yellow-400 p-6 shadow-lg z-10 flex items-center justify-between border-b-4 border-yellow-300">
        <div>
          <h1 className="text-3xl font-extrabold text-white drop-shadow-md">Fyxit</h1>
          <p className="text-yellow-200 text-sm font-medium drop-shadow-sm">Need a Fix? Fyxit</p>
        </div>
        <button
          onClick={resetView}
          className="ml-4 p-2 rounded-full hover:scale-105 transition-transform border-2 border-white"
        >
          <img
            src="/assets/HomeLogo.jpg"
            alt="Home"
            className="w-8 h-8 rounded-full"
          />
        </button>
      </header>

      {/* Section Tabs */}
      <section className="grid grid-cols-3 gap-4 mt-24 px-4">
        {sections.map((section) => (
          <div
            key={section}
            onClick={() => {
              setActiveSection(section);
              setSelectedProduct(null);
            }}
            className={`p-4 rounded-lg shadow-lg text-center cursor-pointer transition-transform font-semibold ${
              activeSection === section
                ? "bg-yellow-300 text-black border-4 border-yellow-400"
                : "bg-blue-800 text-white border border-yellow-300 hover:bg-blue-700"
            }`}
          >
            {section}
          </div>
        ))}
      </section>

      {/* Section Content */}
      <main className="pt-12 p-6">
        {activeSection === "Info" && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-4 drop-shadow-sm">Welcome to Fyxit</h2>
            <p className="max-w-2xl mx-auto text-black text-md leading-relaxed">
              Fyxit is an all-natural beverage company that combines real fruit juice with high caffeine to create a great middle ground energy beverage with smooth taste and killer energy.
            </p>
          </div>
        )}

        {activeSection === "Products" && (
          <div>
            {selectedProduct ? (
              <ProductDetail product={selectedProduct} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category) =>
                  products[category].map((product, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedProduct(product)}
                      className="bg-gray-700 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform border border-yellow-300"
                    >
                      <h3 className="text-xl font-bold text-yellow-200">{product.title}</h3>
                      <p className="text-white">{product.description}</p>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="rounded-lg mt-2"
                      />
                      <p className="mt-2 font-semibold text-yellow-200">{product.price}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {activeSection === "Contact" && (
          <div className="text-center text-black">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Get in Touch</h2>
            <p>Email: dariusgillingham2@gmail.com </p>
            <p>Email: nicmay9er@gmail.com </p>
            <p className="mt-1">Instagram: </p>
            <p className="mt-1">Phone: 236-458-7488</p>
          </div>
        )}
      </main>
    </>
  );
}
