
import './App.css'



const experiences = [
  {
    duration: '2 YEARS EXPERIENCE',
    period: 'JUN 2024 — OCT 2026',
    role: 'IT Support Specialist',
    company: 'Vision Tech',
    description:
      'Worked remotely as an IT Support Specialist, providing technical support and troubleshooting assistance.',
    responsibilities: [],
    tags: ['IT Support', 'Technical Troubleshooting', 'Remote'],
  },
  {
    duration: '1 YEAR EXPERIENCE',
    period: '12 AUG 2025 — 30 SEP 2026',
    role: 'Computer Instructor',
    company: 'Grace Institute of Thoughts',
    description:
      'Delivered computer education and practical IT training to help students develop essential digital skills.',
    responsibilities: [
      'Taught computer fundamentals and essential IT concepts',
      'Guided students through practical computer exercises',
      'Provided support in learning computer applications',
    ],
    tags: ['Computer Education', 'IT Training', 'Student Support'],
  },
  {
    duration: '2 YEARS EXPERIENCE',
    period: '15 FEB 2024 — 31 MAR 2026',
    role: 'Computer Instructor',
    company: 'The Standard Computer Academy',
    description:
      'Delivered structured computer education and practical training through professional computer courses.',
    responsibilities: [
      'Taught OAT, CIT and DIT courses',
      'Provided Microsoft Office and computer fundamentals training',
      'Conducted practical computer lab sessions',
    ],
    tags: ['OAT', 'CIT', 'DIT'],
  },
]

const skillGroups = [
  {
    number: '01',
    title: 'IT Support & Troubleshooting',
    description: 'Technical support and computer system maintenance.',
    skills: [
      'Windows Troubleshooting',
      'Hardware & Software Support',
      'Operating System Installation',
      'Computer Maintenance',
      'Networking Fundamentals',
      'Technical Problem Solving',
    ],
  },
  {
    number: '02',
    title: 'Frontend Development',
    description: 'Building modern and responsive web interfaces.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React.js',
      'Responsive Web Design',
      'Git & GitHub',
    ],
  },
  {
    number: '03',
    title: 'Tools & Productivity',
    description: 'Tools used for technical and professional work.',
    skills: [
      'Visual Studio Code',
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Windows Operating System',
      'Technical Documentation',
    ],
  },
]

const services = [
  {
    number: '01',
    title: 'IT Support',
    description:
      'Computer troubleshooting, software installation, hardware support, system maintenance and technical assistance.',
  },
  {
    number: '02',
    title: 'Web Development',
    description:
      'Creating modern, responsive and user-friendly websites using HTML, CSS, JavaScript and React.',
  },
  {
    number: '03',
    title: 'Computer Education',
    description:
      'Computer instruction, practical training, Microsoft Office education and helping students build digital skills.',
  },
]

const projects = [
 
{
  number: '01',
  category: 'NETWORKING',
  title: 'City-to-Village Wireless Network Deployment',
  description:
    'Designed and independently deployed a point-to-point (PtP) wireless network to extend internet connectivity from a city to a village using Ubiquiti LiteBeam 5AC Gen 2 devices. Completed device configuration, wireless link setup, antenna alignment and connectivity testing.',
  tags: [
    'Ubiquiti LiteBeam 5AC Gen 2',
    'Wireless Networking',
    'Point-to-Point (PtP)',
    'Network Configuration',
    'Antenna Alignment',
  ],
  style: 'project-orange',
},

   {
    number: '02',
    category: 'DATA SCIENCE',
    title: 'Rainfall Pattern Analysis & Prediction',
    description:
      'A Data Science learning project exploring historical rainfall patterns in Sindh, Pakistan (1980–2025), using Python for data analysis, visualization and machine learning experimentation.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn'],
    style: 'project-dark',
    github: 'https://github.com/imshoaiblarik/Rainfall-Pattern-Analysis-and-Prediction-in-Sindh-Pakistan-1980-2025-',
  },
  {
    number: '03',
    category: 'WEB DEVELOPMENT',
    title: 'Personal Portfolio Website',
    description:
      'A responsive React portfolio designed to present my professional background, technical skills, experience and projects.',
    tags: ['React', 'JavaScript', 'CSS'],
    style: 'project-orange',
  },
]

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="logo" aria-label="Shoaib home">
          <h2>S<span>.</span></h2>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-btn" href="#contact">
          Let's Talk ↗
        </a>
      </nav>

      <main>

        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              WELCOME TO MY PORTFOLIO
            </p>

            <h1>
              Hi, I'm Shoaib.<br />
              I Build <span>Digital</span><br />
              Experiences & Solve
              <br />
              Technical Problems.
            </h1>

            <p className="description">
              Computer Science graduate, IT Support Specialist
              and React Developer. Passionate about solving
              technical challenges, supporting users and
              building modern web experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work ↗
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>

              <a
                href="/Shoaib-Hassan-CV.pdf"
                download="Shoaib-Hassan-CV.pdf"
                className="secondary-btn"
              >
                Download CV ↓
              </a>
            </div>

            <div className="availability">
              <span></span>
              Open to IT Support & React Developer opportunities
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-placeholder">
              <img src="/images/Shoaib.jpg" alt="Shoaib Hassan" />
            </div>

            <p>TECH ENTHUSIAST</p>
            <h3>Building. Solving. Creating.</h3>

            <div className="card-line"></div>

            <div className="card-footer">
              <span>IT SUPPORT</span>
              <span>WEB DEVELOPMENT</span>
              <span>COMPUTER EDUCATION</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <p className="eyebrow">01 / ABOUT ME</p>

          <div className="about-grid">
            <div className="about-left">
              <h2>
                Technology is my passion.
                <span> Solving problems is my strength.</span>
              </h2>

              <p>
                I'm Shoaib Hassan, a Computer Science graduate
                with professional experience in computer
                education and a strong interest in IT Support
                and Web Development.
              </p>

              <p>
                Through my experience as a Computer Instructor,
                I've developed communication, technical
                instruction, problem-solving and student
                support skills.
              </p>

              <p>
                My technical interests include Windows
                troubleshooting, hardware and software support,
                computer maintenance, networking fundamentals
                and building responsive web applications using
                React and JavaScript.
              </p>

              <p>
                I'm continuously learning and improving my
                technical abilities to grow professionally in
                IT Support and Frontend Development.
              </p>

              <a href="#contact" className="primary-btn">
                Let's Connect ↗
              </a>
            </div>

            <div className="about-right">
              <div className="about-info-card">
                <p className="eyebrow">EDUCATION</p>
                <h3>Bachelor of Science</h3>
                <p>Computer Science</p>

                <div className="about-divider"></div>

                <p className="info-label">
                  ACADEMIC PERFORMANCE
                </p>
                <h3>3.0 / 4.0 CGPA</h3>
              </div>

              <div className="about-info-card">
                <p className="eyebrow">PROFESSIONAL FOCUS</p>

                <h3>IT Support Specialist</h3>
                <p>
                  Technical troubleshooting, system support
                  and computer maintenance.
                </p>

                <div className="about-divider"></div>

                <h3>React Developer</h3>
                <p>
                  Responsive interfaces and modern web
                  application development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        
{/* EXPERIENCE SECTION */}
<section id="experience" className="section">
  <p className="eyebrow">02 / PROFESSIONAL JOURNEY</p>

  <h2>
    My Work <span>Experience.</span>
  </h2>

  <p>
    My professional experience in IT support, computer
    education, practical IT training and technical assistance.
  </p>

  <div className="experience-list">
    {experiences.map((experience) => (
      <article
        className="experience-card"
        key={experience.company}
      >
        <div className="experience-top">
          <div>
            <p className="project-number">{experience.period}</p>
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
          </div>

          <span className="experience-badge">
            {experience.duration}
          </span>
        </div>

        <p>{experience.description}</p>

        {experience.responsibilities.length > 0 && (
          <ul className="skill-list">
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="project-tags">
          {experience.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <p className="eyebrow">03 / TECHNICAL CAPABILITIES</p>

          <h2>
            My Technical <span>Expertise.</span>
          </h2>

          <p>
            A combination of technical support knowledge,
            development skills and productivity tools.
          </p>

          <div className="service-grid">
            {skillGroups.map((group) => (
              <article key={group.number}>
                <p className="project-number">
                  {group.number} / SKILLS
                </p>

                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <ul className="skill-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section">
          <p className="eyebrow">04 / WHAT I DO</p>

          <h2>
            My Professional <span>Services.</span>
          </h2>

          <p>
            Areas where I can contribute my technical
            knowledge and practical skills.
          </p>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.number}>
                <p className="project-number">
                  {service.number} / SERVICE
                </p>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <p className="eyebrow">05 / SELECTED WORK</p>

          <h2>
            Projects & <span>Practical Work.</span>
          </h2>

          <p>
            A selection of projects and practical work
            demonstrating my technical and development interests.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
              >
                <div
                  className={`project-image ${project.style}`}
                >
                  <span>{project.category}</span>
                </div>

                <div className="project-content">
                  <p className="project-number">
                    PROJECT {project.number}
                  </p>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a
  href={project.github || '#contact'}
  className="project-link"
  target={project.github ? '_blank' : undefined}
  rel={project.github ? 'noreferrer' : undefined}
>
  {project.github ? 'View on GitHub ↗' : 'Discuss Project ↗'}
</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section">
          <p className="eyebrow">06 / GET IN TOUCH</p>

          <div className="contact-heading">
            <h2>
              Have an opportunity?
              <br />
              Let's <span>connect.</span>
            </h2>

            <p>
              I'm interested in IT Support Specialist,
              IT Assistant and React Developer opportunities.
              Let's connect and discuss how I can contribute
              to your team.
            </p>
          </div>

          <div className="contact-grid">
            <a
              href="mailto:imshoaiblarik@gmail.com"
              className="contact-card"
            >
              <span className="contact-icon">✉</span>
              <h3>Email Me</h3>
              <p>imshoaiblarik@gmail.com</p>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/imshoaiblarik"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">in</span>
              <h3>LinkedIn</h3>
              <p>Connect professionally</p>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://github.com/imshoaiblarik"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">⌘</span>
              <h3>GitHub</h3>
              <p>Explore my projects</p>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Shoaib Hassan. Built with React.
        </p>

        <a href="#home">Back to top ↑</a>
      </footer>

    </div>
  )
}

export default App
