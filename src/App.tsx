/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CartProvider } from './store';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { BestSellers } from './components/BestSellers';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { StickyWhatsApp } from './components/StickyWhatsApp';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-black-900 font-sans selection:bg-gold-500/30 selection:text-gold-400">
        <Navbar />
        <main>
          <Hero />
          <Categories />
          <BestSellers />
          <Features />
          <Gallery />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <Cart />
        <StickyWhatsApp />
      </div>
    </CartProvider>
  );
}
