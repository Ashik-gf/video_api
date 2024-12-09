import Videos from "../../components/VideoLists";
import Hero from "../hero/page";
import Navbar from "./Navbar";

export default async function Home({ params: { lang } }) {
  return (
    <div>
      <Navbar lang={lang} />
      <Hero />
      <Videos />
    </div>
  );
}
