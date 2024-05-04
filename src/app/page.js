import { Header } from "./components/header";
import MainPage from "./Home/page";

export default function Home() {
  return (
    <main className="flex flex-col" data-theme="light">
     <Header/>
     <MainPage/>
    </main>
  );
}
