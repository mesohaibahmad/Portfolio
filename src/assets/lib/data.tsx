import {
  FiGithub,
  FiLink,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import {
  GoHome,
  GoPerson,
  GoMail,
  GoStack,
  GoProject,
} from "react-icons/go";

import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import trelloicon from "../../assets/icons/trelloicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import nestjsicon from "../../assets/icons/Nestjsicon.svg";
import neticon from "../../assets/icons/NETicon.svg";
import netcoreicon from "../../assets/icons/NETcoreicon.svg";
import sqlicon from "../../assets/icons/SQLDevelopericon.svg";
import swaggericon from "../../assets/icons/Swaggericon.svg";
import postmanicon from "../../assets/icons/Postmanicon.svg";
import vsicon from "../../assets/icons/VisualStudioIcon.svg";
import githubicon from "../../assets/icons/GitHubicon.svg";
import githubwhite from "../../assets/icons/githubwhite.svg";
import githubactionsicon from "../../assets/icons/GitHubActionsicon.svg";
import jqueryicon from "../../assets/icons/jQueryicon.svg";
import bootstrapicon from "../../assets/icons/bootstrapicon.svg";
import vercelicon from "../../assets/icons/Vercelicon.svg";


import RACASMockup from "../../assets/img/RACAS_mockup.png";
import instorMockup from "../../assets/img/instor_mockup.webp";
import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";

import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";

import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

// Header
export const headerIntroData = {
  title: "Hi, I'm Sohaib",
  subtitle: "Fullstack Developer",
  description:
    "I'm Sohaib, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  buttons: [
    { name: "Contact", label: "Contact me", icon: FiMail, color: "main-btn" },
    { name: "Projects", label: "My Projects", icon: FiGithub, color: "secondary-btn" },
  ],
  profilepicture: profilepicture,
} as const;

// Projects
export const projectsData = [
  {
    title: "RACAS",
    description:
      "RACAS is a Payment Request Management System designed for the multinational Company. It automates the submission, review, and approval of payment requests between External Assembly Partners (EAPs) and internal staff. A web-based, secure, role-driven, and branch-aware platform. It provides reporting with machine learning-based trend predictions for better financial planning.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Vue JS", icon: vuejsicon },
      { name: "Bootstrap", icon: bootstrapicon },
      { name: ".NET", icon: neticon },
      { name: ".NET Core", icon: netcoreicon },
      { name: "SQL", icon: sqlicon },
      { name: "REST Api", icon: apiicon },
      { name: "Github Actions", icon: githubactionsicon },
    ],
    image: RACASMockup,
    deploymenturl: "http://racas.runasp.net/",
    githuburl: "",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "OfferXpress",
    description:
      "OfferXpress is a Customer Offer Management System built with ASP.NET Core MVC, Bootstrap, Vue.js, and SQL, enabling users to create, manage, and generate multilingual, branch-specific customer offers with tax and VAT calculations. It features dynamic form validation, PDF generation, and access control based on user roles.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Vue JS", icon: vuejsicon },
      { name: "Bootstrap", icon: bootstrapicon },
      { name: ".NET", icon: neticon },
      { name: ".NET Core", icon: netcoreicon },
      { name: "SQL", icon: sqlicon },
      { name: "REST Api", icon: apiicon },
      
    ],
    image: silentmoonMockup,
    deploymenturl: "http://OfferXpress.runasp.net/",
    githuburl: "https://github.com/mesohaibahmad/OfferXpress",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Dev-Sharks",
    description:
      "Dev-Sharks is a Fiverr-style freelance marketplace built with React JS and Bootstrap, featuring reusable components like gig cards, category sliders, and dynamic search. The project emphasizes modular design and a scalable frontend architecture for a smooth user experience.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Bootstrap", icon: bootstrapicon },
      { name: "Vercel", icon: vercelicon },
    ],
    image: instorMockup,
    deploymenturl: "https://dev-sharks.vercel.app/",
    githuburl: "https://github.com/mesohaibahmad/DevSharks",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: "More Projects on Github",
} as const;


export const skillsDataFront = [ { skillsTitle: "Frontend", 
  skills: [ 
    { title: "HTML", hash: "#html", icon: htmlicon, color: "#F1662A", },
    { title: "CSS", hash: "#CSS", icon: cssicon, color: "#1572B6", },
    { title: "JavaScript", hash: "#JavaScript", icon: javascripticon, color: "#F7DF1E", },
    { title: "TypeScript", hash: "#TypeScript", icon: typescripticon, color: "#007ACC", },
    { title: "React", hash: "#React", icon: reacticon, color: "#61DAFB", } ,
    { title: "Vue.js", hash: "#Vue.js", icon: vuejsicon, color: "#4FC08D", },
    { title: "Next.js", hash: "#Next.js", icon: [nextjsicon, nextjsiconwhite], color: ["#000000", "#FFFFFF"], },
    { title: "Tailwind", hash: "#Tailwind", icon: tailwindcssicon, color: "#38B2AC", },
    { title: "Bootstrap", hash: "#Bootstrap", icon: bootstrapicon, color: "#7952B3", }, 
  ], }, ] as const; 

export const skillsDataBack = [ { skillsTitle: "Backend", skills: [  { title: "Nest.js", hash: "#Nest.js", icon: nestjsicon, color: "#DF234F", }, { title: ".NET", hash: "#.Net", icon: neticon, color: "#39AFE8", }, { title: ".NET Core", hash: "#.NET Core", icon: netcoreicon, color: "#623697", }, { title: "SQL", hash: "#SQL", icon: sqlicon, color: "#939699", }, { title: "Swagger", hash: "#Swagger", icon: swaggericon, color: "#85EA2D", }, { title: "REST Apis", hash: "#RESTApis", icon: apiicon, color: "#D83131", },  ], }, ] as const; 

export const skillsDataTools = [ { skillsTitle: "Tools",
   skills: [ 
    { title: "Github", hash: "#Github", icon: [githubicon, githubwhite], color: ["#000000", "#FFFFFF"], },
    { title: "Postman", hash: "#Postman", icon: postmanicon, color: "#F37036", },
    { title: "Visual Studio", hash: "#VisualStudio", icon: vsicon, color: "#68217A", },
  { title: "Jquery", hash: "#Jquery", icon: jqueryicon, color: "#0868AC", },
  { title: "WordPress", hash: "#WordPress", icon: wordpressicon, color: "#21759B", },
 ], }, ] as const


// Navigation
export const navLinks = [
  { label: "Home", hash: "#home", icon: GoHome },
  { label: "Skills", hash: "#skills", icon: GoStack },
  { label: "Projects", hash: "#projects", icon: GoProject },
  { label: "About me", hash: "#about-me", icon: GoPerson },
  { label: "Contact", hash: "#contact", icon: GoMail },
] as const;

// Footer
export const FooterLinks = [
  { label: "Imprint", hash: "#imprint", data: <Imprint /> },
  { label: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

// Social + Email
export const sideBarRightMail = {
  link: "mailto:sohaib.pak2017@gmail.com",
  text: "sohaib.pak2017@gmail.com",
} as const;

export const sideBarLeftSocials = [
  { link: "https://www.linkedin.com/in/mesohaibahmad/", icon: FiLinkedin, altimgname: "linkedin" },
  { link: "https://github.com/mesohaibahmad", icon: FiGithub, altimgname: "github" },
  { link: "sohaib.pak2017@gmail.com", icon: FiMail, altimgname: "mail" },
] as const;

// Quotes
export const quotesData = [
  {
    quote:
      "It's not at all important to get it right the first time. It's vitally important to get it right the last time.",
    author: "Andrew Hunt",
  },
  {
    quote:
      "The web is like a canvas, and code is the paint. Create your masterpiece.",
    author: "Unknown",
  },
] as const;

// About Me
export const aboutMeData = {
  title: "About me",
  description: "A few code snippets about me",
  paragraphs: [
    {
      title: "The Circuits of My Heart",
      description:
        "When I'm not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
} as const;

// Contact
export const contactData = {
  title: "Contact",
  description: "Write me a message and I will get back to you.",
  inputfields: [
    {
      name: "name",
      placeholder: "Your Name",
      type: "text",
      validation: "Please fill in your name",
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: "Your E-Mail",
      type: "email",
      validation: "Please fill in your email",
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: "Your Subject",
      type: "text",
      validation: "Please fill in your subject",
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: "Your Message",
    name: "message",
    rows: 10,
    validation: "Please fill in your message",
    pattern: "{10}",
  },
  button: {
    value: "Send",
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox:
      "I agree that Sohaib may use my personal data (name and e-mail address) to contact me.",
    description:
      "By submitting this request, you acknowledge that you have read the Private Policy",
  },
} as const;

// Toasts
export const toastMessages = {
  loadingProject: "🦄 The live demo will open shortly. Starting servers...",
  successEmailSent: "🦄 Thank you for your email. I will get back to you as soon as possible",
  failedEmailSent: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  failedValidationName: "Please fill in your name",
} as const;

export const directionStyles: Record<string, React.CSSProperties> = { 
  "outer-right-to-inner-left": { marginRight: "4rem", },
 "outer-left-to-inner-right": { marginLeft: "4rem",
   transform: "scaleX(-1)", },
    "inner-right-to-middle": { width: "100%", transform: "scaleY(1)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", },
     "inner-left-to-middle": { width: "100%", transform: "scaleX(-1)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", },
      "middle-to-inner-right": { width: "100%", transform: "scale(1,-1)", },
       "middle-to-inner-left": { width: "100%", transform: "scale(-1,-1)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", },
        middle: { width: "100%", transform: "scaleX(-1)", display: "flex", flexDirection: "column", alignItems: "center", }, };
        
        export const heightStyles: Record<string, { heights: [string, string] }> = {
           small: { heights: ["25rem", "15rem"], },
            middle: { heights: ["35rem", "25rem"], },
             large: { heights: ["45rem", "35rem"], },
              extraLarge: { heights: ["55rem", "45rem"], }, };
              
export const spaceStyles: Record<string, React.CSSProperties> = {
                 "outer-right-to-inner-left": { marginTop: "-6rem", width: "100%", },
                  "outer-left-to-inner-right": { marginTop: "-6rem", width: "100%", },
                   "inner-right-to-middle": { marginTop: "-20rem", width: "50%", zIndex: "-10", },
                    "inner-left-to-middle": { marginTop: "-10rem", width: "50%", zIndex: "-10", },
                     "middle-to-inner-right": { width: "75%", },
                      "middle-to-inner-left": { marginTop: "-2.5rem", width: "50%", },
                       middle: { marginTop: "-2.5rem", width: "0%", display: "none", }, };
                       
          export const widthStyles: Record<string, { widths: [string, string] }> = { "outer-right-to-inner-left": { widths: ["74.45%", "74.45%"], }, "outer-left-to-inner-right": { widths: ["75%", "75%"], }, "inner-right-to-middle": { widths: ["50.1%", "49%"], }, "inner-left-to-middle": { widths: ["50.1%", "49%"], }, "middle-to-inner-right": { widths: ["33.4%", "50.03%"], }, "middle-to-inner-left": { widths: ["50.1%", "49%"], },
 middle: { widths: ["0%", "0%"], }, };