import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Logo } from '../../assets/footer-logo.svg';


const Footer = () => {
    return (
        <div className="footer">
            <Link to="/" className="footer__logo">
                <Logo style={{ width: '13%', marginBottom: '24px' }} />
            </Link>
            <h5>Juntos Somos Mais Fidelização S.A.</h5>
            <p>Siga-nos nas redes sociais:</p>
            <div className="footer__icons">
                <Link to="/" className="footer__icon">
                    <Facebook />
                </Link>
                <Link to="/" className="footer__icon">
                    <Linkedin />
                </Link>
                <Link to="/" className="footer__icon">
                    <Instagram />
                </Link>
            </div>
        </div>
    );
};

export default Footer;