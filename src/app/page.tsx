import CardFilm from "../components/CardFilm";
export default function Home() {
  return (
    <main className="flex-auto">
      Conteudo
      <CardFilm
        title="Filme 1"
        image="/Hobbite.jpg"
        link="https://youtu.be/4AKkpnCKa2I?si=_ntAoMrR7C4-I1j2"
      />
    </main>
  );
}
