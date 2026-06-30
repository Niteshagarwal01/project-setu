import React from 'react';
import './Button.css';

export function PrimaryBtn({ children, onClick, href, className = '', ...rest }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      className={`btn btn-primary ${className}`}
      onClick={onClick}
      href={href}
      {...rest}
    >
      <span className="btn-inner">{children}</span>
    </Tag>
  );
}

export function OutlineBtn({ children, onClick, href, className = '', dark = false, ...rest }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      className={`btn btn-outline ${dark ? 'btn-outline-dark' : ''} ${className}`}
      onClick={onClick}
      href={href}
      {...rest}
    >
      <span className="btn-inner">{children}</span>
    </Tag>
  );
}

export function GhostBtn({ children, onClick, className = '', ...rest }) {
  return (
    <button className={`btn btn-ghost ${className}`} onClick={onClick} {...rest}>
      <span className="btn-inner">{children}</span>
    </button>
  );
}
