import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
        setPosts(response.data);
      } catch (err) {
        setError(t('blog.error'));
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [t]);

  if (loading) return <div className="loading">{t('blog.loading')}</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <>
      <Helmet>
        <title>{t('blog.title')} - Delish'Box</title>
        <meta name="description" content={t('blog.meta_description')} />
      </Helmet>

      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-5">{t('blog.title')}</h1>

          <div className="row g-4">
            {posts.map((post) => (
              <div key={post.id} className="col-md-4">
                <div className="card h-100">
                  <img
                    src={post.imageUrl}
                    className="card-img-top"
                    alt={post.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h2 className="card-title h5">{post.title}</h2>
                    <p className="card-text text-muted">
                      {new Date(post.createdAt).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                    <p className="card-text">{post.description}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="btn btn-outline-primary"
                    >
                      {t('blog.readMore')}
                    </Link>
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

export default Blog; 