import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus('consent_required');
      return;
    }
    setStatus('sending');

    try {
      // Simuler l'envoi du formulaire
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('success');
      setFormData({ name: '', email: '', message: '', consent: false });
    } catch (error) {
      setStatus('error');
      console.error('Erreur lors de l\'envoi du message:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      <Helmet>
        <title>{t('contact.title')} - Delish'Box</title>
        <meta name="description" content={t('contact.meta_description')} />
      </Helmet>

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="text-center mb-5">{t('contact.title')}</h1>

              {status === 'success' && (
                <div className="alert alert-success">
                  {t('contact.success')}
                </div>
              )}

              {status === 'error' && (
                <div className="alert alert-danger">
                  {t('contact.error')}
                </div>
              )}

              <form onSubmit={handleSubmit} className="card p-4">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">{t('contact.name')}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">{t('contact.email')}</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">{t('contact.message')}</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="consent">
                    {t('contact.consent_text')}
                  </label>
                </div>

                {status === 'consent_required' && (
                  <div className="alert alert-warning">
                    {t('contact.consent_required')}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? t('contact.sending') : t('contact.send')}
                </button>
              </form>

              <div className="mt-4">
                <p className="text-muted small">
                  {t('contact.gdpr_notice')}
                </p>
              </div>

              <div className="mt-5">
                <h2 className="h4 mb-3">{t('contact.other_contact')}</h2>
                <div className="row">
                  <div className="col-md-4">
                    <div className="text-center">
                      <i className="bi bi-envelope fs-1 text-primary mb-3"></i>
                      <p>{t('contact.email_address')}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <i className="bi bi-telephone fs-1 text-primary mb-3"></i>
                      <p>{t('contact.phone')}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text-center">
                      <i className="bi bi-geo-alt fs-1 text-primary mb-3"></i>
                      <p>{t('contact.address')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 