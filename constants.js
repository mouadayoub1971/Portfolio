export const METADATA = {
  author: "Mouad Ayoub",
  title: "Portfolio | Mouad Ayoub",
  description:
    "Mouad Ayoub is a passionate Software Engineer, dedicated to crafting aesthetic, smart, performant and modern apps that captivate and engage users.",
  twitterHandle: "@AyoubMouad1971",
  keywords: [
    "Mouad Ayoub",
    "Software Engineer",
    "Full stack Developer",
    "DevOps Engineer",
    "Ml Engineer",
    "Ai Engineer",
    "Portfolio",
  ].join(", "),
  image:
    "https://media.licdn.com/dms/image/v2/D4E03AQHTofbboUiEnw/profile-displayphoto-shrink_800_800/B4EZTkbE9gGgAg-/0/1738999091476?e=1746662400&v=beta&t=FGxkHeSTXhyMMMG7vBBTSoRmgEBSarNMJxJuBrEdlfA",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Software Engineer",
  "I build things for the web",
  "I create aesthetic, smart and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: mouadayoubmouadayoub@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/mouad-ayoub-255a50304/",
  },
  {
    name: "github",
    url: "https://github.com/mouadayoub1971",
  },
  {
    name: "instagram",
    url: "hhttps://www.instagram.com/mouadayoub72?igsh=YzljYTk1ODg3Zg==",
  },
  {
    name: "twitter",
    url: "http://x.com/AyoubMouad1971",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "Java",
    "JEE",
    "Python",
    "Csharp",
    "Cpp",
    "JavaScript",
    "TypeScript",
    "SQL",
    "NoSQL",
    "Scala",
    "PHP",
    "PLSQL",
  ],
  librariesAndFrameworks: [
    "Spring",
    "SpringBoot",
    "Flask",
    "ASPNET",
    "Angular",
    "React",
    "Nextjs",
    "ReactNative",
    "Vuejs",
    "Laravel",
    "Spark",
    "Kafka",
    "Hadoop",
    
  ],
  databases: ["MySQL", "MongoDB", "Firebase", "PostgreSQL", "OracleDB", "SQLServer"],
  operatingSystems: ["Windows", "Linux"],
  other: [
    "Docker",
    "Kubernetes",
    "Nginx",
    "RabbitMQ",
    "Git",
    "GitLab",
    "Ansible",
    "Jenkins",
    "Maven",
    "JUnit",
    "REStAPI",
    "GraphQL",
    "Microservices",
    "CICD",
    "Cloud",
    "DataEngineering",
    "NLP",
    "wireshark",
    "Agile",
    "scrum",
  ],
};




export const PROJECTS = [
  {
    name: "Train scheduling",
    image: "/projects/train.webp",
    blurImage: "/projects/blur/train.webp",
    description: "Train scheduling system using kafka, Spark Streams , Hadoop , Mlib(Spark) , Spring Boot and JavaFX 🚂🚂",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/mouadayoub1971/TrainSchedules",
    tech: ["java", "springboot", "spark", "hadoop","kafka"],
  },
  {
    name: "Microservice-Audio-converter ",
    image: "/projects/microservice.webp",
    blurImage: "/projects/blur/microservice.webp",
    description: "Microservice-Audio-converter 🔉 ➡️ 📽️",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://github.com/mouadayoub1971/Microservice-Audio-converter",
    tech: ["kubernetes", "flask","rabbitmq", "docker", "vuejs", "mongodb","mysql"],
  },
  {
    name: "coffee and coffee chatbot ",
    image: "/projects/coffe.webp",
    blurImage: "/projects/blur/coffe.webp",
    description:
      "coffee shop customer service chatbot ☕🤖",
    gradient: ["#000066", "#6699FF"],
    url: "https://github.com/mouadayoub1971/SmartCoffee-",
    tech: ["reactnative", "firebase", "python","nlp"],
  },
  {
    name: "messenger",
    image: "/projects/messanger.webp",
    blurImage: "/projects/blur/messanger.webp",
    description: "Real-Time-Messenger-Clone ✉️✉️",
    gradient: ["#4682B4", "#5F9EA0"],
    url: "https://github.com/mouadayoub1971/Real-Time-Messenger-Clone",
    tech: ["react", "laravel", "mysql"],
  },
  {
    name: "backup and recovery with aws",
    image: "/projects/aws.webp",
    blurImage: "/projects/blur/aws.webp",
    description: "Implement backup and recovery with AWS Backup across your AWS Organizations using a CI/CD pipeline (AWS CodePipeline). ☁️☁️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/mouadayoub1971/backup-recovery-with-aws",
    tech: ["cloud"],
  },
  {
    name: "ai agent",
    image: "/projects/agent.webp",
    blurImage: "/projects/blur/agent.webp",
    description: "an ai agent using Next.js , Eslint, TypeScript, TailwindCss, LangChain, Clerk, Convex, TS, IBM(wxflows) 🤖🤖",
    gradient: ["#9B111E", "#D70040"],
    url: "https://github.com/mouadayoub1971/Ai-agent",
    tech: ["Nextjs","typescript","tailwindcss","LangChain"],
  },
  {
    name: "Story App",
    image: "/projects/story.webp",
    blurImage: "/projects/blur/story.webp",
    description: "Story App with Next.js MongoDB TailwindCss",
    gradient: ["#006400", "#228B22"],
    url: "https://github.com/mouadayoub1971/nextjs-story-app",
    tech: ["Nextjs","typescript","tailwindcss"],
  },
];

// export const WORK = [
//   {
//     id: 1,
//     company: "Dukaan",
//     title: "Frontend Developer",
//     location: "Bangalore, Karnataka",
//     range: "December - Current",
//     responsibilities: [
//       "Led creation of a captivating cross-platform e-commerce solution.",
//       "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
//       "The app boasts a DAU base of 32k and an extensive MAU count of 180k.",
//     ],
//     url: "https://mydukaan.io/",
//     video: "/work/dukaan.mp4",
//   },
//   {
//     id: 2,
//     company: "Aviate",
//     title: "Frontend Developer Intern",
//     location: "Goa",
//     range: "May - October 2022",
//     responsibilities: [
//       "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
//       "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
//       "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
//     ],
//     url: "https://www.aviate.jobs/",
//     video: "/work/aviate.mp4",
//   },
//   {
//     id: 3,
//     company: "Spacenos",
//     title: "Web Developer Intern",
//     location: "Bangalore, Karnataka",
//     range: "September - December 2021",
//     responsibilities: [
//       "Led the Full Stack revamp on the Admin Portal.",
//       "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
//       "Implemented CRUD features for all the services and providers.",
//     ],
//     url: "https://spacenos.com/",
//     video: "/work/spacenos.mp4",
//   },
// ];

export const WORK_CONTENTS = {
  DUKAAN: [
    {
      title: "Dukaan",
      description:
        "Dukaan is a platform that enables businesses to launch their online stores at ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing commerce, one click at a time
        </div>
      ),
    },
    {
      title: "Transformation",
      description:
        "Since 2023, the Dukaan Seller Dashboard struggled with technical issues and a broken user experience due to accumulated technical debt. Leading a team of two junior developers, we migrated the dashboard from CSR to SSR, redesigned the UI, and overhauled the codebase in the process. This resolved the technical debt and vastly improved the user experience, making it Dukaan's largest and most impactful migration.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Senior Frontend Engineer
        </div>
      ),
    },
    {
      title: "Evolution",
      description:
        "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Optimization",
      description:
        "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer Intern
        </div>
      ),
    },
  ],
  AVIATE: [
    {
      title: "Aviate",
      description:
        "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Finding the right job isn&apos;t fate, it&apos;s navigation
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Developer Intern
        </div>
      ),
    },
  ],
  SPACENOS: [
    {
      title: "Spacenos",
      description:
        "A dynamic startup dedicated to creating innovative products that make the world a better place.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          We build apps that solve problems for the next billion people
        </div>
      ),
    },
    {
      title: "Trailblazing",
      description:
        "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Web Developer Intern
        </div>
      ),
    },
  ],
};

export const GTAG = "G-5HCTL2TJ5W";
