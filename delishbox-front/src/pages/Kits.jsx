import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const Kits = () => {
  const { t } = useTranslation();
  const [kits, setKits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKits = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/kits`);
        setKits(response.data);
      } catch (err) {
        setError(t('kits.error'));
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchKits();
  }, [t]);

  if (loading) return <div className="loading">{t('kits.loading')}</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <>
      <Helmet>
        <title>{t('kits.title')} - Delish'Box</title>
        <meta name="description" content={t('kits.meta_description')} />
      </Helmet>

      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-5">{t('kits.title')}</h1>
          
          <div className="row g-4">
            {kits.map((kit) => (
              <div key={kit.id} className="col-md-4">
                <div className="card h-100">
                  <img
                    src={kit.imageUrl}
                    className="card-img-top"
                    alt={kit.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h2 className="card-title h5">{kit.name}</h2>
                    <p className="card-text">{kit.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="h5 mb-0">{kit.price}€</span>
                      <Link
                        to={`/kit/${kit.slug}`}
                        className="btn btn-primary"
                      >
                        {t('kits.viewDetails')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Kits; 