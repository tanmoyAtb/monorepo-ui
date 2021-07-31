import React from "react";

/* eslint-disable max-len */
const HamburgerMenu: React.FC = () => {
  return (
    <svg width={18} height={12} viewBox="0 0 18 12">
      <title>{"Hamburger Menu"}</title>
      <g fill="none" fillRule="evenodd">
        <path d="M-3-6h24v24H-3z" />
        <path
          d="M1 12h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1zM0 1c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H1C.45 0 0 .45 0 1z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export { HamburgerMenu };
