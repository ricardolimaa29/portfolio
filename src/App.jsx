import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import GithubStats from "./components/GithubStats";

export default function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <Hero />
      <Projects />
      <GithubStats />
      <Footer />
    </>
  );
}