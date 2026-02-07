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
          description="Projet BAC+4 de rencontres amicales autour d'un repas"
          link="/projects/togeather"
        />
        <Card
          title="Billio"
          description="Application de gestion de clients et facturation pour les indépendants et les petites entreprisess"
          link="/projects/billio"
        />
        <Card
          title="Weather App"
          description="Application météo en temps réel"
          link="/projects/weather-app"
        />
      </div>
    </section>
  );
}
