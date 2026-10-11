import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BOOK_PRICE, SELAR_CHECKOUT_URL } from "../../config/book";

const navigationLinks = [
  { label: "The Book", href: "#book" },
  { label: "What You'll Discover", href: "#benefits" },
  { label: "About the Author", href: "#author" },
  { label: "Reader Reviews", href: "#testimonials" },
  { label: "FAQs", href: "#faq" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className='site-header'>
      <div className='site-header__inner container'>
        <a
          className='site-brand'
          href='#top'
          aria-label='How to Heal from Loneliness and Loss, home'
          onClick={() => setMenuOpen(false)}
        >
          <span className='site-brand__full'>
            How to Heal from Loneliness and Loss
          </span>
          <span className='site-brand__compact' aria-hidden='true'>
            Loneliness &amp; Loss
          </span>
        </a>

        <nav className='desktop-nav' aria-label='Main navigation'>
          <ul className='desktop-nav__list'>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a className='desktop-nav__link' href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='site-header__actions'>
          {SELAR_CHECKOUT_URL ? (
            <a
              className='btn btn-primary header-purchase'
              href={SELAR_CHECKOUT_URL}
            >
              <span className='purchase-label'>Get My Copy</span>
              <span>{BOOK_PRICE}</span>
            </a>
          ) : (
            <button
              className='btn btn-primary header-purchase'
              type='button'
              disabled
              title='Checkout link coming soon'
              aria-label={`Get My Copy for ${BOOK_PRICE}. Checkout link coming soon.`}
            >
              <span className='purchase-label'>Get My Copy</span>
              <span aria-hidden='true'>{BOOK_PRICE}</span>
            </button>
          )}
          <button
            className={`menu-toggle${menuOpen ? " menu-toggle--open" : ""}`}
            type='button'
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls='mobile-navigation'
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </button>
        </div>
      </div>

      <div id='mobile-navigation'>
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.nav
              className='mobile-nav'
              aria-label='Mobile navigation'
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{
                duration: reduceMotion ? 0 : 0.18,
                ease: "easeOut",
              }}
            >
              <ul className='mobile-nav__list'>
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      className='mobile-nav__link'
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
