import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; 


import { RiReactjsLine } from "react-icons/ri";
import { SiRedux, SiMysql, SiPython, SiDocker, SiKubernetes, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiGithub } from "react-icons/si";
import { DiDjango, DiGit } from "react-icons/di";
import image1 from "../assets/robust_payment_retry.jpg";
import image2 from "../assets/finance_tracker_app.jpg";
import employee_management from "../assets/employee_management_system.jpg";
import image4 from "../assets/spotify_to_youtube.jpg";
import smart_utility from "../assets/smart_utility.jpg";
import fake_snap from '../assets/fake_snap.jpg';
import career_insights from '../assets/career_insights.jpg';
import smart_attendance from '../assets/smart_attendance.jpeg'
import hangman_port from '../assets/hangman_port.jpg'



export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Thasleem Peer D",
  info: "Full-stack Python developer skilled in Django, React, and Docker, building real-world solutions through robust, scalable applications.",
};

export const ABOUT = {
  text1:
    "I specialize in developing real-world tech solutions that combine intelligent backends with interactive frontends.",
  text2:
    "Hi, I'm Thasleem — a passionate full-stack developer with hands-on experience in building practical, impactful applications like AI-generated image detectors, face recognition systems, smart utilities, resume analyzers, and interactive games. My core stack includes Python, Django, React, Docker, and SQL. From deploying containerized applications to integrating machine learning into real-world tools, I enjoy crafting solutions that solve meaningful problems. I'm constantly pushing boundaries and love collaborating on innovative tech projects.",
};




export const PROJECTS = [
  {
    title: "FakeSnap – AI-Generated Image Detector",
    subtitle: "Detects AI-generated (fake) images by analyzing pixel patterns and statistical features using a Python + Django backend.",
    image: fake_snap,
    link: "https://github.com/ThasleemPeer/Fake-Image-Detector.git",
  },
  {
    title: "Smart Utility Management System",
    subtitle: "Platform for booking daily utility services with real-time slot availability, built using Django and React.",
    image: smart_utility,
    link: "https://github.com/ThasleemPeer/Smart-utility-Management-System.git",
  },
  {
    title: "Smart Attendance System",
    subtitle: "Face recognition-based attendance system using Django REST API and Image Encoding for automated student marking.",
    image: smart_attendance,
    link: "https://github.com/ThasleemPeer/Smart-Attendance-System.git",
  },
  {
    title: "Dockerized Hangman Game",
    subtitle: "Full-stack Hangman game with CSS animations and sound effects, deployed using Podman containers.",
    image: hangman_port,
    link: "https://github.com/Peer361/Hangman_game--Podman-Deployment",
  },
  {
    title: "Career Insights Engine",
    subtitle: "Resume analyzer and career recommender that extracts skills and suggests personalized growth paths using ML.",
    image: career_insights,
    link: "https://github.com/ThasleemPeer/Career-Insights-Engine.git",
  },
  {
    title: "Employee Management System",
    subtitle: "Role-based employee record manager using Django with CRUD operations and PostgreSQL integration.",
    image: employee_management,
    link: "https://github.com/ThasleemPeer/Employee-Management-System.git",
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
  },
  {
    icon: <SiRedux className="text-4xl lg:text-6xl text-purple-600" />,
    name: "Redux",
  },
  {
    icon: <DiDjango className="text-4xl lg:text-6xl text-green-700" />,
    name: "Django",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "MySQL",
  },
  {
    icon: <SiPython className="text-4xl lg:text-6xl text-blue-500" />,
    name: "Python",
  },
 
  {
    icon: <SiJavascript className="text-4xl lg:text-6xl text-yellow-400" />,
    name: "JavaScript",
  },
  {
    icon: <SiBootstrap className="text-4xl lg:text-6xl text-purple-700" />,
    name: "Bootstrap",
  },
  {
    icon: <DiGit className="text-4xl lg:text-6xl text-red-600" />,
    name: "Git",
  },
  {
    icon: <SiGithub className="text-4xl lg:text-6xl text-gray-400" />,
    name: "GitHub",
  },
  {
    icon: <SiDocker className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Docker",
  },
  {
    icon: <SiKubernetes className="text-4xl lg:text-6xl text-blue-400" />,
    name: "Kubernetes",
  },
];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/ThasleemPeer",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/thasleem-peer-d-591791280/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "mailto:abbu22122004@gmail.com",
    icon: <FaEnvelope fontSize={25} className="hover:opacity-80" />, // Using FaEnvelope for email
  },
];
