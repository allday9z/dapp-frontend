"use client";

import React, { useState } from "react";
import "./CartPage.css";

const CART_ITEMS = [
  {
    id: "47085389643828",
    title: "AirPods Pro 3",
    sku: "MFHP4LL/A",
    barcode: "195950543698",
    price: 2000.00,
    currency: "USD",
    quantity: 1,
    image: "https://appstaging.dev/cdn/shop/files/IMG-18063697_m_jpeg_1.jpg?v=1758135574&width=300",
    shipping: "Ships in 1-2 days",
    pickup: "Unavailable at Apple Norway"
  }
];

const ADDITIONAL_SERVICES = [
  {
    id: "ac-1",
    title: "AppleCare+ for AirPods Pro (2 year plan)",
    price: 500.00,
    currency: "USD",
    description: "",
    image: "https://appstaging.dev/cdn/shop/files/AppleCare_Plus_Icon_large_728033d6-b72f-44c6-96ca-a2131689cb17_x100.png?v=1750121067",
    actionText: "Add"
  },
  {
    id: "tr-1",
    title: "Trade-in Apple device to save up to $300",
    price: null,
    currency: "",
    description: "Pay in full today, receive trade-in value once device is submitted.",
    image: "https://appstaging.dev/cdn/shop/files/TRADE-IN_BUY_BACK_black_x100.svg?v=1750142163",
    actionText: "Start trade-in"
  }
];

const RECOMMENDATIONS = [
  {
    id: "rec-1",
    title: "AirTag",
    price: 2000.00,
    image: "https://appstaging.dev/cdn/shop/files/IMG-6206978_2200x_b91f929e-632b-480b-9698-64ac9491e527_533x.webp?v=1750119183"
  },
  {
    id: "rec-2",
    title: "AirTag FineWoven Key Ring - Chartreuse",
    price: 2000.00,
    image: "https://appstaging.dev/cdn/shop/files/IMG-14666077_05c2009a-943d-44b7-91e4-7e0cff11b405_533x.png?v=1750712015"
  },
  {
    id: "rec-3",
    title: "Apple Watch Magnetic Fast Charger to USB-C Cable (1 m)",
    price: 2000.00,
    image: "https://appstaging.dev/cdn/shop/files/MLWJ3_533x.png?v=1750105089"
  },
  {
    id: "rec-4",
    title: "iPhone 16e Silicone Case – Winter Blue",
    price: 2000.00,
    image: "https://appstaging.dev/cdn/shop/files/ab4fe081-bb55-50b2-9122-0fe489a5dc65_m_jpg_1_533x.jpg?v=1750128751"
  }
];

interface CartPageProps {}

export const CartPage = (props: CartPageProps) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    CART_ITEMS.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
  );

  const [specialInstructions, setSpecialInstructions] = useState("หีควยแตด");

  const handleQuantityChange = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const totalPrice = CART_ITEMS.reduce((sum, item) => sum + (item.price * (quantities[item.id] || 1)), 0);

  return (
    <div className="cart-page w-full min-h-screen p-4 md:p-8 bg-gray-50 text-gray-900 font-sans">
      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b pb-4">
          <div className="title-wrapper-with-link title-wrapper-with-link--note">
            <h1 className="title title--primary">Your cart</h1>
            <a href="/" className="cart-note-wrapper">
              Continue shopping &gt;
            </a>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <h2 className="text-lg font-semibold">Have an account?</h2>
            <p className="text-sm text-gray-600">
              <a href="/login" className="text-blue-600 hover:underline">Log in</a> to check out faster.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-grow lg:w-2/3">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b text-sm font-semibold text-gray-500 tracking-wide uppercase">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Total</div>
            </div>

            <div className="flex flex-col gap-8 py-6 border-b border-gray-200">
              {CART_ITEMS.map((item) => (
                <div key={item.id} className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 items-start md:items-center">
                  <div className="col-span-6 flex gap-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white rounded-lg overflow-hidden p-2 border">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">SKU: {item.sku}</p>
                      <p className="text-sm text-gray-500">Barcode: {item.barcode}</p>
                      <div className="mt-4 hidden md:block">
                        <button className="text-blue-600 text-sm hover:underline">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-3 w-full flex md:justify-center items-center">
                    <div className="flex items-center border rounded-md">
                      <button 
                        className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={quantities[item.id] <= 1}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={quantities[item.id]} 
                        readOnly
                        className="w-12 text-center bg-transparent border-x py-1" 
                      />
                      <button 
                        className="px-3 py-1 hover:bg-gray-100"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                    <button className="text-blue-600 text-sm hover:underline ml-4 md:hidden">Remove</button>
                  </div>

                  <div className="col-span-3 w-full text-left md:text-right font-semibold text-lg">
                    {formatPrice(item.price * quantities[item.id])} {item.currency}
                  </div>
                </div>
              ))}
            </div>

            <div className="py-6 border-b border-gray-200">
              <h3 className="font-semibold text-xl mb-4">Additional services</h3>
              <div className="flex flex-col gap-6">
                {ADDITIONAL_SERVICES.map((service) => (
                  <div key={service.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-white rounded-xl border">
                    <div className="flex items-center gap-4">
                      <img src={service.image} alt={service.title} className="w-12 h-12 object-contain" />
                      <div>
                        <h4 className="font-medium text-gray-900">{service.title} {service.price ? `- ${formatPrice(service.price)} ${service.currency}` : ''}</h4>
                        {service.description && <p className="text-sm text-gray-500 mt-1">{service.description}</p>}
                        <button className="text-blue-600 text-sm hover:underline mt-1">Learn more &gt;</button>
                      </div>
                    </div>
                    <button className="w-full sm:w-auto px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-semibold transition-colors">
                      {service.actionText}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-6">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>Order special instructions</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <textarea 
                  className="w-full mt-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="Order special instructions"
                />
              </details>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl border sticky top-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Summary</h3>
              
              <div className="flex justify-between items-center mb-4 pb-4 border-b">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-lg">{formatPrice(totalPrice)} USD</span>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-4 border rounded-xl hover:border-gray-400 cursor-pointer transition-colors">
                  <p className="font-semibold text-lg">Pay {formatPrice(totalPrice / 12)}/mo. for 12 mo.</p>
                  <button className="w-full mt-3 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
                    Start financing
                  </button>
                </div>

                <div className="p-4 border rounded-xl hover:border-gray-400 cursor-pointer transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-lg">Pay in full</span>
                    <span className="font-semibold text-lg">{formatPrice(totalPrice)} USD</span>
                  </div>
                  <button className="w-full py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors mb-2">
                    Checkout
                  </button>
                  <button className="w-full py-3 bg-gray-100 text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex justify-center items-center gap-2">
                    <span className="text-xl"></span> Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};