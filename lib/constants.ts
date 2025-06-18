export const siteConfig = {
  name: "Dennis Technology",
  url: "https://dennistechnology.netlify.app",
  description: "Smart solutions for a digital first world.",
  ogImage: "/assets/og-image.jpg",
  links: {
    linkedin: "https://linkedin.com/in/dennis-olusegun-",
    github: "https://github.com/olusegundennis",
    twitter: "https://twitter.com/dennis_rental",
  },
  contact: {
    phone: "+2349032054555",
    email: "olusegundennis88@gmail.com",
    whatsapp: "2349032054555",
  },
};

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Hire Me", href: "/hire-me" },
  { name: "Contact", href: "/contact" },
];

export const projects = [
  {
    id: 1,
    title: "Dennis Rental Naija",
    description:
      "A professional car rental and driver booking platform built with Next.js. I developed the site using Tailwind CSS and Bootstrap for responsive design. Form submissions are handled via WhatsApp for direct communication with clients. I also performed QA testing on booking flows, mobile responsiveness, and form logic.",
    tech: "Next.js · Tailwind CSS · Bootstrap · WhatsApp Integration · Manual QA",
    link: "https://dennisrentalnaija.netlify.app",
    image: "/assets/projects/drnlogo2.jpeg",
  },
  {
    id: 2,
    title: "Articipay",
    description:
      "A research-based platform that connects researchers with paid participants for data collection and study contributions. I worked as a QA Engineer, testing user flows, payment logic, and participant onboarding to ensure a seamless and bug-free experience for both researchers and contributors.",
    tech: "Cypress · Postman · Selenium · Manual & Automated QA",
    link: "https://articipay.com",
    image: "/assets/projects/articipay_logo.jpeg",
  },
  {
    id: 3,
    title: "Car Rental Naija",
    description:
      "A professional vehicle rental and driver booking platform designed to serve users across Nigeria. I contributed to this project by performing end-to-end QA testing, validating booking flows, driver assignment, and contact forms to ensure a smooth and reliable user experience.",
    tech: "React · Bootstrap · Manual & Automated QA",
    link: "https://carrentalnaija.com",
    image: "/assets/projects/carrentalnaija_logo.jpeg",
  },
  {
    id: 4,
    title: "Dennis Properties Naija",
    description:
      "A professional real estate platform offering short-let, long-term rentals, and the sale of verified properties across Nigeria. I contributed by testing user flows, property listings, inquiry forms, and overall usability to ensure a secure and seamless experience for clients seeking trusted housing solutions.",
    tech: "Next.js · Tailwind CSS · Bootstrap · WhatsApp Integration · Manual QA",
    link: "https://dennisrentalnaija.netlify.app/real-estate",
    image: "/assets/projects/logo3.jpeg",
  },
];

export const services = [
  {
    id: 1,
    title: "Software Testing & QA",
    description:
      "Comprehensive testing services including test automation, manual testing, and quality assurance consulting.",
    icon: "CheckCircle",
  },
  {
    id: 2,
    title: "Web and App Development",
    description:
      "Custom web applications and mobile apps built with modern frameworks for optimal performance and user experience.",
    icon: "Code",
  },
  {
    id: 3,
    title: "Real Estate Tech Platforms",
    description:
      "Specialized solutions for property management, listings, and client relationship management in the real estate sector.",
    icon: "Building",
  },
  {
    id: 4,
    title: "Fleet and Car Rental Automation",
    description:
      "Digital systems to streamline vehicle tracking, booking, maintenance schedules, and customer management.",
    icon: "Car",
  },
  {
    id: 5,
    title: "E-commerce Store Setup",
    description:
      "End-to-end online store development with secure checkout, inventory management, and customer analytics.",
    icon: "ShoppingCart",
  },
  {
    id: 6,
    title: "Business Software Consulting",
    description:
      "Strategic technology guidance to help businesses identify the right digital solutions for their specific challenges.",
    icon: "BarChart",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js",
    excerpt:
      "Learn how to leverage Next.js features to create high-performance web applications that can scale with your business needs.",
    date: "April 15, 2025",
    author: "Olusegun Dennis",
    slug: "building-scalable-web-applications",
  },
  {
    id: 2,
    title: "The Future of Real Estate Technology",
    excerpt:
      "Exploring how digital platforms are transforming property management, sales processes, and client experiences in real estate.",
    date: "March 28, 2025",
    author: "Olusegun Dennis",
    slug: "future-of-real-estate-technology",
  },
  {
    id: 3,
    title: "Best Practices in Software Testing",
    excerpt:
      "A comprehensive guide to modern testing methodologies and tools for ensuring software quality.",
    date: "May 1, 2025",
    author: "Olusegun Dennis",
    slug: "software-testing-best-practices",
  },
];

export const techStack = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "C#", "Python"],
  },
  {
    category: "Frameworks",
    skills: ["Next.js", "React", "Node.js", "Angular"],
  },
  {
    category: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Selenium", "Postman"],
  },
  {
    category: "Styling",
    skills: ["Tailwind CSS", "Boostrap", "SCSS"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "Firebase", "PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "Netlify", "Jira", "Swagger", "Figma", "Postman"],
  },
  {
    category: "Other",
    skills: ["REST APIs", "SEO Optimization", "Test Automation", "CI/CD Testing"],
  },
];

export const experiences = [
  {
    title: "Founder",
    company: "Dennis Technology",
    period: "2023–Present",
    responsibilities: [
      "Built custom software for car rental, e-commerce, and real estate platforms",
      "Developed full-stack applications using modern stacks",
      "Integrated payment gateways, handled full deployment",
      "Implemented comprehensive testing strategies using Jest, Cypress, and Postman.",
    ],
  },
  {
    title: "Software Tester / QA Engineer Intern",
    company: "Articipay",
    period: "January 2025–Present",
    responsibilities: [
      "Tested and validated core features of Articipay's web application",
      "Designed and executed manual and automated test cases",
      "Collaborated with teams to enhance participant recruitment workflows",
      "Verified secure payment and reward systems",
      "Participated in user feedback reviews and QA cycles",
      "Maintained detailed QA documentation",
    ],
  },
  {
    title: "Software QA Engineer",
    company: "Freelance",
    period: "2019–Present",
    responsibilities: [
      "Led end-to-end testing of web and mobile applications",
      "Developed and maintained automated test suites using Selenium and Cypress",
      "Created detailed test plans and documentation",
      "Collaborated with developers to improve code quality and testing practices",
    ],
  },
  {
    title: "Car Rental Service Founder",
    company: "Self-employed",
    period: "2019–Present",
    responsibilities: [
      "Managed fleet operations and customer service",
      "Gained business insight that now shapes software projects",
    ],
  },
];

export const education = [
  {
    title: "Self-taught Software Developer",
    period: "2021–Present",
    description: "Ongoing training via online courses and hands-on projects",
  },
  {
  title: "Bachelor’s Degree in Business Administration",
  institution: "ESEP Le Berger University, Benin Republic",
  period: "2015–2019",
  description: "Graduated with a degree in Business Administration.",
},
  {
    title: "ISTQB Certified Tester",
    period: "2025",
    description:
      "Foundation Level certification in software testing principles and methodologies",
  },
];

export const achievements = [
  "Built and deployed over 5 live projects",
  "Helped businesses go digital with scalable tools",
  "Implemented test automation frameworks that reduced testing time by 60%",
  "Led QA strategy for multiple successful product launches",
  "Contributed to improved user experience through systematic testing at Articipay",
];
