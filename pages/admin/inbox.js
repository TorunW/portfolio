import { importDb } from '../../config/db';
import { server } from '../../config/server';
import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import InboxStyles from '../../styles/Inbox.module.css';

const inbox = ({ initMessages }) => {
  const [messages, setMessages] = useState(initMessages);

  async function onSubmit(message) {
    message.seen = message.seen === 1 ? 0 : 1;

    const response = await fetch(`/api/message/${message.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    await response.json();
    getMessages();
  }

  async function getMessages() {
    const response = await fetch(`/api/messages`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newMessages = await response.json();
    setMessages(newMessages);
  }

  async function onDeleteMessage(id) {
    await fetch(`/api/message/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    getMessages();
  }

  return (
    <div className={InboxStyles.inbox}>
      <Head>
        <script
          src='https://kit.fontawesome.com/4eddce3a99.js'
          crossorigin='anonymous'
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
                    <i className='far fa-envelope'></i>
                  ) : (
                    <i className='far fa-envelope-open'></i>
                  )}
                </a>
              </td>
              <td className={InboxStyles.td}>
                <a
                  className={InboxStyles.i}
                  onClick={() => onDeleteMessage(message.id)}
                >
                  <i className='fas fa-trash'></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={InboxStyles.buttonContainer}>
        <a href='/admin' className={InboxStyles.button}>
          Back to admin panel
        </a>
      </div>
    </div>
  );
};

export default inbox;

export const getServerSideProps = async () => {
  const db = await importDb();
  const messages = await db.all('select * from contact');

  return {
    props: { initMessages: messages },
  };
};
