import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'About',    href: '#manifesto' },
  { label: 'Platform', href: '#features' },
  { label: 'Map',      href: '#heritage-map' },
  { label: 'Bounty',   href: '#truth-bounty' },
  { label: 'Radar',    href: '#pulse-radar' },
  { label: 'Impact',   href: '#impact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, '#hero')}>
            <span className="navbar__logo-icon">✨</span>
            <span className="navbar__logo-main">SETU</span>
            <span className="navbar__logo-sep">|</span>
            <span className="navbar__logo-deva">सेतु</span>
          </a>

          {/* Desktop Nav */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#join"
            className="navbar__cta"
            onClick={(e) => handleNavClick(e, '#join')}
          >
            <span>Join the Platform</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Gold rule */}
        <div className={`navbar__rule ${scrolled ? 'navbar__rule--visible' : ''}`} />
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-overlay ${menuOpen ? 'nav-overlay--open' : ''}`}>
        <div className="nav-overlay__logo-text">
          <span className="nav-overlay__logo-main">SETU</span>
          <span className="nav-overlay__logo-deva">सेतु</span>
        </div>
        <ul className="nav-overlay__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-overlay__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#join"
              className="nav-overlay__cta"
              onClick={(e) => handleNavClick(e, '#join')}
            >
              Join the Platform
            </a>
          </li>
        </ul>
        <div className="nav-overlay__devanagari">सेतु</div>
      </div>
    </>
  );
}
