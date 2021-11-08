import Head from 'next/head';
import Nav from '../components/Nav';
import Header from '../components/Header';
// import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Links from '../components/Links';

import { importDb } from '../config/db';

export default function Home({ projects, about, contact }) {
  return (
    <div>
      <Nav />
      <title>Torun Wikström</title>
      <Header />
      <About about={about} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Links />
      {/* <Skills /> */}
    </div>
  );
}

export const getServerSideProps = async () => {
  const db = await importDb();
  const projects = await db.all('select * from project');
  const about = await db.all('select * from aboutinfo');
  const contact = await db.all('select * from contact');
  return { props: { projects, about, contact } };
};
