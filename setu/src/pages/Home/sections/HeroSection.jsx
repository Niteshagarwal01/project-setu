import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Shield } from 'lucide-react';
import { PrimaryBtn, OutlineBtn } from '../../../components/ui/Button';
import './HeroSection.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  }),
};

const floatingCards = [
  {
    icon: <MapPin size={14} />,
    label: 'Cultural Memory',
    sub: 'Nizamuddin Dargah, Delhi',
    accent: 'gold',
    delay: 0,
  },
  {
    icon: <Shield size={14} />,
    label: 'Bounty Neutralised',
    sub: 'Manipulated video — debunked',
    accent: 'red',
    delay: 2.5,
  },
  {
    icon: <MapPin size={14} />,
    label: 'Support Resource',
    sub: 'Legal Aid Clinic, Pune',
    accent: 'green',
    delay: 1.2,
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="hero">
      {/* Watermark Devanagari */}
      <div className="hero__watermark" aria-hidden="true">सेतु</div>

      <div className="hero__inner">
        {/* ── Left Column 60% ── */}
        <div className="hero__left">
          <motion.p
            className="hero__script"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Where Memory Meets Justice
          </motion.p>

          <motion.div
            className="hero__title-block"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h1 className="hero__title">
              <span className="hero__title-main">SETU</span>
              <span className="hero__title-deva">सेतु</span>
            </h1>
            <p className="hero__subtitle">The Bridge</p>
          </motion.div>

          <motion.p
            className="hero__tagline"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            A Peace Intelligence Platform bridging communities through
            memory, truth, and collective vigilance —{' '}
            <em>built for the SHANTI initiative.</em>
          </motion.p>

          <motion.div
            className="hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <PrimaryBtn onClick={() => document.querySelector('#heritage-map')?.scrollIntoView({ behavior: 'smooth' })}>
              <MapPin size={15} />
              Explore the Map
            </PrimaryBtn>
            <OutlineBtn onClick={() => document.querySelector('#truth-bounty')?.scrollIntoView({ behavior: 'smooth' })}>
              Submit a Bounty
              <ArrowRight size={15} />
            </OutlineBtn>
          </motion.div>

          {/* Divider stat strip */}
          <motion.div
            className="hero__stats"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <div className="hero__stat">
              <span className="hero__stat-num">5</span>
              <span className="hero__stat-label">SHANTI Pillars<br /><span lang="hi">पाँच स्तंभ</span></span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">3</span>
              <span className="hero__stat-label">Core Systems<br /><span lang="hi">तीन प्रणालियाँ</span></span>
            </div>
            <div className="hero__stat-sep" />
            <div className="hero__stat">
              <span className="hero__stat-num">∞</span>
              <span className="hero__stat-label">Memories Preserved<br /><span lang="hi">यादें सुरक्षित</span></span>
            </div>
          </motion.div>
        </div>

        {/* ── Right Column 40% ── */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Bridge SVG */}
          <div className="hero__bridge-wrap">
            <BridgeSVG />
          </div>

          {/* Floating memory pin cards */}
          {floatingCards.map((card, i) => (
            <div
              key={i}
              className={`hero__pin-card hero__pin-card--${card.accent}`}
              style={{ animationDelay: `${card.delay}s` }}
            >
              <span className="hero__pin-card-icon">{card.icon}</span>
              <div>
                <p className="hero__pin-card-label">{card.label}</p>
                <p className="hero__pin-card-sub">{card.sub}</p>
              </div>
            </div>
          ))}

          {/* Decorative grid lines */}
          <div className="hero__grid-lines" aria-hidden="true" />
        </motion.div>
      </div>

      {/* Bottom gold rule */}
      <div className="gold-rule" />
    </section>
  );
}

function BridgeSVG() {
  return (
    <svg
      className="hero__bridge-svg"
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Stylized arch bridge"
    >
      {/* Ground lines */}
      <line x1="20" y1="280" x2="460" y2="280" stroke="#D4B896" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Main arch */}
      <path
        d="M60 280 Q240 60 420 280"
        stroke="#8B1A1A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        className="bridge-arch"
      />

      {/* Secondary arch inner */}
      <path
        d="M100 280 Q240 100 380 280"
        stroke="#C9A84C"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
        className="bridge-arch-inner"
      />

      {/* Vertical cables */}
      {[140, 180, 220, 240, 260, 300, 340].map((x, i) => {
        // parabola: y = 60 + a*(x-240)^2
        const a = 220 / (180 * 180);
        const archY = 60 + a * Math.pow(x - 240, 2);
        return (
          <line
            key={i}
            x1={x} y1={archY}
            x2={x} y2={280}
            stroke="#C9A84C"
            strokeWidth="1"
            opacity="0.4"
          />
        );
      })}

      {/* Road deck */}
      <line x1="60" y1="280" x2="420" y2="280" stroke="#8B1A1A" strokeWidth="4" strokeLinecap="round" />

      {/* Left tower */}
      <rect x="95" y="200" width="10" height="80" fill="#8B1A1A" rx="1" />
      <rect x="88" y="196" width="24" height="8" fill="#C9A84C" rx="1" />

      {/* Right tower */}
      <rect x="375" y="200" width="10" height="80" fill="#8B1A1A" rx="1" />
      <rect x="368" y="196" width="24" height="8" fill="#C9A84C" rx="1" />

      {/* Lotus decorative element center top */}
      <ellipse cx="240" cy="68" rx="12" ry="6" fill="#C9A84C" opacity="0.25" />
      <ellipse cx="240" cy="65" rx="7" ry="4" fill="#C9A84C" opacity="0.5" />
      <circle cx="240" cy="63" r="3" fill="#C9A84C" />

      {/* Floating dots — memory markers */}
      <circle cx="160" cy="240" r="4" fill="#8B1A1A" opacity="0.7" className="bridge-dot" />
      <circle cx="240" cy="210" r="5" fill="#C9A84C" className="bridge-dot" style={{ animationDelay: '0.5s' }} />
      <circle cx="320" cy="235" r="4" fill="#8B1A1A" opacity="0.7" className="bridge-dot" style={{ animationDelay: '1s' }} />

      {/* Decorative corner text */}
      <text x="24" y="300" fontFamily="serif" fontSize="9" fill="#9E7D3A" opacity="0.6">
        सेतु · BRIDGE
      </text>
      <text x="380" y="300" fontFamily="serif" fontSize="9" fill="#9E7D3A" opacity="0.6">
        शांति · PEACE
      </text>
    </svg>
  );
}
