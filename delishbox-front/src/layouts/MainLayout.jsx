import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {


  return (
    <div className="d-flex flex-column min-vh-100">
      <Helmet>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Delish'Box - Des kits de recettes délicieuses livrés chez vous" />
        <link rel="canonical" href="https://delishbox.com" />
        <link rel="alternate" hreflang="fr" href="https://delishbox.com/fr" />
        <link rel="alternate" hreflang="en" href="https://delishbox.com/en" />
        <link rel="alternate" hreflang="x-default" href="https://delishbox.com" />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout; 