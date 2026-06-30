import React from 'react';
import { MessageSquare, Shield, Home, BookOpen, Radio } from 'lucide-react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { shantiPillars } from '../../../data/mockData';
import './ImpactSection.css';

const iconMap = { MessageSquare, Shield, Home, BookOpen, Radio };

export function ImpactSection() {
  const ref = useScrollReveal();

  return (
    <section id="impact" className="impact section-pad" ref={ref}>
      <div className="impact__inner container">

        {/* Left — Header 40% */}
        <div className="impact__left reveal">
          <p className="impact__script">Five Pillars, One Platform</p>
          <span className="impact__devanagari" lang="hi">पाँच स्तंभ · एक मंच</span>
          <div className="gold-rule-short" />
          <h2 className="impact__heading">
            SHANTI Framework<br />
            <span>Coverage Matrix</span>
          </h2>
          <p className="impact__body">
            Every feature on Setu is designed to address one or more pillars of the
            SHANTI peace-building initiative. Together, they form a unified
            intelligence ecosystem for sustainable pluralism.
          </p>
          <blockquote className="impact__quote">
            "Technology built for peace can be as sophisticated as technology built for division."
          </blockquote>
        </div>

        {/* Right — Pillars 60% */}
        <div className="impact__pillars reveal reveal-delay-1">
          {shantiPillars.map((p, i) => {
            const Icon = iconMap[p.icon];
            return (
              <div key={i} className="pillar-row">
                <div className="pillar-row__num">{p.num}</div>
                <div className="pillar-row__icon">
                  {Icon && <Icon size={18} strokeWidth={1.5} />}
                </div>
                <div className="pillar-row__content">
                  <div className="pillar-row__names">
                    <span className="pillar-row__name">{p.pillar}</span>
                    <span className="pillar-row__name-hi" lang="hi">{p.hindi}</span>
                  </div>
                  <div className="pillar-row__arrow">→</div>
                  <div className="pillar-row__feature">{p.feature}</div>
                </div>
                <p className="pillar-row__mechanism">{p.mechanism}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
