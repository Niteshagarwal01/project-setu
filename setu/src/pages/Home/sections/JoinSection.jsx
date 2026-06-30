import React from 'react';
import { Users, Building2, Microscope, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import './JoinSection.css';

const roles = [
  {
    icon: Users,
    title: 'Community Member',
    titleHi: 'सामुदायिक सदस्य',
    description:
      'Submit memory pins, investigate misinformation bounties, and earn Trust Points as a digital peacekeeper.',
    cta: 'Join Free',
    accent: 'gold',
  },
  {
    icon: Building2,
    title: 'NGO Partner',
    titleHi: 'एनजीओ भागीदार',
    description:
      'Receive Pulse Radar SRTS alerts, publish verified support resources on the Heritage Map, and access the data API.',
    cta: 'Apply as Partner',
    accent: 'white',
  },
  {
    icon: Microscope,
    title: 'Researcher',
    titleHi: 'शोधकर्ता',
    description:
      'Access anonymised tension data, contribute to the SRTS model, and publish findings through the Setu Research Network.',
    cta: 'Request Access',
    accent: 'gold',
  },
];

export function JoinSection() {
  const ref = useScrollReveal();

  return (
    <section id="join" className="join" ref={ref}>
      <div className="join__inner container">

        {/* Header */}
        <div className="join__header reveal">
          <p className="join__script">Build the Bridge With Us</p>
          <p className="join__devanagari" lang="hi">सेतु बनाएँ — हमारे साथ</p>
          <div className="join__rule" />
          <h2 className="join__heading">Join the Platform</h2>
          <p className="join__sub">
            Setu is free, open, and community-governed. Every participant strengthens the bridge.
          </p>
        </div>

        {/* Role cards */}
        <div className="join__cards reveal reveal-delay-1">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <div key={i} className={`join-card join-card--${role.accent}`}>
                <div className="join-card__icon">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="join-card__title">{role.title}</h3>
                <p className="join-card__title-hi" lang="hi">{role.titleHi}</p>
                <p className="join-card__desc">{role.description}</p>
                <button className="join-card__cta">
                  {role.cta}
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="join__footnote reveal reveal-delay-2">
          Open source · Community governed · No data sold · Built for the SHANTI initiative
          <span lang="hi"> · ओपन सोर्स</span>
        </p>

      </div>

      {/* Decorative Devanagari */}
      <div className="join__watermark" aria-hidden="true">शांति</div>
    </section>
  );
}
