import { importDb } from '../../../config/db';
import { useState } from 'react';
import { server } from '../../../config/server';
import Link from 'next/link';

const messageView = ({ message }) => {
  const [fullname, setFullname] = useState(message.fullname);
  const [email, setEmail] = useState(message.email);
  const [msg, setMsg] = useState(message.msg);
  const [createdAt, setCreatedAt] = useState(message.created_at);
  const [seen, setSeen] = useState(message.seen === 'true' ? true : false);
  const [id, setId] = useState(message.id);

  async function onSeenClick() {
    let updateMessage = {
      fullname,
      email,
      msg,
      created_at: createdAt,
      seen: seen === true ? false : true,
    };

    props.onSeenClick(updateMessage);
  }

  async function onDeleteMessage(id) {
    await fetch(`${server}/api/message/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <div>
      <div>{fullname}</div>
      <div>{email}</div>
      <div>{msg} </div>
      <div>{createdAt} </div>
      <button onClick={onSeenClick}>{seen === true ? 'seen' : 'unread'}</button>
      <Link href='/admin'>Back to admin panel</Link>
      <a onClick={() => onDeleteMessage(message.id)}>Delete from inbox</a>
    </div>
  );
};

export default messageView;

export const getServerSideProps = async (context) => {
  const db = await importDb();
  const message = await db.get('select * from contact where id = ?', [
    context.params.id,
  ]);
  return { props: { message } };
};
