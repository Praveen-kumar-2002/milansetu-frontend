import styles from '../pages/styles/about_footer.module.css';
import logo from "../../assets/User_end_assets/aha-footer-logo.png";

export default function AboutFooter() {
  return (
<footer className={styles.footer}>
  <div className={styles.footerGrid}>
    <div>
      <div className={styles.footerBrand}>
        <img
          src={logo}
          alt="Aha Kalayanam"
          className={styles.pageLogo}
        />
      </div>

      <p className={styles.footerBrandText}>
        Redefining traditional matchmaking through modern prestige and exclusive
        connections.
      </p>
    </div>

    <div>
      <h4 className={styles.footerColHead}>Quick Links</h4>
      <ul className={styles.footerLinks}>
        <li className={styles.footerLinkItem}>
          <a href="#membership" className={styles.footerLink}>Membership</a>
        </li>
        <li className={styles.footerLinkItem}>
          <a href="#success" className={styles.footerLink}>Success Stories</a>
        </li>
        <li className={styles.footerLinkItem}>
          <a href="#safety" className={styles.footerLink}>Safety Tips</a>
        </li>
        <li className={styles.footerLinkItem}>
          <a href="#faq" className={styles.footerLink}>FAQ</a>
        </li>
      </ul>
    </div>

    <div>
      <h4 className={styles.footerColHead}>Legal</h4>
      <ul className={styles.footerLinks}>
        <li className={styles.footerLinkItem}>
          <a href="#privacy" className={styles.footerLink}>Privacy Policy</a>
        </li>
        <li className={styles.footerLinkItem}>
          <a href="#terms" className={styles.footerLink}>Terms of Service</a>
        </li>
        <li className={styles.footerLinkItem}>
          <a href="#cookie" className={styles.footerLink}>Cookie Policy</a>
        </li>
        <li className={styles.footerLinkItem}>
          <a href="#grievance" className={styles.footerLink}>Grievance Redressal</a>
        </li>
      </ul>
    </div>

    <div>
      <h4 className={styles.footerColHead}>Contact</h4>
      <div className={styles.footerContact}>
        <div className={styles.footerContactItem}>
          <span className={styles.footerIcon}>✉</span>
          support@heritageelite.com
        </div>

        <div className={styles.footerContactItem}>
          <span className={styles.footerIcon}>📞</span>
          1-800-PRESTIGE
        </div>

        <div className={styles.footerContactItem}>
          <span className={styles.footerIcon}>🌐</span>
          Worldwide Support
        </div>
      </div>
    </div>
  </div>

  <div className={styles.footerBottom}>
    <p className={styles.footerCopyright}>
      © 2024 Aha Kalyanam. All rights reserved. Designed for the discerning.
    </p>
  </div>
</footer>
  );
}