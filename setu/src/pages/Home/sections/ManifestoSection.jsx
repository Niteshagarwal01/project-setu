import React from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';
import { useCountUp } from '../../../hooks/useCountUp';
import './ManifestoSection.css';

function StatCard({ target, suffix = '', label, labelHindi, description }) {
  const { count, ref } = useCountUp(target, 2200);
  return (
    <div className="manifesto__stat" ref={ref}>
      <p className="manifesto__stat-num">
        {count}{suffix}
      </p>
      <p className="manifesto__stat-label">{label}</p>
      <p className="manifesto__stat-label-hi" lang="hi">{labelHindi}</p>
      <p className="manifesto__stat-desc">{description}</p>
    </div>
  );
}

export function ManifestoSection() {
  const ref = useScrollReveal();

  return (
    <section id="manifesto" className="manifesto" ref={ref}>
      <div className="manifesto__inner container">

        {/* Quote block */}
        <div className="manifesto__quote-wrap reveal">
          <span className="manifesto__quote-mark">"</span>
          <blockquote className="manifesto__quote">
            The arc of the moral universe is long, but it bends toward justice —
            unless we build the infrastructure to bend it.
          </blockquote>
          <p className="manifesto__attribution">
            — adapted for the digital age<br />
            <span lang="hi" className="manifesto__attribution-hi">न्याय की दिशा में — डिजिटल युग में</span>
          </p>
        </div>

        {/* Divider */}
        <div className="manifesto__divider reveal reveal-delay-1">
          <div className="gold-rule" />
          <span className="manifesto__divider-text">The Problem at Scale</span>
          <span className="manifesto__divider-text-hi" lang="hi">समस्या का पैमाना</span>
          <div className="gold-rule" />
        </div>

        {/* Stat grid */}
        <div className="manifesto__stats reveal reveal-delay-2">
          <StatCard
            target={50000}
            suffix="+"
            label="False narratives seeded per hour"
            labelHindi="प्रति घंटे झूठी खबरें"
            description="Coordinated bot networks manufacture consensus at speeds that outpace every institution of correction."
          />
          <div className="manifesto__stats-sep" />
          <StatCard
            target={12}
            label="Claims fact-checkers can verify per day"
            labelHindi="प्रतिदिन जाँची गई खबरें"
            description="Professional fact-checking is architecturally mismatched to the scale of the problem. Setu inverts this."
          />
          <div className="manifesto__stats-sep" />
          <StatCard
            target={5}
            label="SHANTI pillars addressed by Setu"
            labelHindi="शांति के पाँच स्तंभ"
            description="Peace is not observed — it is practiced. Setu builds the infrastructure for that practice."
          />
        </div>

        {/* Body paragraph */}
        <div className="manifesto__body reveal reveal-delay-3">
          <p>
            Conflict in the twenty-first century does not begin in the streets.{' '}
            <strong>It begins in feeds.</strong> Before a single stone is thrown,
            a digital campaign has been running for weeks — algorithmically amplified,
            emotionally engineered, and targeted at society's fracture lines.
          </p>
          <p lang="hi" className="manifesto__body-hi">
            संघर्ष सड़कों पर नहीं, फ़ीड्स में शुरू होता है।
          </p>
        </div>

      </div>
    </section>
  );
}
