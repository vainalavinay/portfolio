import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Scroll animations
const Section = ({ title, children, aosEffect }) => (
  <motion.section
    className="section mb-5"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    data-aos={aosEffect || "fade-up"}
  >
    <h2>{title}</h2>
    <div>{children}</div>
  </motion.section>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Check for dark mode in local storage
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };
  

  return (
    <div className={`font-sans ${darkMode ? 'dark-mode' : 'bg-light'} text-dark`}>
      {/* Header with background image */}
      <motion.header
        className="text-center py-5 bg-cover bg-center header-gradient"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="overlay">
          <h1 className="display-4 font-weight-bold text-white">Vainala. Vinay Kumar</h1>
          <p className="lead mt-2 text-white">Java | Spring Boot | React | AWS | Full Stack Developer</p>
          <div className="d-flex justify-content-center gap-4 mt-4 fs-2 text-primary">
            <a href="https://github.com/vainalavinay" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/vinay-kumar-vainala/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:vainalavinayvvk098@gmail.com"><FaEnvelope /></a>
          </div>
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="btn btn-light position-absolute top-0 end-0 m-3"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon />}
          </button>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container py-5">
        <Section title="About Me" aosEffect="fade-left">
          <p>
            Full-stack developer with a strong Java backend foundation and hands-on experience in React, Spring Boot,
            and AWS deployments. Passionate about building scalable systems and clean user interfaces.
          </p>
        </Section>

        {/* Skills with animations */}
        <Section title="Skills" aosEffect="fade-right">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm skills-card">
                <div className="card-body">
                  <h5 className="card-title">Backend Development</h5>
                  <p className="card-text">Java, Spring Boot, Hibernate, Microservices</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm skills-card">
                <div className="card-body">
                  <h5 className="card-title">Frontend Development</h5>
                  <p className="card-text">React.js, Angular, HTML, CSS, JavaScript</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow-sm skills-card">
                <div className="card-body">
                  <h5 className="card-title">Cloud & DevOps</h5>
                  <p className="card-text">AWS (EC2, Amplify, EBS, CodePipeline), CI/CD</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Projects with hover effects */}
        <Section title="Projects" aosEffect="zoom-in">
          <div className="row">
            <div className="col-md-4">
              <div className="card project-card shadow-lg">
              <img src="/portfolio/assets/image_asset.jpg" alt="Project" className="card-img-top" />
              <div className="card-body">
                  <h5 className="card-title">Banking Application</h5>
                  <p className="card-text">Full-stack banking app built with Spring Boot and React.</p>
                  <a href="https://github.com/vainalavinay/banking" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Repo</a>
                </div>
              </div>
            </div>
            {/* Repeat for other projects */}
          </div>
        </Section>

        <Section title="Resume">
          <a className="text-primary" href="/portfolio/assets/Vinay.pdf" download>
            Download My Resume
          </a>
        </Section>

        <Section title="Contact">
          <p>If you'd like to get in touch with me, feel free to email me directly!</p>
          <p>Email: vainalavinayvvk098@gmail.com</p>
        </Section>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 text-muted">
        &copy; {new Date().getFullYear()} V. Vinay Kumar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
