import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Delish'Box</h5>
            <p className="text-muted">
              {t('footer.description')}
            </p>
          </div>
          <div className="col-md-4">
            <h5>{t('footer.links')}</h5>
            <ul className="list-unstyled">
              <li><Link to="/kits" className="text-decoration-none">{t('footer.kits')}</Link></li>
              <li><Link to="/abonnement" className="text-decoration-none">{t('footer.subscription')}</Link></li>
              <li><Link to="/blog" className="text-decoration-none">{t('footer.blog')}</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>{t('footer.contact')}</h5>
            <ul className="list-unstyled">
              <li>Email: contact@delishbox.com</li>
              <li>Tel: +33 1 23 45 67 89</li>
              <li>{t('footer.address')}</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">
              © {new Date().getFullYear()} Delish'Box. {t('footer.rights')}
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <Link to="/mentions-legales" className="text-decoration-none me-3">
              {t('footer.mentions')}
            </Link>
            <Link to="/confidentialite" className="text-decoration-none">
              {t('footer.privacy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 