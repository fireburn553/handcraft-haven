import React from "react";
import styles from "../styles/Contact.module.css";
import FreeShippingText from "../components/header/FreeShippingText";

const Contact: React.FC = () => {
    return (
      <>
        <FreeShippingText />
        <main className={styles.container}>
        <div className={styles.contactForm}>
          <span className={styles.heading}>Contact Us</span>
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message"
              name="message"
              rows={4}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      </>
    );
  };
  
  export default Contact;
