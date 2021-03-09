import HeroSection from "../../components/hero/hero";
import AboutSection from "../../components/about/about";

function Home() {
  const scroll = () => {
    const scrollTo = document.getElementById("about-container").offsetTop;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  return (
    <main>
      <HeroSection scroll={scroll} />
      <AboutSection />
    </main>
  );
}

export default Home;
