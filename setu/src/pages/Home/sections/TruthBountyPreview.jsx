import React, { useState } from 'react';
import { Shield, Trophy, ChevronRight, AlertTriangle } from 'lucide-react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { mockScoreCard, leaderboard } from '../../../data/mockData';
import { SectionHeader } from '../../../components/ui/SectionHeader';
import { PrimaryBtn } from '../../../components/ui/Button';
import './TruthBountyPreview.css';

const stages = [
  {
    num: '01',
    title: 'AI Scoring',
    titleHi: 'एआई स्कोरिंग',
    desc: 'Google Perspective API analyses toxicity dimensions in real-time',
  },
  {
    num: '02',
    title: 'Community Investigation',
    titleHi: 'सामुदायिक जाँच',
    desc: 'Tiered investigators submit forensic evidence and reverse-image searches',
  },
  {
    num: '03',
    title: 'Validation & Neutralisation',
    titleHi: 'सत्यापन',
    desc: 'Community votes validate bounties; misinformation is permanently marked',
  },
  {
    num: '04',
    title: 'Pattern Escalation',
    titleHi: 'पैटर्न वृद्धि',
    desc: 'Validated bounties feed the Pulse Radar tension scoring pipeline',
  },
];

const tierColors = {
  gold:    { bg: '#C9A84C', text: '#fff' },
  silver:  { bg: '#9E9E9E', text: '#fff' },
  bronze:  { bg: '#8B6340', text: '#fff' },
  default: { bg: '#EDE0C8', text: '#5C4030' },
};

export function TruthBountyPreview() {
  const ref = useScrollReveal();
  const [analyzing, setAnalyzing] = useState(false);
  const [scored, setScored] = useState(false);
  const [inputVal, setInputVal] = useState('');

  const handleAnalyze = () => {
    if (!inputVal.trim()) return;
    setAnalyzing(true);
    setScored(false);
    setTimeout(() => {
      setAnalyzing(false);
      setScored(true);
    }, 1800);
  };

  return (
    <section id="truth-bounty" className="truth-bounty section-pad" ref={ref}>
      <div className="truth-bounty__inner container">

        {/* ── Mock UI 40% (LEFT) ── */}
        <div className="truth-bounty__forge reveal">
          <div className="forge__card">
            <div className="forge__header">
              <Shield size={18} strokeWidth={1.5} />
              <span>Reality Forge</span>
              <span className="forge__header-hi" lang="hi">वास्तविकता जाँच</span>
            </div>

            <div className="forge__input-wrap">
              <textarea
                className="forge__input"
                placeholder="Paste a claim, caption, or viral text to analyse..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                rows={3}
              />
            </div>

            <button
              className={`forge__btn ${analyzing ? 'forge__btn--loading' : ''}`}
              onClick={handleAnalyze}
              disabled={analyzing}
            >
              {analyzing ? (
                <span className="forge__spinner" />
              ) : (
                <>
                  <Shield size={14} />
                  {scored ? 'Re-Analyse' : 'Analyse Content'}
                </>
              )}
            </button>

            {/* Score Card */}
            {scored && (
              <div className="forge__scorecard">
                <div className="forge__verdict" style={{ color: mockScoreCard.verdictColor }}>
                  <AlertTriangle size={14} />
                  {mockScoreCard.verdict}
                  <span className="forge__verdict-hi" lang="hi">उच्च जोखिम</span>
                </div>
                {mockScoreCard.scores.map((s) => (
                  <div key={s.label} className="forge__score-row">
                    <div className="forge__score-meta">
                      <span className="forge__score-label">{s.label}</span>
                      <span className="forge__score-val" style={{ color: s.color }}>{s.value}%</span>
                    </div>
                    <div className="forge__bar-track">
                      <div
                        className="forge__bar-fill"
                        style={{ '--fill-width': `${s.value}%`, '--fill-color': s.color }}
                      />
                    </div>
                    <p className="forge__score-desc">{s.description}</p>
                  </div>
                ))}
                <p className="forge__phase-note">
                  Live scoring via Google Perspective API — Phase 2
                </p>
              </div>
            )}

            {!scored && !analyzing && (
              <p className="forge__demo-note">
                Try: <em>"Viral video shows minority community attacking a temple."</em>
              </p>
            )}
          </div>
        </div>

        {/* ── Content 60% (RIGHT) ── */}
        <div className="truth-bounty__content reveal reveal-delay-1">
          <SectionHeader
            script="Digital Forensics at Scale"
            devanagari="डिजिटल न्याय"
            heading="Truth Bounty System"
            body="Inverting the asymmetry between misinformation and correction — through gamified, community-powered digital investigation."
          />

          {/* Workflow timeline */}
          <div className="bounty__stages">
            {stages.map((stage, i) => (
              <div key={i} className="bounty__stage">
                <div className="bounty__stage-num">{stage.num}</div>
                <div className="bounty__stage-connector" />
                <div className="bounty__stage-content">
                  <p className="bounty__stage-title">{stage.title}</p>
                  <p className="bounty__stage-title-hi" lang="hi">{stage.titleHi}</p>
                  <p className="bounty__stage-desc">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Leaderboard */}
          <div className="bounty__leaderboard">
            <div className="bounty__lb-header">
              <Trophy size={16} strokeWidth={1.5} />
              <span>Trust Points Leaderboard</span>
              <span className="bounty__lb-hi" lang="hi">विश्वास अंक</span>
            </div>
            <ul className="bounty__lb-list">
              {leaderboard.slice(0, 3).map((user) => {
                const tier = tierColors[user.tier];
                return (
                  <li key={user.rank} className="bounty__lb-row">
                    <span
                      className="bounty__lb-rank"
                      style={{ background: tier.bg, color: tier.text }}
                    >
                      {user.rank}
                    </span>
                    <div className="bounty__lb-info">
                      <span className="bounty__lb-name">{user.name}</span>
                      <span className="bounty__lb-badge">{user.badge}</span>
                    </div>
                    <span className="bounty__lb-pts">{user.points.toLocaleString()} pts</span>
                    <span className="bounty__lb-bounties">{user.bounties} bounties</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <PrimaryBtn>
            Join the Investigation
            <ChevronRight size={15} />
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
}
