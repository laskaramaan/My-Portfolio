/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Amaan laskar",
  title: "Hi, I'm Amaan",
  subTitle: emoji(
    "A passionate Front-end Developer 🚀 having an experience of designing and building Web applications with JavaScript & React.js ."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1h50ITbJf4k5w7MNv7LKIvsGj1duEa_pO/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/laskaramaan',
  linkedin: "https://www.linkedin.com/in/laskaramaan/",
  gmail: "laskaramaan@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  // instagram: 'https://www.instagram.com/davidrakosi/',
  twitter: 'https://twitter.com/AmaanLaskar',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY WEB DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc:
        "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Intern",
      company: "TCS",
      companylogo: require("./assets/images/TCSLogo.png"),
      date: "Feb 2022 – May 2022",
      // desc:
      //   "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Built DL Model which can predict Emotion from speech with an accuracy of 73%",
        "Integrated the model with front-end user interface using Flask frameWork",
        "Deployed the web-app on AWS EC2 instance",
        "Collaborated with other team members and Team lead"

        



      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self Employed",
      companylogo: require("./assets/images/Freelancerr.png"),
      date: "Jan 2022 – Present",
      descBullets: [
        "Collaborated with early stage startup to build landing page as per their requirement",
        "Deployed on live server",
        "maintaining the code"

        





      ]
    },
    {
      role: "Co-Founder",
      company: "Wi-Shirts",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "2019 – July 2021",
      descBullets: [
        "Co-founded a merchandise startup, where i have learned a lot about listening to customers and communicating with them",
        "Worked with my team-mates to develop and implement new merchandising strategies based on current data and trends",
        "Responsible for planning, vendor selection and quality assurance efforts of merchandise"
        ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  // subtitle: "",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Netflix UI Clone",
      projectDesc: "This is a completely dynamic App built on react.js ",
      projectStack: "Tech Stack: React.js + TailwindCSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-netflix-coral.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Rent-a-Property App",
      projectDesc: "Implemented Single Page Real Estate “Rent a Property” web app with filtering mechanism.",
      projectStack: "Tech Stack: React.js + TailwindCSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rent-a-property-three.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Heath Tech Landing page UI",
      projectDesc: "This project is a landing page built on react.js and its fully responsive ",
      projectStack: "Tech Stack: React.js + TailwindCSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://uvi-health-task.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "News App",
      projectDesc: "This is a completely dynamic App built on react.js All the news, images, summary etc. are fetched from a news API",
      projectStack: "Tech Stack: React.js + CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-news-app-ivory.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Quiz App",
      projectDesc: "In this dynamic application user will be displayed MCQs which he/she needs to answer",
      projectStack: "Tech Stack: React.js + CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-quiz-app-pi.vercel.app/"
        }
      ]
    }
    
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Client works: "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "Sparify Project",
      subtitle:
        "Landing page for Sparify",
      image: require("./assets/images/Sparify.jpg"),
      footerLink: [
        {
          name: "Visit Website",
          url:
            "https://sparify.co/"
        }
      ]
    },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url:
    //         ""
    //     }
    //   ]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     {
    //       name: "Final Project",
    //       url: ""
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Other then developing I also love to write and share what I have learnt.",

  blogs: [
    {
      url:
        "https://amaanlaskar.hashnode.dev/computer-networking-in-one-go",
      title: "Computer networking in one go",
      description:
        "Before we dive deep into Computer Networks lets understand some basic stuffs and terminologies..."
    },
    {
      url: "https://amaanlaskar.hashnode.dev/super-quick-guide-to-git-and-github",
      title: "Super Quick Guide to GIT & GITHUB",
      description:
        "If you want to quickly upload your projects on GITHUB than this guide is for you only..."
    },
    {
      url: "https://amaanlaskar.hashnode.dev/software-security-principles",
      title: "Software security principles",
      description:
        "Lets learn about some secure coding checklist..."
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me :"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+918473020710",
  email_address: "laskaramaan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
 
};
