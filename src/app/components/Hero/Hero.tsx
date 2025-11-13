import Image from "next/image";
import styles from "./Hero.module.css";
import { RiScrollToBottomLine } from "react-icons/ri";

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <div className={styles.introText}>
            <h1 className={styles.title}>Youssef DRIF</h1>
            <p className={styles.subtitle}>Développeur full stack freelance</p>
          </div>
          <div className={styles.buttonContainer}>
            <a href="#projects" className={styles.buttonProjects}>
              Découvrir mes projets
            </a>
            <a href="#contact" className={styles.buttonContact}>
              Me contacter
            </a>
          </div>
        </div>
        <div>
          <Image
            className={styles.image}
            src="/youssef-drif.jpg"
            alt="Youssef DRIF"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
      <a href="#skills" style={{ textDecoration: 'none' }}>
        <RiScrollToBottomLine className={styles.scrollIcon} />
      </a>
    </section>
  );
}
