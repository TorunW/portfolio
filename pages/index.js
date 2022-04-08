import Head from 'next/head';
import Nav from '../components/Nav';
import Header from '../components/Header';
// import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import { server } from '../config/server';
import { importDb } from '../config/db';
import { useState, useEffect } from 'react';

export default function Home({ projects, about, contact, initMessages }) {
  const [messages, setMessages] = useState(initMessages);

  async function onSubmitNewMessage(newMessage) {
    const response = await fetch(`${server}/api/messages`, {
      method: 'POST',
      // console.log(server,'server')
      // const response = await fetch(`/api/messages`, {
      //   method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMessage),
    });
    const newMessages = await response.json();
    setMessages(newMessages);
  }

  return (
    <div>
      <head>
        <title>Torun Wikström | Portfolio</title>
        <meta name='url' content='https://www.torun-wikstrom.com'></meta>
        <meta
          name='description'
          content='A multilingual, creative, and solution-focused web developer with solid experience of practical programming, using JavaScript (Reactjs, Node.js, Next.js) Html, CSS, Postgres, SQLite, skilled at delivering professional, effective and responsive platforms for a diverse range of clients.'
        />
        <meta
          name='keyword'
          content='portfolio, javascript, developer, react, front-end'
        />
        <meta property='image' content='/preview.png' />

        <meta property='og:title' content='Torun Wikström | Portfolio' />
        <meta name='og:url' content='https://www.torun-wikstrom.com'></meta>
        <meta
          name='og:description'
          content='A multilingual, creative, and solution-focused web developer with solid experience of practical programming, using JavaScript (Reactjs, Node.js, Next.js) Html, CSS, Postgres, SQLite, skilled at delivering professional, effective and responsive platforms for a diverse range of clients.'
        />

        <meta property='og:image' content='/preview.png' />
        <meta property='og:type' content='website' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon'></link>
      </head>
      <Nav />
      <Header />
      <About about={about} />
      <Projects projects={projects} />
      <Contact contact={contact} onSubmit={onSubmitNewMessage} />
      <script src='https://unpkg.com/ionicons@5.0.0/dist/ionicons.js'></script>
    </div>
  );
}

export const getServerSideProps = async () => {
  const db = await importDb();
  const projects = await db.all('select * from project');
  const about = await db.all('select * from aboutinfo');
  const contact = await db.all('select * from contact');
  return { props: { projects, about, contact, initMessages: contact } };
};
