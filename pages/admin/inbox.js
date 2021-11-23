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

    const response = await fetch(`${server}/api/message/${message.id}`, {
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
    const response = await fetch(`${server}/api/messages`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newMessages = await response.json();
    setMessages(newMessages);
  }

  async function onDeleteMessage(id) {
    await fetch(`${server}/api/message/${id}`, {
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
      <h2>messages, inbox</h2>

      <div className={InboxStyles.inboxcontainer}>
        <table className={InboxStyles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>created</th>
              <th>Read</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index} message={message}>
                <td>
                  <span>{message.fullname}</span>
                </td>
                <td>
                  <span>{message.email}</span>
                </td>
                <td>
                  <span>{message.msg}</span>
                </td>
                <td>
                  <span>{message.created_at}</span>
                </td>
                <td>
                  <a onClick={() => onSubmit(message)}>
                    {message.seen === 1 ? (
                      <i class='far fa-envelope'></i>
                    ) : (
                      <i class='far fa-envelope-open'></i>
                    )}
                  </a>
                </td>
                <td>
                  <a onClick={() => onDeleteMessage(message.id)}>
                    Delete from inbox
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link href='/admin' className={InboxStyles.backbtn}>
        Back to admin panel
      </Link>
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
