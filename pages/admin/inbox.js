import { importDb } from "../../config/db";
import { server } from "../../config/server";
import { useState } from "react";
import Head from "next/head";
import InboxStyles from "../../styles/Inbox.module.css";

const inbox = ({ initMessages }) => {
  const [messages, setMessages] = useState(initMessages);

  async function onSubmit(message) {
    message.seen = message.seen === 1 ? 0 : 1;

<<<<<<< HEAD
    const response = await fetch(`${server}/api/message/${message.id}`, {
      method: "PUT",
=======
    const response = await fetch(`/api/message/${message.id}`, {
      method: 'PUT',
>>>>>>> 023ceb926f3563ebc6b04687b8d056e4d1bce5a7
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    await response.json();
    getMessages();
  }

  async function getMessages() {
<<<<<<< HEAD
    const response = await fetch(`${server}/api/messages`, {
      method: "GET",
=======
    const response = await fetch(`/api/messages`, {
      method: 'GET',
>>>>>>> 023ceb926f3563ebc6b04687b8d056e4d1bce5a7
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newMessages = await response.json();
    setMessages(newMessages);
  }

  async function onDeleteMessage(id) {
<<<<<<< HEAD
    await fetch(`${server}/api/message/${id}`, {
      method: "DELETE",
=======
    await fetch(`/api/message/${id}`, {
      method: 'DELETE',
>>>>>>> 023ceb926f3563ebc6b04687b8d056e4d1bce5a7
      headers: {
        "Content-Type": "application/json",
      },
    });
    getMessages();
  }

  return (
    <div className={InboxStyles.inbox}>
      <Head>
        <script
          src="https://kit.fontawesome.com/4eddce3a99.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <h2 className={InboxStyles.title}>Inbox</h2>

      <table className={InboxStyles.table}>
        <thead className={InboxStyles.thead}>
          <tr className={InboxStyles.tr}>
            <th className={InboxStyles.thName}>Name</th>
            <th className={InboxStyles.th}>Email</th>
            <th className={InboxStyles.th}>Message</th>
            <th className={InboxStyles.th}>Sent</th>
            <th className={InboxStyles.th}>Read</th>
            <th className={InboxStyles.th}>Delete</th>
          </tr>
        </thead>
        <tbody className={InboxStyles.body}>
          {messages.map((message, index) => (
            <tr className={InboxStyles.tr} key={index} message={message}>
              <td className={InboxStyles.tdName}>
                <span className={InboxStyles.span}>{message.fullname}</span>
              </td>
              <td className={InboxStyles.td}>
                <span className={InboxStyles.span}>{message.email}</span>
              </td>
              <td className={InboxStyles.td}>
                <span className={InboxStyles.span}>{message.msg}</span>
              </td>
              <td className={InboxStyles.td}>
                <span className={InboxStyles.span}>{message.created_at}</span>
              </td>
              <td className={InboxStyles.td}>
                <a className={InboxStyles.i} onClick={() => onSubmit(message)}>
                  {message.seen === 1 ? (
                    <i className="far fa-envelope"></i>
                  ) : (
                    <i className="far fa-envelope-open"></i>
                  )}
                </a>
              </td>
              <td className={InboxStyles.td}>
                <a
                  className={InboxStyles.i}
                  onClick={() => onDeleteMessage(message.id)}
                >
                  <i className="fas fa-trash"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={InboxStyles.buttonContainer}>
        <a href="/admin" className={InboxStyles.button}>
          Back to admin panel
        </a>
      </div>
    </div>
  );
};

export default inbox;

export const getServerSideProps = async () => {
  const db = await importDb();
  const messages = await db.all("select * from contact");

  return {
    props: { initMessages: messages },
  };
};
