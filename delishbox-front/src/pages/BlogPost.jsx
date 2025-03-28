import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const BlogPost = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blog/${slug}`);
        setPost(response.data);

        // Track blog article view
        if (window.gtag) {
          window.gtag('event', 'blog_article_view', {
            'event_category': 'Blog',
            'event_label': response.data.title
          });
        }

        // Track time on blog after 30 seconds
        setTimeout(() => {
          if (window.gtag) {
            window.gtag('event', 'time_on_blog_30s', {
              'event_category': 'Blog',
              'event_label': response.data.title
            });
          }
        }, 30000);
      } catch (err) {
        setError(t('blog_post.error'));
        console.error('Erreur:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug, t]);

  if (loading) return <div className="loading">{t('blog_post.loading')}</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!post) return <div className="error-message">{t('blog_post.not_found')}</div>;

  return (
    <>
      <Helmet>
        <title>{post.title} - {t('blog.title')} Delish'Box</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <article className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="mb-5">
                <h1 className="display-4 mb-3">{post.title}</h1>
                <div className="text-muted mb-4">
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="img-fluid rounded shadow mb-4"
                />
                <p className="lead">{post.excerpt}</p>
              </header>

              <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />

              <footer className="mt-5">
                <h2 className="h4 mb-3">{t('blog_post.share')}</h2>
                <div className="d-flex gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-facebook me-2"></i>
                    {t('blog_post.share_on.facebook')}
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-twitter me-2"></i>
                    {t('blog_post.share_on.twitter')}
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    {t('blog_post.share_on.linkedin')}
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost; 