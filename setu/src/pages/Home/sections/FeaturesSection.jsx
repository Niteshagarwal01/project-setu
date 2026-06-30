import React from 'react';
import { MapPin, Shield, Radio, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './FeaturesSection.css';

const features = [
  {
    id: 'heritage-map',
    icon: MapPin,
    num: '01',
    title: 'Heritage Memory Map',
    titleHindi: 'विरासत स्मृति मानचित्र',
    tagline: 'Preserving cultures against erasure',
    description:
      'An interactive, community-populated cartographic archive of living human culture. Simultaneously a decentralised digital museum and a humanitarian resource directory.',
    pillars: ['Refugee Support', 'Historical Memory'],
    href: '#heritage-map',
    size: 'large',
  },
  {
    id: 'truth-bounty',
    icon: Shield,
    num: '02',
    title: 'Truth Bounty System',
    titleHindi: 'सत्य पुरस्कार प्रणाली',
    tagline: 'Gamified digital forensics',
    description:
      'Community-powered misinformation hunting. AI-assisted scoring meets human intelligence at scale — inverting the asymmetry between disinformation and correction.',
    pillars: ['Counter Misinformation', 'Inter-community Dialogue'],
    href: '#truth-bounty',
    size: 'medium',
  },
  {
    id: 'pulse-radar',
    icon: Radio,
    num: '03',
    title: 'Pulse Radar',
    titleHindi: 'पल्स रडार',
    tagline: 'Early warning. Prevent, not react.',
    description:
      'Real-time geospatial tension monitoring. The Setu Regional Tension Score (SRTS) aggregates community signals into civil-society alerts before violence manifests.',
    pillars: ['Early Warning', 'Cross-Border Collab'],
    href: '#pulse-radar',
    size: 'medium',
  },
];

export function FeaturesSection() {
  const ref = useScrollReveal();

  return (
    <section id="features" className="features section-pad" ref={ref}>
      <div className="features__inner container">

        {/* Header */}
        <div className="features__header reveal">
          <p className="features__script">Three Systems, One Bridge</p>
          <span className="features__devanagari" lang="hi">तीन प्रणालियाँ · एक सेतु</span>
          <div className="gold-rule-short" />
          <h2 className="features__heading">The Platform Architecture</h2>
          <p className="features__sub">
            Each system addresses distinct SHANTI pillars while feeding data into a unified intelligence layer.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="features__bento reveal reveal-delay-1">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <a
                key={feat.id}
                href={feat.href}
                className={`feat-card feat-card--${feat.size}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(feat.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {/* Number watermark */}
                <span className="feat-card__num" aria-hidden="true">{feat.num}</span>

                {/* Icon */}
                <div className="feat-card__icon-wrap">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="feat-card__content">
                  <p className="feat-card__tagline">{feat.tagline}</p>
                  <h3 className="feat-card__title">{feat.title}</h3>
                  <p className="feat-card__title-hi" lang="hi">{feat.titleHindi}</p>
                  <p className="feat-card__desc">{feat.description}</p>
                </div>

                {/* Pillars */}
                <div className="feat-card__pillars">
                  {feat.pillars.map((p) => (
                    <span key={p} className="feat-card__pillar">{p}</span>
                  ))}
                </div>

                {/* Arrow link */}
                <div className="feat-card__link">
                  <span>Explore</span>
                  <ArrowUpRight size={16} />
                </div>

                {/* Hover accent bar */}
                <div className="feat-card__accent-bar" />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
