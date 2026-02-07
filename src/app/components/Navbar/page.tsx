"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import YDDEV from "../../../../public/YDDEV.png";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          <Image src={YDDEV} alt="YDDEV Logo" className={styles.logoImage} />
        </Link>
        <button
          className={styles.burger}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          <li>
            <a href="#hero" onClick={() => setOpen(false)}>Accueil</a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>Compétences</a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>Projets</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
