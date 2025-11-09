"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.logo} href="/">
          Mon Portfolio
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
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/projects">Projets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
