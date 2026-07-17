import { useState, useEffect } from 'react';
import styles from '../pages/styles/header.module.css';
import logo from '../../assets/User_end_assets/aha-kalyanam-logo.png';

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'SUCCESS STORIES', href: '#success' },
  { label: 'MEMBERSHIP', href: '#membership' },
  { label: 'BRANCHES', href: '#branches' },
  { label: 'CONTACT US', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentHash = window.location.hash || '#home';
  const initialActive =
    navLinks.find((link) => link.href === currentHash)?.label || 'HOME';

  const [active, setActive] = useState(initialActive);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      const activeLink = navLinks.find((link) => link.href === hash);

      if (activeLink) {
        setActive(activeLink.label);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () =>
      window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        {/* Logo */}
        <a href="#home" className={styles.logo}>
        <a href="#home" className={styles.logo}>
  <span className={styles.logoAha}>ఆహా</span>
  <span className={styles.logoKalyanam}> కళ్యాణం</span>
</a>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={[
                styles.navLink,
                active === link.label ? styles.navLinkActive : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActive(link.label)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className={styles.actions}>
          <a href="#login" className={styles.btnOutline}>
            LOGIN
          </a>

          <a href="#register" className={styles.btnSolid}>
            FIND YOUR MATCH
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className={[
            styles.hamburger,
            menuOpen ? styles.hamburgerOpen : '',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={[
                styles.mobileLink,
                active === link.label
                  ? styles.mobileLinkActive
                  : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}

          <div className={styles.mobileActions}>
            <a href="#login" className={styles.btnOutline}>
              LOGIN
            </a>

            <a href="#register" className={styles.btnSolid}>
              FIND YOUR MATCH
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}