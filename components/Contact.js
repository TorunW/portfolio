import ContactStyles from "../styles/Contact.module.css";
import Link from "next/link";
import { useState } from "react";

const Contact = (props, contact) => {
  const [fullname, setFullname] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [msg, setMsg] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  function onSubmit() {
    if (formValidation()) {
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

    if (msg.length < 1) {
      setMessageError(true);
      isValidated = false;
    } else {
      setMessageError(false);
    }

    return isValidated;
  }

  let fullnameErrorDisplay;
  if (fullnameError === true) {
    fullnameErrorDisplay = (
      <p className={ContactStyles.error}>Name cannot be empty</p>
    );
  }

  let emailErrorDisplay;
  if (emailError === true) {
    emailErrorDisplay = (
      <p className={ContactStyles.error}>Email isn't valid</p>
    );
  }

  let messageErrorDisplay;
  if (messageError === true) {
    messageErrorDisplay = (
      <p className={ContactStyles.error}>Message cannot be empty </p>
    );
  }

  let displaySuccessMessage;
  if (messageSent === true) {
    displaySuccessMessage = (
      <div>
        <p className={ContactStyles.success}>
          Thank you for your message, I will contact you as soon as possible!
        </p>
      </div>
    );
  }

  return (
    <contact className={ContactStyles.contact} id="contact">
      <form>
        <h2>Send me a message</h2>
        <p>
          If you have any questions or would like to work me, don't hesitate to
          write me a message!
        </p>
        <div className={ContactStyles.contentContainer}>
          <div className={ContactStyles.topContainer}>
            <div className={ContactStyles.input}>
              <label>Name</label>
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
              />
              {fullnameErrorDisplay}
            </div>
            <div className={ContactStyles.input}>
              <label>Email</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} />

              {emailErrorDisplay}
            </div>
          </div>
          <div className={ContactStyles.msgContainer}>
            <label>Message</label>
            <textarea
              type="text"
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            {messageErrorDisplay}
          </div>

          <div className={ContactStyles.submit}>
            <a className={ContactStyles.btn} onClick={onSubmit}>
              Send message
            </a>
            {displaySuccessMessage}
          </div>
        </div>
      </form>
    </contact>
  );
};

export default Contact;
