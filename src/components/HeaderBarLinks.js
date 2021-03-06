import React from 'react';

const HeaderBarLinks = () => (
  <div className="navbar-menu">
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a
            href="https://github.com/nhutlbuit/reactJs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" aria-hidden="true" />
          </a>
          <a
            href="https://twitter.com/nhutlbuit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default HeaderBarLinks;
