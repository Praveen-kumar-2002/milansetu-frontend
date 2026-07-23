import styles from '../pages/styles/membership_plans.module.css';
import { useAuth } from '../../context/AuthContext';

const plans = [
{
  id: 'basic',
  name: 'Basic',
  subtitle: 'INTRODUCTION PACK',
  price: '₹3,540',
  duration: '/Year',
  features: [
    '50 Interest Requests',
    '50 Profile Views',
    '50 Contact Views',
    'View Verified Profiles',
    'Basic Search Filters',
    'Email Support',
  ],
  buttonText: 'SELECT PLAN',
  type: 'basic',
},
{
  id: 'premium',
  name: 'Premium',
  subtitle: 'ELITE EXPERIENCE',
  price: '₹9999',
  duration: '/Year',
  badge: 'MOST POPULAR',
  features: [
    'Unlimited Interest Requests',
    'Unlimited Profile Views',
    'Unlimited Contact Views',
    'Unlimited Verified Profile Access',
    'Advanced Search Filters',
    'Priority Email Support',
  ],
  buttonText: 'SELECT PLAN',
  type: 'premium',
},
{
  id: 'Elite',
  name: 'Elite',
  subtitle: 'PERSONALIZED ASSISTANCE',
  price: 'Custom Pricing',
  duration: '',
  badge: 'CONTACT US',
  features: [
    'Unlimited Interest Requests',
    'Unlimited Profile Views',
    'Unlimited Contact Views',
    'Unlimited Verified Profile Access',
    'Advanced Search Filters',
    'Dedicated Customer Support',
  ],
  buttonText: 'CONTACT SUPPORT',
  type: 'premium',
},
];

export default function MembershipPlans() {
  const { user } = useAuth();
const handleButtonClick = () => {

  if (!user) {
    window.location.hash = "#login";
    return;
  }

  window.location.hash = "#payment";
};
  return (
    <section className={styles.section} id="membership">
      <div className={styles.container}>
        <h2 className={styles.title}>
          Membership <span className={styles.titleAccent}>Tiers</span>
        </h2>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.id} className={`${styles.cardWrapper} ${styles[plan.type + 'Wrapper']}`}>
              {plan.type === 'premium' && <div className={styles.shadowCard}></div>}
              <div className={`${styles.card} ${styles[plan.type + 'Card']}`}>
                {plan.badge && <div className={styles.badge}>{plan.badge}</div>}
                
                <div className={styles.cardHeader}>
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <span className={styles.planSubtitle}>{plan.subtitle}</span>
                </div>

                <div className={styles.priceBlock}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.duration}>{plan.duration}</span>
                </div>

                <ul className={styles.featureList}>
                  {plan.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <span className={styles.checkCircle}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

<button
  type="button"
  className={styles.button}
  onClick={handleButtonClick}
>
  {plan.buttonText}
</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
