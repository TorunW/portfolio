import ContactStyles from '../styles/Contact.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Contact = (props, contact) => {
  const [fullname, setFullname] = useState(contact.fullname);
  const [fullnameError, setFullnameError] = useState(false);
  const [email, setEmail] = useState(contact.email);
  const [emailError, setEmailError] = useState(false);
  const [msg, setMsg] = useState(contact.msg);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  function onSubmit() {
    if (formValidation) {
      let newMessage = {
        fullname,
        email,
        msg,
      };
      props.onSubmit(newMessage);
      setMessageSent(true);
    }
  }

  function formValidation() {
    let isValidated = true;
    if (fullname.length < 1) {
      setFullnameError(true);
      isValidated = false;
    } else {
      setFullnameError(false);
    }

    const patternEmail =
      /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+.([a-zA-Z])+([a-zA-Z])+/;
    const isValidEmail = patternEmail.test(email);
    if (!isValidEmail) {
      setEmailError(true);
      isValidated = false;
    } else {
      setEmailError(false);
    }

    if (message.length < 1) {
      setMessageError(true);
      isValidated = false;
    } else {
      setMessageError(false);
    }

    return isValidated;
  }

  let fullnameErrorDisplay;
  if (fullnameError === true) {
    fullnameErrorDisplay = <p className='error'>Name cannot be empty</p>;
  }

  let emailErrorDisplay;
  if (emailError === true) {
    emailErrorDisplay = <p className='error'>Email isn't valid</p>;
  }

  let messageErrorDisplay;
  if (messageError === true) {
    messageErrorDisplay = <p className='error'>Message cannot be empty </p>;
  }

  let displaySuccessMessage;
  if (messageSent === true) {
    displaySuccessMessage = (
      <div>
        <p className='success'>
          Thank you for your message, I will contact you as soon as possible!
        </p>
      </div>
    );
  }

  return (
    <contact className={ContactStyles.contact} id='contact'>
      <form>
        <div className={ContactStyles.container}>
          <input
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            type='text'
          />
          <label>Name</label>
          {fullnameErrorDisplay}
        </div>

        <div className={ContactStyles.container}>
          <input
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            type='text'
          />
          <label>Email</label>
          {emailErrorDisplay}
        </div>

        <div className={ContactStyles.container}>
          <textarea
            type='text'
            onChange={(e) => setMsg(e.target.value)}
            type='text'
          ></textarea>
          <label>Message</label>
          {messageErrorDisplay}
        </div>

        <div className='submit'>
          <a className={ContactStyles.btn} onClick={onSubmit}>
            Send message
          </a>
          {displaySuccessMessage}
        </div>
      </form>
    </contact>
  );
};

export default Contact;
