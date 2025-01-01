import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; 


import { RiReactjsLine } from "react-icons/ri";
import { SiRedux, SiMysql, SiPython, SiDocker, SiKubernetes, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiGithub } from "react-icons/si";
import { DiDjango, DiGit } from "react-icons/di";
import image1 from "../assets/robust_payment_retry.jpg";
import image2 from "../assets/finance_tracker_app.jpg";
import image3 from "../assets/employee_management_system.jpg";
import image4 from "../assets/spotify_to_youtube.jpg";
import image5 from "../assets/smart_utility.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Thasleem Peer D",
  info: "Python developer with proficiency in React, Redux, Django, and SQL, passionate about solving real-world problems through innovative applications.",
};

export const ABOUT = {
  text1:
    "I create efficient and innovative solutions to real-world problems using my tech expertise.",
  text2:
    "Hello! I'm Thasleem, a Python developer passionate about crafting web applications that are not only highly functional but also user-friendly. My expertise lies in React, Redux, Django, and SQL, and I excel at integrating diverse technologies to build seamless digital experiences. I am committed to continuous learning and thrive on turning complex challenges into practical solutions. When I’m not coding, I enjoy exploring new technologies and applying them to meaningful projects, ensuring I stay at the forefront of the ever-evolving tech landscape.",
};

export const PROJECTS = [
  {
    title: "Robust Payment Retry Mechanism",
    subtitle: "A payment system retrying failed transactions up to 5 times within 2 minutes, showing retry counts and success rates.",
    image: image1,
  },
  {
    title: "Finance Tracker App",
    subtitle: "A React-based app for tracking expenses with real-time bank updates using Plaid and advanced data visualization.",
    image: image2,
  },
  {
    title: "Employee Management System",
    subtitle: "A system for managing employee records with role-based access and efficient data handling using Django and PostgreSQL.",
    image: image3,
  },
  {
    title: "Spotify to YouTube Downloader",
    subtitle: "An app automating the download of Spotify playlists or songs as YouTube content, showcasing API integration.",
    image: image4,
  },
  {
    title: "Smart Utility Management System",
    subtitle: "A platform to book daily wage workers like plumbers with real-time slot availability and booking features.",
    image: image5,
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
    href: "mailto:thasleempeer361@gmail.com",
    icon: <FaEnvelope fontSize={25} className="hover:opacity-80" />, // Using FaEnvelope for email
  },
];
