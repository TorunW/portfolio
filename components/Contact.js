import ContactStyles from '../styles/Contact.module.css';
import Link from 'next/link';
import { useState } from 'react';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  // function submitForm() {

  // }

  function formValidation() {
    let isValidated = true;
    if (fullName.length < 1) {
      setFullNameError(true);
      isValidated = false;
    } else {
      setFullNameError(false);
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

  let fullNameErrorDisplay;
  if (fullNameError === true) {
    fullNameErrorDisplay = <p className='error'>Name cannot be empty</p>;
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
            value={fullName}
            // onChange={(e) => setFullName(e.target.value)}
            type='text'
          />
          <label>Name</label>
          {fullNameErrorDisplay}
        </div>

        <div className={ContactStyles.container}>
          <input type='email' />
          <label>Email</label>
          {emailErrorDisplay}
        </div>

        <div className={ContactStyles.container}>
          <textarea type='text'></textarea>
          <label>Message</label>
          {messageErrorDisplay}
        </div>

        <div className='submit'>
          <a className={ContactStyles.btn}>Send message</a>
          {displaySuccessMessage}
        </div>
      </form>
    </contact>
  );
};

export default Contact;
