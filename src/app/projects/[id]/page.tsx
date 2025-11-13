import styles from "./Projectsid.module.css";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className={styles.container}>
      <h1>Projet {id}</h1>
      <p>Détails du projet #{id}</p>
    </div>
  );
}