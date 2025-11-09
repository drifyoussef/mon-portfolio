export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Projet {id}</h1>
      <p>Détails du projet #{id}</p>
    </div>
  );
}