import Videos from "../../components/VideoLists";
import Hero from "../hero/page";
import Navbar from "./Navbar";

export default async function Home({ params: { lang } }) {

  const response = await fetch(`http://localhost:3000/api/videos`);
  const videos = await response.json();
  return (
    <div>
      <Navbar lang={lang} />
      <Hero />
      <Videos />
    </div>
  );
}
