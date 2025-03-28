import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './i18n';

// Lazy load des pages
const Home = lazy(() => import('./pages/Home'));
const Kits = lazy(() => import('./pages/Kits'));
const KitDetail = lazy(() => import('./pages/KitDetail'));
const Subscription = lazy(() => import('./pages/Subscription'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Composant de chargement
const LoadingFallback = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Chargement...</span>
    </div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="kits" element={<Kits />} />
          <Route path="kit/:slug" element={<KitDetail />} />
          <Route path="abonnement" element={<Subscription />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
