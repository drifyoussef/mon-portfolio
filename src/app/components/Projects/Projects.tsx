import { Card } from "../index";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Mes Projets</h2>
      <p className={styles.sectionSubtitle}>
        Découvrez une sélection de mes réalisations et projets récents
      </p>
      
      <div className={styles.projectsGrid}>
        <Card
          title="Togeather"
          description="Application collaborative pour organiser des événements"
          link="/projects/togeather"
        />
        <Card
          title="Weather App"
          description="Application météo en temps réel"
          link="/projects/weather-app"
        />
        <Card
          title="Portfolio"
          description="Mon portfolio personnel construit avec Next.js"
          link="/projects/portfolio"
        />
      </div>
    </section>
  );
}
