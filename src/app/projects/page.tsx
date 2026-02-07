import { Card } from "../components";
import styles from "./page.module.css";

export default function ProjectsListPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <div className="personnal-projects">
        <h1>Mes Projets personnels</h1>
        <div className={styles.divCards}>
          <Card
            image=""
            title="Togeather"
            description="Projet BAC+4 de rencontres amicales autour d'un repas"
            link="/projects/togeather"
          />
          <Card
            title="Weather App"
            description="Application météo en temps réel"
            link="/projects/weather-app"
          />
          <Card
            title="Billio"
            description="Application de gestion de clients et facturation pour les indépendants et les petites entreprisess"
            link="/projects/billio"
          />
        </div>
      </div>
      <div className="professional-projects">
        <h1 style={{ marginTop: "4rem" }}>Mes Projets professionnels</h1>
        <div className={styles.divCards}>
          <Card
            title="Application Ceser"
            description="Description du projet professionnel 1"
            link="/projects/professional-project-1"
          />
          <Card
            title="Application REConnect"
            description="Description du projet professionnel 2"
            link="/projects/professional-project-2"
          />
          <Card
            title="Refonte graphique des sites web de Beinstore"
            description="Description du projet professionnel 2"
            link="/projects/professional-project-2"
          />
          <Card
            title="Refonte graphique de REConnect"
            description="Description du projet professionnel 2"
            link="/projects/professional-project-2"
          />
        </div>
      </div>
    </div>
  );
}
