import React from "react";

import "./../css/Footer.css";

const Footer = () => {
  return (
    <div>
      <section id="services" className="section">
        <h1>Services</h1>
        <p>Details about the services offered.</p>
      </section>
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>
          FinGenuis is the chatbot useed to give financial advises to the users
          and helps them in money management.
        </p>
        <p>
          this chatbot generates the responses by analysing users finnacial
          profile and conditions.
        </p>
        <h3>For More....</h3>
        <h4>Contact Us:</h4>
      </section>
    </div>
  );
};

export default Footer;
