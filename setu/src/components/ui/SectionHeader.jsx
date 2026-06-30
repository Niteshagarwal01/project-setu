import React from 'react';
import './SectionHeader.css';

/**
 * Reusable section header block.
 * @param {string} script   - Great Vibes script accent line (optional)
 * @param {string} devanagari - Hindi accent word (optional)
 * @param {string} heading  - Main heading (Playfair Display)
 * @param {string} body     - Subtitle/body text (Montserrat)
 * @param {'left'|'center'|'right'} align
 * @param {'dark'|'light'} theme - dark = ink on cream, light = cream on dark
 */
export function SectionHeader({
  script,
  devanagari,
  heading,
  body,
  align = 'left',
  theme = 'dark',
  className = '',
}) {
  return (
    <div className={`section-header section-header--${align} section-header--${theme} ${className}`}>
      {script && (
        <p className="section-header__script">{script}</p>
      )}
      {devanagari && (
        <span className="section-header__devanagari">{devanagari}</span>
      )}
      <div className="section-header__rule" />
      <h2 className="section-header__heading">{heading}</h2>
      {body && (
        <p className="section-header__body">{body}</p>
      )}
    </div>
  );
}
