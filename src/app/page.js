
import MainPage from "./Home/page";
import { Layout } from "./components/Layout";

export default function Home() {
  return (
    <Layout>
    <main className="flex flex-col bg-orange-100" data-theme="light">
     <MainPage/>
    </main>
    </Layout>
  );
}
