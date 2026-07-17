import styles from '../pages/styles/about_footer.module.css';
import logo from "../../assets/User_end_assets/aha-footer-logo.png";

export default function AboutFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Top Row */}
        <div className={styles.topRow}>

          {/* Brand Column */}
          <div className={styles.brandCol}>

            <img
              src={logo}
              alt="Aha Kalayanam"
              className={styles.pageLogo}
            />

            <p className={styles.copyright}>
              © 2026 Aha Kalayanam.
              <br />
              Trusted Indian Matrimonial Services.
              <br />
              All Rights Reserved.
            </p>

            <div className={styles.brandEmblem}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.emblemIcon}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>

              <span className={styles.emblemText}>
                TRUSTED MATRIMONY
              </span>
            </div>

          </div>

          {/* Company */}
          <div className={styles.linksCol}>
            <h3 className={styles.heading}>COMPANY</h3>

            <ul className={styles.list}>
              <li><a href="#about" className={styles.link}>About Us</a></li>
              <li><a href="#success" className={styles.link}>Success Stories</a></li>
              <li><a href="#membership" className={styles.link}>Membership</a></li>
              <li><a href="#contact" className={styles.link}>Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.linksCol}>
            <h3 className={styles.heading}>
              LEGAL & SUPPORT
            </h3>

            <ul className={styles.list}>
              <li><a href="#privacy" className={styles.link}>Privacy Policy</a></li>
              <li><a href="#terms" className={styles.link}>Terms of Service</a></li>
              <li><a href="#cookie" className={styles.link}>Cookie Policy</a></li>
              <li><a href="#grievance" className={styles.link}>Grievance Redressal</a></li>
              <li><a href="#safety" className={styles.link}>Safety Tips</a></li>
              <li><a href="#faq" className={styles.link}>FAQ</a></li>
            </ul>
          </div>

        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottomRow}>
          <p className={styles.bottomText}>
            Aha Kalayanam – Connecting Hearts, Creating Beautiful Relationships.
          </p>
        </div>

      </div>
    </footer>
  );
}