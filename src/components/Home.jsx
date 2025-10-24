import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="content">
      <section className="hero">
        <div className="home-image">
          <img className="vitto-img" src="src\assets\DSCF0100.jpg" alt="Vitto Genuino" />
        </div>

        <div className="content-greeting">
          <h2>Hello, I'm Vitto Genuino</h2>
          <p>This is the main landing page of the application.</p>
          <button className="resume-btn">Download Resume</button>
        </div>
      </section>

      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I'm Vitto Genuino, a passionate developer with experience in building web applications.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1: A web application for managing tasks.</li>
        </ul>
        <Link to="/projects">Go to Projects Page</Link>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email or social media.</p>
      </section>
    </div>
  )
}

export default Home