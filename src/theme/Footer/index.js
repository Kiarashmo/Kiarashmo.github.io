import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';

function Footer() {
  const { footer } = useThemeConfig();
  if (!footer) {
    return null;
  }
  const { copyright } = footer;

  return (
    <footer className="footer footer--dark">
      <div className="container container--fluid">
        <div
          className="footer__copyright"
          dangerouslySetInnerHTML={{
            __html: copyright,
          }}
        />
      </div>
    </footer>
  );
}

export default React.memo(Footer);
