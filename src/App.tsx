import './App.css';
import { GraduationCap, Phone, Mail, MapPin, Download, ChessPawn } from 'lucide-react';
import Portrait1 from './assets/portrait.jpeg';
import Portrait2 from './assets/portrait2.jpeg';
import Portrait3 from './assets/portrait3.jpeg';
import QRCode from './assets/Linked in.svg';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import CV from "./assets/CV.pdf"

const REGAL_GOLD_GRADIENT = 'linear-gradient(145deg, #FFEFD5 0%, #D4AF37 35%, #FFEFD5 65%, #C9A028 100%)';
const getPercentage = (level: string) => {
  switch (level) {
    case "Beginner": return 50;
    case "Intermediate": return 70;
    case "Advanced": return 90;
    case "Expert": return 100;
    default: return 50;
  }
};

const Sparkle = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="black" className="opacity-80">
    <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
  </svg>
);

const CrossHair = ({ className }: { className?: string }) => (
  <div className={`cross-star ${className}`}>
    <div className="dot" />
  </div>
);

const Topnav: React.FC = () => {
  // Helper for that gold gradient text
  const goldTextStyle = {
    background: REGAL_GOLD_GRADIENT,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  };

  return (
    <nav className="sticky top-0 z-[100] w-full backdrop-blur-lg border-b border-black/5 font-sans uppercase font-bold tracking-[2px] text-[13px] sm:text-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-center sm:justify-end px-6 md:px-10 h-16 gap-6 md:gap-10">
        {[
          { name: 'Home', href: '#home' },
          { name: 'About Me', href: '#introduction' },
          { name: 'Education', href: '#education' },
          { name: 'Experience', href: '#experience' },
          { name: 'Skills', href: '#skills' },
          { name: 'Projects', href: '#projects' },
          { name: 'Contact me', href: '#contact' },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="transition-opacity duration-300 whitespace-nowrap hover:opacity-70"
            style={goldTextStyle}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#d2cdc4] overflow-hidden border-b border-black/5 mb-10">
      <div className="left-margin-strip" />
      <CrossHair className="absolute top-10 right-10" />
      <CrossHair className="absolute bottom-20 left-[60px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center pl-14 pr-12">
        <div className="space-y-2">
          <h1 className="text-[80px] font-serif leading-[0.9] uppercase tracking-tighter text-black">
            Morwetsana<br />Mahlatse<br />Pule
          </h1>
          <p className="text-md mb-[16px] capitalize tracking-tight font-medium mt-4 text-black/80">Software Development • Cybersecurity • Networking</p>
          <span
            className='relative p-[2px] rounded-lg flex items-center justify-center w-60 mt-[40rem] mx-auto cursor-pointer transition-transform hover:scale-105 active:scale-95'
            style={{ background: REGAL_GOLD_GRADIENT }}
            onClick={() => window.open(CV, '_blank', 'noopener,noreferrer')}
          >
            <div className="bg-[#d2cdc4] w-full h-full py-4 rounded-[6px] flex gap-4 items-center justify-center font-bold text-black">
              <Download size={20} />
              Download CV
            </div>
          </span>
        </div>

        <div className="flex justify-center md:justify-end ml-10">
          <div className="w-[380px] h-[480px] bg-[#d2cdc4] shape-hero shadow-2xl border-[12px] border-[#d2cdc4] overflow-hidden">
            <div
              className="w-full h-full p-[3px] shape-hero"
              style={{ background: REGAL_GOLD_GRADIENT }}
            >

              {/* Inner Layer (The Actual Image) */}
              <div className="w-full h-full overflow-hidden shape-hero bg-[#8b6b58]">
                <img
                  src={Portrait2}
                  className="w-full h-full object-cover"
                  alt="Portrait"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );

};

const Introduction = () => (
  <section id="introduction" className="relative py-24 bg-[#d2cdc4] border-b border-black/5 my-10">
    <div className="left-margin-strip" />
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 pl-24 pr-12 relative z-10">
      <div className="space-y-12">
        <div className="relative">
          <h2 className="text-7xl font-serif mb-8">Introduction</h2>
          {/* The thin L-bracket */}
          <div className="absolute -left-10 top-0 bottom-0 w-px bg-black/20" />
          <div className="absolute -left-10 bottom-0 h-px w-8 bg-black/20" />
        </div>

        <div className="space-y-6 text-black">
          <div>
            <h3 className="text-lg font-bold mb-2">About me</h3>
            <p className="text-[15px] leading-relaxed text-black/80">
              My name is Morwetsana Mahlatse Pule. I am a soon-to-be BCom Informatics graduate from the University of Pretoria with a growing interest in software development, cybersecurity, and networking. I enjoy building practical solutions, learning new technologies, and continuously challenging myself to grow within the technical space.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Personal projects</h3>
            <p className="text-[15px] leading-relaxed text-black/80">
              My projects range from academic systems and full-stack applications to smaller personal projects focused on improving my technical and problem-solving skills. Through these projects, I have explored software development, databases, analytics, automation, and foundational cybersecurity concepts.
            </p>
          </div>

        </div>
      </div>

      <div className="flex justify-center items-center relative">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-20"><Sparkle /></div>
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-20"><Sparkle /></div>
        <div className="w-[320px] h-[450px] shape-arch overflow-hidden border-[1px] border-black/20 p-3">
          <img src={Portrait1} className="w-full h-full object-cover shape-arch" />
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section id="education" className="relative py-24 bg-[#d2cdc4] my-10">
    <div className="absolute top-10 left-10 opacity-20"><Sparkle /></div>
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-12">
      <div>
        <h2 className="text-7xl font-serif mb-16">Education</h2>
        <div className="space-y-12">
          {[
            { date: 'Feb 2023', lvl: 'undergraduate', school: "University of Pretoria", deg: "BCom specialising in Informatics", place: 'South Africa, Pretoria' },
            { date: 'Dec 2022', lvl: `Bachelar's Pass`, school: "Hoërskool Birchleigh", deg: "National Senior Certificate", place: 'South Africa, Kempton Park' }
          ].map((edu, i) => (
            <div key={i} className="flex gap-6 items-start">
              <GraduationCap size={40} fill="black" color='black' strokeWidth='0.5px' />
              <div className='flex flex-row gap-10 items-start'>
                <section className='text-left'>
                  <h3 className='text-sm text-black font-bold font-sans'>{edu.date}</h3>
                  <p className='italic text-xs text-black'>Present</p>
                </section>
                <section className='font-sans text-black text-left flex-1 text-sm capitalize'>
                  <h4 className="font-sans font-bold text-sm">{edu.deg}</h4>
                  <p>{edu.lvl}</p>
                  <p>{edu.school}</p>
                  <p>| {edu.place}</p>
                </section>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-0 right-0 z-20"><Sparkle /></div>
        <div
          className="w-full h-98 shape-education p-[2px]"
          style={{ background: REGAL_GOLD_GRADIENT }}
        >
          <div className="w-full h-full bg-[#d2cdc4] shape-education overflow-hidden p-3">

            <img
              src={Portrait3}
              className="w-full h-98 object-cover shape-education"
              alt="Education Illustration"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="relative py-20 bg-[#d2cdc4] border-t border-black/5 my-10">
    <div className="absolute top-10 right-10"><Sparkle /></div>
    <div className="absolute bottom-20 left-10"><Sparkle /></div>
    <CrossHair className="absolute top-1/3 right-20" />
    <CrossHair className="absolute bottom-1/4 left-[5%]" />
    
    <div className="max-w-6xl mx-auto px-12 relative z-10">
      <h2 className="text-7xl font-serif mb-10 text-left">Experience</h2>

      <div className="space-y-16 overflow-y-scroll h-[25rem]">
        {[
          {
            role: "tutor",
            company: "Tutor Doctor",
            date: "Jan 2026",
            present: true,
            description: `Provide one-on-one tutoring across multiple academic levels (primary through university) in
                          Mathematics, English, Financial Accounting, Economics, Information Technology, Advanced
                          Coding, and Information Systems. Tailor teaching approaches to individual student needs,
                          learning styles, and subject complexities. Develop explanations that bridge conceptual gaps and
                          reinforce foundational understanding.`
          },
          {
            role: "Intern",
            company: "Redshift Cybersecurity, Winnie Mandela Drive & Leslie Avenue",
            date: "Nov 2025 – Dec 2025",
            description: `Completed hands-on training in cybersecurity fundamentals, including penetration testing,
                          network security, and incident response using Kali Linux and virtualised lab environments.
                          Gained exposure to red and blue team methodologies, vulnerability assessment, and basic
                          digital forensics through guided practical exercises.`
          },
          {
            role: "Teaching Assistant",
            company: "University Of Pretoria, Pretoria, Hatfield" ,
            date: "Feb 2025 – Nov 2025 ",
            description: `As a Teaching Assistant in the Department of Informatics, I support course delivery
                          by assisting with tutoring, grading, and administrative tasks. My role ensures that
                          students receive the necessary academic support while contributing to the smooth
                          operation of the department.`
          },
          {
            role: "Trainee/ Vocational work",
            company: "Nedbank, Sandown, Sandton",
            date: "Jun 2025 – Jul 2025 ",
            description: `As a trainee in the organisation, I am exposed to the working environment as well as
                          the typica workings of an IT professional, via the mentors and manager(s) within the
                          environment.`
          }
        ].map((job, i) => (
          <div key={i} className="grid md:grid-cols-[200px_1fr] gap-8 items-start relative">
            {/* Add a little sparkle next to each job */}
            {i === 0 && <div className="absolute -left-6 -top-2"><Sparkle /></div>}
            
            <div className="relative flex items-center gap-4">
              <ChessPawn size={20} fill="black" />
              <span className="text-xs font-bold uppercase text-left">
                {job.date} <br />
                <p className='text-xs italic'>{job.present ? 'Present' : null}</p>
              </span>
            </div>

            <div className="space-y-2 border-l border-black/10 pl-8 text-left">
              <h3 className="text-2xl font-sans font-bold capitalize">{job.role}</h3>
              <p className="text-sm font-bold uppercase text-black/60">{job.company}</p>
              <p className="text-[15px] leading-relaxed text-black/80 max-w-2xl">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Technical = () => (
  <section id="skills" className="py-24 px-12 bg-[#d2cdc4] border-t border-black/5 my-10">
    <div className="max-w-5xl mx-auto border border-black/40 p-16 relative">
      <div className="absolute top-4 left-4"><Sparkle /></div>
      <div className="absolute bottom-4 right-4"><Sparkle /></div>

      <h2 className="text-6xl font-serif mb-8 text-center">Technical Skills</h2>
      <p className="text-center max-w-2xl mx-auto mb-16 text-sm leading-relaxed text-black">
        I have developed a foundation across software development, databases, networking, and cybersecurity through academic work, personal projects, and self-study. While still growing in many areas, I enjoy learning new technologies and expanding both my technical and practical skill set.
      </p>

      <div className="flex overflow-scroll gap-12">
        {[
          { label: "JavaScript", level: "Intermediate" },
          { label: "C#", level: "Advanced" },
          { label: "Python", level: "Intermediate" },
          { label: "Express.js", level: "Intermediate" },
          { label: "MS SQL", level: "Advanced" },
          { label: "Postgres", level: "Intermediate" },
          { label: "MongoDB", level: "Intermediate" },
          { label: "Kali Linux", level: "Beginner" },
          { label: "Nmap", level: "Beginner" },
          { label: "Burp Suite", level: "Beginner" },
          { label: "Cisco Packet Tracer", level: "Beginner" },
          { label: "Penetration Testing", level: "Beginner" },
          { label: "Data Modelling", level: "Advanced" },
          { label: "Networking Fundamentals", level: "Advanced" },
          { label: "Web App Security", level: "Intermediate" },
          { label: "Microsoft Office", level: "Advanced" },
        ].map((s, i) => {
          const percentage = getPercentage(s.level);
          return (
            <div key={i} className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full flex items-center justify-center mb-6 relative">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="77" cy="78" r="72.95"
                    fill="transparent"
                    stroke="#8b6b58"
                    strokeWidth="8"
                    strokeDasharray={`${percentage * 4.7} 400`}
                  />
                </svg>
                <span className="text-sm font-sans italic">{s.level}</span>
                {/* Or show percentage: {percentage}% */}
              </div>
              <p className="font-bold text-xs uppercase tracking-tighter text-center text-black">{s.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Management = () => (
  <section className="py-24 px-12 bg-[#d2cdc4] border-t border-black/5 my-10">
    <div className="max-w-5xl mx-auto border border-black/40 p-16 relative">
      <div className="absolute top-4 left-4"><Sparkle /></div>
      <div className="absolute bottom-4 right-4"><Sparkle /></div>

      <h2 className="text-6xl font-serif mb-8 text-center">Management Skills</h2>
      <p className="text-center max-w-2xl mx-auto mb-16 text-sm leading-relaxed text-black">
        Beyond technical work, I have experience using collaborative and organisational tools within academic and project environments. These skills have helped me communicate effectively, manage tasks, and work efficiently within teams.
      </p>

      <div className="flex overflow-scroll gap-12 justify-center">
        {[
          { label: "Zoom", level: "Advanced" },
          { label: "JIRA", level: "Advanced" },
          { label: "power bi", level: "Beginner" },
        ].map((s, i) => {
          const percentage = getPercentage(s.level);
          return (
            <div key={i} className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full flex items-center justify-center mb-6 relative">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="77" cy="78" r="72.95"
                    fill="transparent"
                    stroke="#8b6b58"
                    strokeWidth="8"
                    strokeDasharray={`${percentage * 4.7} 400`}
                  />
                </svg>
                <span className="text-sm font-sans italic">{s.level}</span>
                {/* Or show percentage: {percentage}% */}
              </div>
              <p className="font-bold text-xs uppercase tracking-tighter text-center text-black">{s.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Interpersonal = () => (
  <section className="py-24 px-12 bg-[#d2cdc4] border-t border-black/5 my-10">
    <div className="max-w-5xl mx-auto border border-black/40 p-16 relative">
      <div className="absolute top-4 left-4"><Sparkle /></div>
      <div className="absolute bottom-4 right-4"><Sparkle /></div>

      <h2 className="text-6xl font-serif mb-8 text-center capitalize">Interpersonal and Soft Skills</h2>
      <p className="text-center max-w-2xl mx-auto mb-16 text-sm leading-relaxed text-black">
        I value clear communication, collaboration, and adaptability in both academic and professional environments. Working in teams, tutoring, and assisting others has strengthened my ability to work with people and approach challenges calmly and practically.
      </p>

      <div className="flex overflow-scroll gap-12 justify-center">
        {[
          { label: "Teamwork", level: "Advanced" },
          { label: "Collaboration", level: "Advanced" },
          { label: "Leadership skills", level: "Intermediate" },
          { label: "Communication skills", level: "Advanced" },
        ].map((s, i) => {
          const percentage = getPercentage(s.level);
          return (
            <div key={i} className="flex flex-col items-center">
              <div className="w-36 h-36 rounded-full flex items-center justify-center mb-6 relative">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="77" cy="78" r="72.95"
                    fill="transparent"
                    stroke="#8b6b58"
                    strokeWidth="8"
                    strokeDasharray={`${percentage * 4.7} 400`}
                  />
                </svg>
                <span className="text-sm font-sans italic">{s.level}</span>
                {/* Or show percentage: {percentage}% */}
              </div>
              <p className="font-bold text-xs uppercase tracking-tighter text-center text-black">{s.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "final year: capstone project",
      description: 'A client-focused management system developed for Cirrus Bridge that centralises operational data from platforms such as JIRA, Toggl, and Paymo into a single application for analytics, administration, and business insights.',
      technologies: ['React', 'Node.js', 'EJS', 'Docker', 'SQL', 'TypeScript'],
      status: "Completed",
      statusColor: "bg-green-500",
      github: 'https://github.com/INF-370-2025/inf-370-team01',
      demo: 'https://zealous-meadow-07ff63b03.2.azurestaticapps.net/',
      type: 'Management'
    },
    {
      id: 2,
      title: "Daily Digest",
      description: 'A news aggregation platform that curates live crypto data and analytics as well as recent South African news articles and headlines',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Python', 'MongoDB'],
      status: "Completed",
      statusColor: "bg-green-500",
      github: 'https://github.com/AnaPule/daily-digest',
      demo: 'https://daily-digest-8oa1-pl0wjja2f-anapules-projects.vercel.app/',
      type: "News and Currency"
    },
    {
      id: 3,
      title: "Bookmark",
      description: "A social interaction platform allowing readers a central place to discover, read and discuss books they have taken interest in - all with other readers with the same interest.",
      technologies: ['React', 'Java', 'SpringBoot', 'Postgres', 'MongoDB'],
      status: "In development",
      statusColor: "bg-yellow-500",
      github: "https://github.com/AnaPule/port",
      demo: "https://demo2.yourproject.com",
      type: "Social & Management"
    }
  ];

  return (
    <section id="projects" className="py-24 px-12 bg-[#d2cdc4] my-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-serif mb-4">Featured Projects</h2>
          <div className="w-24 h-0.5 bg-black/20 mx-auto mb-6"></div>
          <p className="text-base max-w-2xl mx-auto leading-relaxed text-black/70">
            A collection of my work in Virtual Assistance, UI/UX Design, and Automation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-black/10 hover:border-black/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >

              {/* Content */}
              <div className="p-6">
                {/* Type Badge */}
                <div className="mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider bg-black/5 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 font-serif capitalize">{project.title}</h3>
                <p className='text-sm mb-5'>{project.status}</p>

                {/* Description */}
                <p className="text-sm text-black/70 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-black/5 rounded-full font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-black/10">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors group/link"
                    >
                      <span className="underline decoration-black/20 group-hover/link:decoration-black/60">GitHub</span>
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors group/link"
                    >
                      <span className="underline decoration-black/20 group-hover/link:decoration-black/60">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 px-12 bg-[#d2cdc4] relative">
    <div className="right-margin-strip" />
    <div className="absolute top-10 right-20"><CrossHair /></div>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">

      <div
        className="w-80 h-[450px] shape-arch p-[2px]"
        style={{ background: REGAL_GOLD_GRADIENT }}
      >
        <div
          className="w-full h-full bg-[#d2cdc4] shape-arch p-4 overflow-hidden"
        >
          <div className="w-full h-full shape-arch overflow-hidden">
            <img
              src={Portrait2}
              className="w-full h-full object-cover"
              alt="Portrait"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-8">
        <h2 className="text-7xl font-serif leading-none text-black text-left">Let's Work<br />Together</h2>
        <div className="space-y-4 text-ms text-black">
          <div className="flex items-center gap-4"><span><Phone size={20} fill='black' color='black' /></span>+27 63-519-9397</div>
          <div className="flex items-center gap-4"><span><Mail size={20} color='black' /></span>morwetsana.pule@gmail.com</div>
          <div className="flex items-center gap-4"><span><MapPin size={20} color='black' /></span>Pretoria, South Africa</div>
          <div className="flex items-center gap-4"><span>🔗</span> Morwetsana Pule</div>
        </div>
        <div>
          <div className="w-24 h-24 bg-black p-2 rounded-md">
            <img src={QRCode} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen">
      <Topnav />
      <Hero />
      <Introduction />
      <Education />
      <Experience />
      <section className='flex flex-col lg:flex-row gap-10 overflow-scroll'>
        <Technical />
        <Management />
        <Interpersonal />
      </section>
      <Projects />
      <Contact />
    </div>
  )
}

export default App;