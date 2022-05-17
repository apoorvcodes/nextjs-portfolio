import type { NextPage } from "next";
import Aboutme from "../components/Aboutme";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Toggleup from "../components/Toggleup";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <div className="min-h-screen min-w-screen bg-mainbg">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        ></link>
      </Head>
      <Toggleup />
      <Hero />
      <Aboutme />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
