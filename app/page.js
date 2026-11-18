export default function Home() {
  const fullName = "Omelkhir Rebei";
  const jobTitle = "Ingénieur DevOps & Cloud";
  const email = "omelkirrebei22@gmail.com";

  return (
    <main className="container">
      <h1>{fullName}</h1>
      <h2>{jobTitle}</h2>
      <p>Contact : {email}</p>
      <section>
        <h3>À propos</h3>
        <p>Bienvenue sur mon portfolio.</p>
      </section>
      <p className="version">v1</p>
    </main>
  );
}