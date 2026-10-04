import Header from "@/components/header/Header";
import Servicos from "@/components/servicos/Servicos";
import Sobre from "@/components/sobre/Sobre";
import Porque from "@/components/porque/Porque";
import Depoimentos from "@/components/depoimentos/Depoimentos";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Servicos />
        <Sobre />
        <Porque />
        <Depoimentos />
      </main>
    </>
  );
}
