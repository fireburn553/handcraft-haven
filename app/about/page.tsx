import React from "react";
import styles from "../styles/About.module.css";

const About: React.FC = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Welcome to Handcrafted Haven</h1>
        <p className={styles.heroSubtitle}>Discover the beauty of handmade crafts and support talented artisans.</p>
      </section>
      
      <section className={styles.history}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p className={styles.sectionText}>Handcrafted Haven began with a passion for unique, handmade crafts and a desire to support artisans. Our mission is to connect talented creators with craft enthusiasts, offering a platform where quality meets creativity.</p>
      </section>

      <section className={styles.focus}>
        <h2 className={styles.sectionTitle}>What We Offer</h2>
        <p className={styles.sectionText}>We specialize in a diverse range of handmade items, from beautiful home decor to unique gifts. Each product is carefully curated to ensure authenticity and quality.</p>
        <p className={styles.sectionText}>Our platform provides an easy and enjoyable shopping experience, making it simple to find and purchase your next favorite handmade item.</p>
      </section>

      <section className={styles.benefits}>
        <h2 className={styles.sectionTitle}>Why Shop With Us?</h2>
        <ul className={styles.benefitsList}>
          <li><strong>Quality Assurance:</strong> Each item is handcrafted with care and attention to detail.</li>
          <li><strong>Support Artisans:</strong> Your purchase helps support independent creators and their craft.</li>
        </ul>
      </section>

      <section className={styles.artisans}>
        <h2 className={styles.sectionTitle}>For Artisans</h2>
        <p className={styles.sectionText}>Join our community of artisans and showcase your handmade creations to a wider audience. We offer support and resources to help you succeed.</p>
        <p className={styles.sectionText}>Get in touch with us to learn more about selling your products on our platform.</p>
      </section>

      <section className={styles.cta}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.sectionText}>If you have any questions or would like more information, feel free to <a className={styles.link} href="/contact">contact us</a>.</p>
      </section>
    </main>
  );
};

export default About;

