import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Subscription = () => {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: 'card'
  });
  const [gdprConsent, setGdprConsent] = useState({
    terms: false,
    privacy: false,
    marketing: false
  });

  const plans = [
    {
      id: 'monthly',
      name: t('subscription.monthly'),
      price: 49.99,
      description: t('subscription.monthly_description'),
      features: [
        t('subscription.features.free_delivery'),
        t('subscription.features.fresh_ingredients'),
        t('subscription.features.detailed_instructions'),
        t('subscription.features.online_recipes')
      ]
    },
    {
      id: 'quarterly',
      name: t('subscription.quarterly'),
      price: 139.99,
      description: t('subscription.quarterly_description'),
      features: [
        t('subscription.features.free_delivery'),
        t('subscription.features.fresh_ingredients'),
        t('subscription.features.detailed_instructions'),
        t('subscription.features.online_recipes'),
        t('subscription.features.discount_10')
      ]
    },
    {
      id: 'yearly',
      name: t('subscription.yearly'),
      price: 499.99,
      description: t('subscription.yearly_description'),
      features: [
        t('subscription.features.free_delivery'),
        t('subscription.features.fresh_ingredients'),
        t('subscription.features.detailed_instructions'),
        t('subscription.features.online_recipes'),
        t('subscription.features.discount_20'),
        t('subscription.features.free_kits_2')
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.gtag) {
      window.gtag('event', 'form_submit_contact', {
        'event_category': 'Subscription',
        'event_label': selectedPlan
      });
    }
    // Logique de soumission du formulaire à implémenter
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlanSelect = (plan) => {
    window.dataLayer.push({
      event: 'subscribe_plan',
      id: plan.id,
      name: plan.name,
      price: plan.price,
      description: plan.description,
      features: plan.features,
    })
    setSelectedPlan(plan.id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  const handleGdprChange = (e) => {
    const { name, checked } = e.target;
    setGdprConsent(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value !== '') &&
           gdprConsent.terms &&
           gdprConsent.privacy;
  };

  return (
    <>
      <Helmet>
        <title>{t('subscription.title')} - Delish'Box</title>
        <meta name="description" content={t('subscription.meta_description')} />
      </Helmet>

      <section className="py-5">
        <div className="container">
          <h1 className="text-center mb-5">{t('subscription.title')}</h1>

          <div className="row g-4 mb-5">
            {plans.map((plan) => (
              <div key={plan.id} className="col-md-4">
                <div className={`card h-100 ${selectedPlan === plan.id ? 'border-primary' : ''}`}>
                  <div className="card-body text-center">
                    <h2 className="card-title h4">{plan.name}</h2>
                    <p className="h3 mb-3">{plan.price}€</p>
                    <p className="text-muted mb-4">{plan.description}</p>
                    <ul className="list-unstyled mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`btn ${selectedPlan === plan.id ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handlePlanSelect(plan)}
                    >
                      {t('subscription.select')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} 
           style={{ display: showModal ? 'block' : 'none' }}
           tabIndex="-1"
           aria-labelledby="subscriptionModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="subscriptionModalLabel">
                {t('subscription.personal_info')}
              </h5>
              <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">{t('subscription.full_name')}</label>
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
                  <label htmlFor="email" className="form-label">{t('subscription.email')}</label>
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
                  <label htmlFor="address" className="form-label">{t('subscription.address')}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="form-label">{t('subscription.city')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="postalCode" className="form-label">{t('subscription.postal_code')}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="country" className="form-label">{t('subscription.country')}</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">{t('subscription.payment_method')}</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="card"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="card">
                      {t('subscription.card')}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="sepa"
                      value="sepa"
                      checked={formData.paymentMethod === 'sepa'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="sepa">
                      {t('subscription.sepa')}
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="terms"
                      id="terms"
                      checked={gdprConsent.terms}
                      onChange={handleGdprChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="terms">
                      {t('subscription.gdpr.terms')}
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      checked={gdprConsent.privacy}
                      onChange={handleGdprChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="privacy">
                      {t('subscription.gdpr.privacy')}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="marketing"
                      id="marketing"
                      checked={gdprConsent.marketing}
                      onChange={handleGdprChange}
                    />
                    <label className="form-check-label" htmlFor="marketing">
                      {t('subscription.gdpr.marketing')}
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100"
                  disabled={!isFormValid()}
                >
                  {t('subscription.subscribe')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default Subscription; 