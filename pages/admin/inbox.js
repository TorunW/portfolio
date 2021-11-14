import { importDb } from '../../config/db';
import { server } from '../../config/server';
import { useState } from 'react';
import Link from 'next/link';

const inbox = ({ initMessages }) => {
  const [messages, setMessages] = useState(initMessages);

  async function onSubmit() {
    const response = await fetch(`${server}/api/message/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateMessage),
    });
  }

  return (
    <div>
      <h2>messages, inbox</h2>

      {messages.map((message, index) => (
        <div key={index} message={message}>
          <li>{message.fullname}</li>
          <li>{message.email}</li>
          <li>{message.msg}</li>
          <li>{message.created_at}</li>
          <button>{message.seen === true ? 'seen' : 'unread'}</button>
          <a onClick={() => onDeleteMessage(message.id)}>Delete from inbox</a>
        </div>
      ))}
      <Link href='/admin'>Back to admin panel</Link>
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
