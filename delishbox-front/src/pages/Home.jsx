import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('home.helmet.title')}</title>
        <meta name="description" content={t('home.helmet.description')} />
      </Helmet>

      <section className="hero bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">{t('home.hero.title')}</h1>
              <p className="lead mb-4">{t('home.hero.subtitle')}</p>
              <Link
                to="/abonnement"
                className="btn btn-light btn-lg"
              >
                {t('home.cta.subscribe')}
              </Link>
            </div>
            <div className="col-lg-6">
              <img
                src="/images/hero-image.jpg"
                alt="Delish'Box Recipe Kit"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="features py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-truck fs-1 text-primary mb-3"></i>
                  <h3 className="card-title h5">{t('home.features.delivery.title')}</h3>
                  <p className="card-text">{t('home.features.delivery.description')}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-heart fs-1 text-primary mb-3"></i>
                  <h3 className="card-title h5">{t('home.features.ingredients.title')}</h3>
                  <p className="card-text">{t('home.features.ingredients.description')}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-book fs-1 text-primary mb-3"></i>
                  <h3 className="card-title h5">{t('home.features.instructions.title')}</h3>
                  <p className="card-text">{t('home.features.instructions.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 