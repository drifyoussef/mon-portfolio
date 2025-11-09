import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export default function Card({ title, description, image, link }: CardProps) {
  const content = (
    <>
      {image && (
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className={styles.image}
        />
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </>
  );

  if (link) {
    return (
      <Link href={link} className={styles.card}>
        {content}
      </Link>
    );
  }

  return <div className={styles.card}>{content}</div>;
}
