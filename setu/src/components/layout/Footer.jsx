import React from 'react';
import './Footer.css';

const footerLinks = {
  Platform:  ['Heritage Memory Map', 'Truth Bounty', 'Pulse Radar', 'Reality Forge'],
  About:     ['Our Mission', 'SHANTI Initiative', 'The Team', 'Open Source'],
  Pillars:   ['Inter-community Dialogue', 'Counter Misinformation', 'Refugee Support', 'Early Warning'],
  Connect:   ['hello@setu.org', 'GitHub', 'Press Kit', 'API Docs'],
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rule" />
      <div className="footer__inner container">

        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">✨</span>
            <span className="footer__logo-main">SETU</span>
            <span className="footer__logo-sep">|</span>
            <span className="footer__logo-deva" lang="hi">सेतु</span>
          </div>
          <p className="footer__tagline">
            The Bridge.<br />
            <span lang="hi" className="footer__tagline-hi">क्योंकि पुल एक तरफ खड़े होकर नहीं बनते।</span>
          </p>
          <p className="footer__tag-en">
            "Because bridges are not built<br />by standing on one side."
          </p>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group} className="footer__col">
            <h4 className="footer__col-title">{group}</h4>
            <ul className="footer__links">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer__link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p>© 2025 Setu — The Peace Intelligence Platform</p>
          <p className="footer__bottom-right">
            Built for the <strong>SHANTI Hackathon</strong> ·{' '}
            <a href="#" className="footer__bottom-link">Open Source</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
