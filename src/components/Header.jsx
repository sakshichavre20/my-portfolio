import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>Sakshi Chavre</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Projects </a>
      <a href="#timeline">Experience</a>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonials</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:chavresakshi@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
