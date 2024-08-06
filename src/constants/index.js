import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    // cloud,

    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },{
     title:"io Developer",
      icon: mobile,
    },
    
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  
  const projects = [
    {
      name: "Cloud Note Book",
      description:
        "Cloud Note Book is a web-based note-taking application designed to help users organize their thoughts, tasks, and ideas effectively. With an intuitive user interface and robust features user edit delete update.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/mrskjha/Cloud-Note-Book",
    },
    {
      name: "Currency Converter",
      description:
        "A currency converter app helps users get and up-to-date currency conversion rates quickly. They can be useful for travelers who want to track currency exchange rates and get real-time results.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/mrskjha/MiniReactProject/tree/main/currencyConverter",
    },
    {
      name: "Video Streaming",
      description:
        "Video streaming platform designed to deliver high-quality video content seamlessly to users. we provide a robust and scalable solution for video encoding, storage, delivery, and playback.",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",

        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/mrskjha/Video-Streaming",
    },
  ];
  
  export {services, technologies, projects };