const footerLinks = [
  { label: "Privacy", href: null },
  { label: "Contact", href: null },
  { label: "Terms", href: null },
];

function Footer() {
  return (
    <footer className='site-footer' id='footer'>
      <div className='site-footer__inner container'>
        <p className='site-footer__copyright'>
          © 2026 Ipaye Isaac / The Household of Light (THOL). All rights
          reserved.
        </p>
        <nav className='site-footer__nav' aria-label='Footer navigation'>
          <ul className='site-footer__links'>
            {footerLinks.map((link) => (
              <li key={link.label}>
                {link.href ? (
                  <a href={link.href}>{link.label}</a>
                ) : (
                  <span
                    className='site-footer__link-pending'
                    aria-label={`${link.label}, destination not configured`}
                  >
                    {link.label}
                    <span className='site-footer__pending'>pending</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
