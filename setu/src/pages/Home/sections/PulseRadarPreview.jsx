import React from 'react';
import { Radio, TrendingUp, TrendingDown, Minus, Bell } from 'lucide-react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { radarZones } from '../../../data/mockData';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { OutlineBtn } from '../../../components/ui/Button';
import './PulseRadarPreview.css';

const statusConfig = {
  CRITICAL: { color: '#CC2222', bg: 'rgba(204,34,34,0.12)', label: 'Critical Alert', labelHi: 'गंभीर चेतावनी' },
  ELEVATED: { color: '#C9A84C', bg: 'rgba(201,168,76,0.12)', label: 'Elevated',       labelHi: 'बढ़ा हुआ' },
  NEUTRAL:  { color: '#4A7C59', bg: 'rgba(74,124,89,0.10)',  label: 'Neutral',         labelHi: 'सामान्य' },
};

function TrendIcon({ trend }) {
  if (trend === 'up')     return <TrendingUp size={14} />;
  if (trend === 'down')   return <TrendingDown size={14} />;
  return <Minus size={14} />;
}

export function PulseRadarPreview() {
  const ref = useScrollReveal();

  return (
    <section id="pulse-radar" className="pulse-radar section-pad" ref={ref}>
      <div className="pulse-radar__inner container">

        {/* Header */}
        <div className="pulse-radar__header reveal">
          <SectionHeader
            script="Prevention over Intervention"
            devanagari="रोकथाम · निगरानी"
            heading="Pulse Radar"
            body="Real-time geospatial tension monitoring. The Setu Regional Tension Score (SRTS) gives civil society advance warning — hours before digital hostility becomes physical violence."
            align="center"
          />
        </div>

        {/* SVG India Map */}
        <div className="pulse-radar__map-wrap reveal reveal-delay-1">
          <IndiaMapSVG zones={radarZones} />
          <div className="pulse-radar__map-legend">
            <span className="pulse-radar__legend-item pulse-radar__legend-item--neutral">Neutral</span>
            <span className="pulse-radar__legend-item pulse-radar__legend-item--elevated">Elevated</span>
            <span className="pulse-radar__legend-item pulse-radar__legend-item--critical">Critical</span>
          </div>
        </div>

        {/* Alert Cards */}
        <div className="pulse-radar__cards reveal reveal-delay-2">
          {radarZones.map((zone) => {
            const cfg = statusConfig[zone.status];
            return (
              <div
                key={zone.id}
                className="radar-card"
                style={{ '--status-color': cfg.color, '--status-bg': cfg.bg }}
              >
                {/* Status badge */}
                <div className="radar-card__badge">
                  <span
                    className={`radar-card__dot ${zone.status === 'CRITICAL' ? 'radar-card__dot--pulse' : ''}`}
                    style={{ background: cfg.color }}
                  />
                  <span className="radar-card__status">{cfg.label}</span>
                  <span className="radar-card__status-hi" lang="hi">{cfg.labelHi}</span>
                </div>

                {/* Region */}
                <h4 className="radar-card__region">{zone.name}</h4>
                <p className="radar-card__state">{zone.state}</p>

                {/* SRTS Score */}
                <div className="radar-card__srts">
                  <div className="radar-card__srts-bar">
                    <div
                      className="radar-card__srts-fill"
                      style={{ width: `${zone.srts}%`, background: cfg.color }}
                    />
                  </div>
                  <div className="radar-card__srts-row">
                    <span className="radar-card__srts-label">SRTS</span>
                    <span className="radar-card__srts-val" style={{ color: cfg.color }}>
                      {zone.srts}<span>/100</span>
                    </span>
                    <span className="radar-card__trend" style={{ color: cfg.color }}>
                      <TrendIcon trend={zone.trend} />
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="radar-card__meta">
                  <div className="radar-card__meta-row">
                    <span>Submissions (6h)</span>
                    <strong>{zone.submissions}</strong>
                  </div>
                  <div className="radar-card__meta-row">
                    <span>Avg Toxicity</span>
                    <strong>{zone.avgToxicity}%</strong>
                  </div>
                  {zone.targetedGroup && (
                    <div className="radar-card__meta-row">
                      <span>Target</span>
                      <strong>{zone.targetedGroup}</strong>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="pulse-radar__cta reveal reveal-delay-3">
          <Bell size={16} strokeWidth={1.5} />
          <p>Civil society organisations receive automated alerts at each threshold transition.</p>
          <OutlineBtn>Register as NGO Partner</OutlineBtn>
        </div>

      </div>
    </section>
  );
}

// Simplified SVG India map outline with zone markers
function IndiaMapSVG({ zones }) {
  return (
    <svg
      viewBox="0 0 500 520"
      className="pulse-radar__svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="India tension map"
    >
      {/* Simplified India silhouette */}
      <path
        d="M220,30 L280,25 L340,55 L370,90 L385,130 L390,170 L375,210 L370,255
           L390,290 L395,330 L380,370 L360,400 L330,430 L300,460 L270,480
           L250,500 L235,480 L210,455 L185,420 L170,385 L155,350 L145,310
           L130,275 L120,240 L110,200 L105,160 L115,125 L130,90 L155,60 Z"
        fill="none"
        stroke="var(--border-cream)"
        strokeWidth="1.5"
        className="india-outline"
      />
      {/* State borders (simplified horizontal lines) */}
      <line x1="140" y1="200" x2="360" y2="200" stroke="var(--border-light)" strokeWidth="0.5" strokeDasharray="4 4" />
      <line x1="130" y1="280" x2="380" y2="280" stroke="var(--border-light)" strokeWidth="0.5" strokeDasharray="4 4" />
      <line x1="170" y1="360" x2="370" y2="360" stroke="var(--border-light)" strokeWidth="0.5" strokeDasharray="4 4" />

      {/* Zone: Nuh/Haryana → approx Delhi area */}
      <circle cx="225" cy="155" r="28" fill="rgba(204,34,34,0.15)" stroke="#CC2222" strokeWidth="1" />
      <circle cx="225" cy="155" r="8"  fill="#CC2222" className="radar-dot-pulse" />
      <text x="225" y="195" textAnchor="middle" fontSize="9" fontFamily="var(--font-sans)" fill="var(--text-muted)">Nuh, Haryana</text>

      {/* Zone: Churachandpur/Manipur → far east */}
      <circle cx="385" cy="245" r="22" fill="rgba(201,168,76,0.15)" stroke="#C9A84C" strokeWidth="1" />
      <circle cx="385" cy="245" r="7"  fill="#C9A84C" />
      <text x="385" y="278" textAnchor="middle" fontSize="8" fontFamily="var(--font-sans)" fill="var(--text-muted)">Manipur</text>

      {/* Zone: Srinagar/J&K → top north */}
      <circle cx="200" cy="65"  r="18" fill="rgba(74,124,89,0.12)"  stroke="#4A7C59"  strokeWidth="1" />
      <circle cx="200" cy="65"  r="6"  fill="#4A7C59" />
      <text x="200" y="92" textAnchor="middle" fontSize="8" fontFamily="var(--font-sans)" fill="var(--text-muted)">J&K</text>

      {/* Decorative corner text */}
      <text x="16" y="510" fontSize="8" fontFamily="serif" fill="var(--text-warm)" opacity="0.6">
        भारत · INDIA
      </text>
      <text x="16" y="500" fontSize="7" fontFamily="var(--font-sans)" fill="var(--text-warm)" opacity="0.4">
        SRTS — Setu Regional Tension Score
      </text>
    </svg>
  );
}
