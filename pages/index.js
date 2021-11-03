import Head from 'next/head';
import Header from '../components/Header';
// import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Links from '../components/Links';

export default function Home() {
  return (
    <div>
      <title>Torun Wikström</title>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Links />
      {/* <Skills /> */}
    </div>
  );
}
