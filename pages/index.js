import Head from "next/head";
import Nav from "../components/Nav";
import Header from "../components/Header";
// import Skills from '../components/Skills';
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import { server } from "../config/server";
import { importDb } from "../config/db";
import { useState, useEffect } from "react";

export default function Home({ projects, about, contact, initMessages }) {
  const [messages, setMessages] = useState(initMessages);


  async function onSubmitNewMessage(newMessage) {
    const response = await fetch(`${server}/api/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });
    const newMessages = await response.json();
    setMessages(newMessages);
  }

  return (
    <div>
      <Nav />
      <title>Torun Wikström</title>
      <Header />
      <About about={about} />
      <Projects projects={projects} />
      <Contact contact={contact} onSubmit={onSubmitNewMessage} />
      <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </div>
  );
}

export const getServerSideProps = async () => {
  const db = await importDb();
  const projects = await db.all("select * from project");
  const about = await db.all("select * from aboutinfo");
  const contact = await db.all("select * from contact");
  return { props: { projects, about, contact, initMessages: contact } };
};
