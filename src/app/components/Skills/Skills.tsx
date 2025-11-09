import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Compétences</h2>
      <p className={styles.sectionSubtitle}>
        Spécialisé en développement full stack avec expertise en technologies modernes
      </p>
      
      <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>⚛️</div>
          <h3>React.js</h3>
          <p>Développement d&apos;applications web modernes avec hooks, context et performance optimale</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>🚀</div>
          <h3>Next.js</h3>
          <p>SSR, SSG, App Router et optimisations pour des applications performantes et SEO-friendly</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>💚</div>
          <h3>Node.js</h3>
          <p>APIs REST et GraphQL, authentification, gestion de bases de données et microservices</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>📱</div>
          <h3>Ionic Capacitor</h3>
          <p>Applications mobiles cross-platform avec Angular, déploiement iOS et Android</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>🎨</div>
          <h3>UI/UX Design</h3>
          <p>Interfaces modernes, responsive design, animations et accessibilité</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillIcon}>🛠️</div>
          <h3>DevOps</h3>
          <p>CI/CD, Docker, déploiement cloud (Vercel, AWS), monitoring et optimisation</p>
        </div>
      </div>
    </section>
  );
}
