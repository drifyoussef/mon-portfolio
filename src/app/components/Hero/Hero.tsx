import Image from "next/image";
import styles from "./Hero.module.css";
import { RiScrollToBottomLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <div className={styles.introText}>
            <h1 className={styles.title}>Youssef DRIF</h1>
            <p className={styles.subtitle}>
              Développeur web & mobile freelance
            </p>
            <p className={styles.description}>
              Je développe des MVP et des produits web complets pour startups,
              PME et agences, du prototype jusqu’au déploiement et à la mise en
              production.
            </p>
            <p className={styles.description}>
              Je suis spécialisé en React, Next.js, Node.js et Ionic capacitor Angular
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <a href="#projects" className={styles.buttonProjects}>
              Découvrir mes projets
            </a>
            <a href="#contact" className={styles.buttonContact}>
              Me contacter
            </a>
          </div>
          <div className={styles.location}>
            <p>
              📍Les sables d&apos;Olonne - 85100 <em>(Vendée)</em>
            </p>
          </div>
          <div className={styles.socials}>
            <div className={styles.socialIcon}>
              <FaGithub />
            </div>
            <div className={styles.socialIcon}>
              <FaLinkedin />
            </div>
            <div className={styles.socialIcon}>
              <MdEmail />
            </div>
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
      <a href="#skills" style={{ textDecoration: "none" }}>
        <RiScrollToBottomLine className={styles.scrollIcon} />
      </a>
    </section>
  );
}
