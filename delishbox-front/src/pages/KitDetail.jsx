import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const KitDetail = () => {
  const { slug } = useParams();
  const [kit, setKit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKit = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/kits/${slug}`);
        console.log(JSON.parse(response.data.ingredients))
        setKit({...response.data, ingredients: JSON.parse(response.data.ingredients)});
      } catch (err) {
        setError('Erreur lors du chargement du kit');
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchKit();
  }, [slug]);

  console.log(kit)

  const handleAddToCart = () => {
    if (window.gtag) {
      window.gtag('event', 'click_add_to_cart', {
        'event_category': 'Kit',
        'event_label': kit.name
      });
    }
  };

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!kit) return <div className="error-message">Kit non trouvé</div>;

  return (
    <>
      <Helmet>
        <title>{kit.name} - Delish'Box</title>
        <meta name="description" content={kit.description} />
        <meta property="og:title" content={kit.name} />
        <meta property="og:description" content={kit.description} />
        <meta property="og:image" content={kit.image} />
      </Helmet>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={kit.imageUrl}
                alt={kit.name}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="mb-4">{kit.name}</h1>
              <p className="lead mb-4">{kit.description}</p>
              
              <div className="mb-4">
                <h2 className="h4 mb-3">Ingrédients inclus :</h2>
                <ul className="list-unstyled">
                  {kit.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-2">
                      {ingredient.name} - {ingredient.quantity} {ingredient.unit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <span className="h3 mb-0">{kit.price}€</span>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleAddToCart}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KitDetail; 