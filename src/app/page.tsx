import Header from "@/components/header/Header";
import Servicos from "@/components/servicos/Servicos";
import Sobre from "@/components/sobre/Sobre";
import Porque from "@/components/porque/Porque";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Servicos />
        <Sobre />
        <Porque />
      </main>
    </>
  );
}
