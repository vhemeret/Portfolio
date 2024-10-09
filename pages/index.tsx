import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-black-100 min-h-screen"> 
      <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black-100">

        <Head>
          <title>Portfolio</title>
          <meta name="description" content="Portfolio de Valentin Hemeret" />
          <link rel="icon" href="" />
        </Head>

        <Header/>
        <Hero />
        <About />
        <Projects />
        <Contact />
		<Footer />

      </div>
    </main>
  );
}
