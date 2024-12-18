import project1 from "../assets/projects/Project-360.png";
import project2 from "../assets/projects/Project-SCM.png";
import project3 from "../assets/projects/Project-Khadi.png";
import project4 from "../assets/projects/Project-TIDCO.png";
import project5 from "../assets/projects/Project-Onboarding.png";
import project6 from "../assets/projects/Project-TwoWheeler.png";
import front1 from "../assets/technologies/html5-logo.png";
import front2 from "../assets/technologies/CSS3_logo.png";
import front3 from "../assets/technologies/JavaScript-logo.png";
import front4 from "../assets/technologies/bootstrap-logo-shadow.png";
import front5 from "../assets/technologies/tailwind-logo.png";
import back1 from "../assets/technologies/php-logo.svg";
import back2 from "../assets/technologies/python-original.svg";
import back3 from "../assets/technologies/laravel.svg";
import back4 from "../assets/technologies/fastapi-white.svg";
import back5 from "../assets/technologies/mysql-original.svg";
import back6 from "../assets/technologies/mssql-server.png";
import back7 from "../assets/technologies/slim_logo.png";
import back8 from "../assets/technologies/lumen-logo.png";

export const LINKEDIN_PROFILE = `https://www.linkedin.com/in/vijay-kl-4984ba26b/`;

export const GITHUB_PROFILE = `https://github.com/vijayKL94`;

export const HERO_CONTENT = `I am a passionate back-end developer with over 6 years of expertise in PHP and Python, specializing in crafting robust server-side solutions using frameworks such as Laravel and FastAPI. Proficient in database management, I have hands-on experience in MySQL, MSSQL, and MongoDB. Skilled in optimizing performance and scalability for web applications, I am committed to delivering high-quality solutions that drive business growth and enhance user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile backend developer with a passion for creating efficient and user-friendly web applications. With over  years of experience in PHP and Python, I specialize in crafting robust server-side solutions using frameworks such as Laravel, Lumen, Slim, Flask, and FastAPI. Additionally, I have hands-on experience with Shopify development, enabling businesses to build and customize e-commerce platforms with seamless integrations and optimized performance.
My expertise also extends to front-end technologies including JavaScript, AJAX, HTML, CSS, Bootstrap, and TailwindCSS. I have a strong background in database management, with practical experience in MySQL, MSSQL, and MongoDB. Driven by a passion for innovation and problem-solving, I am committed to delivering high-quality solutions that drive business growth and elevate user experiences.`;

export const EXPERIENCES = [
  {
    year: "Aug 2024 - Present",
    role: "Senior Software Engineer",
    company: "Tender Software India Pvt Ltd",
    direction: "left",
    description: `Senior Software Developer at Tender Software India Pvt Ltd. I specialize in maintaining and enhancing web applications using a diverse tech stack. My primary focus includes working with the PHP Laravel framework for robust backend development and leveraging the Shopify platform to deliver tailored e-commerce solutions. I am responsible for ensuring optimal performance, scalability, and security across all web applications.`,
    technologies: ["PHP", "JavaScript", "Laravel", "MySQL", "Shopify"],
  },
  {
    year: "Oct 2022 - Aug 2024",
    role: "Senior Software Engineer",
    company: "Compunet Connections",
    direction: "right",
    description: `Senior Software Developer at Compunet Connections. Led a dynamic team in developing and maintaining web applications using a diverse stack, including PHP frameworks such as Laravel and Slim, as well as Python with FastAPI. Managed database operations across MySQL, MSSQL, and MongoDB. Collaborated closely with stakeholders to define project requirements and timelines, ensuring alignment with business objectives. Focused on leading and mentoring team members to deliver scalable and efficient solutions that meet evolving client needs.`,
    technologies: ["PHP", "Python", "JavaScript", "FastAPI", "Laravel", "Slim", "MySQL", "MSSQL", "Mongodb"],
  },
  {
    year: "Mar 2021 - Sep 2022",
    role: "Software Developer",
    company: "Compunet Connections",
    direction: "left",
    description: `Software Developer at Compunet Connections. Independently developed and maintained web applications using PHP frameworks such as Laravel and Slim. Managed database operations with MySQL and MSSQL. Focused on delivering scalable and efficient solutions to meet client needs.`,
    technologies: ["PHP", "JavaScript", "Laravel", "Slim", "MySQL", "MSSQL"],
  },
  {
    year: "Dec 2018 - Feb 2021",
    role: "Web Developer",
    company: "Skap Technologies",
    direction: "right",
    description: `As a Web Developer at Skap Technologies, I design and develop web applications primarily using PHP as the backend language. I implement responsive designs and optimize frontend performance by leveraging HTML, Bootstrap, and JavaScript. Additionally, I maintain existing websites to ensure their functionality and performance are up to standards.`,
    technologies: ["PHP", "HTML", "Bootstrap", "JavaScript", "MySQL"],
  },
  {
    year: "Jul 2017 - Dec 2018",
    role: "Java Trainer and Administrator",
    company: "Skap Technologies",
    direction: "left",
    description: `Java Trainer and Administrator at Skap Technologies. Conducted training sessions on Java programming language, delivering comprehensive instruction and support to learners. Acted as a key liaison between development teams and clients, providing regular updates on project progress and addressing any concerns or queries. Additionally, oversaw the maintenance of company-hosted domains to ensure their smooth operation and availability.`,
    technologies: ["Java", "MSSQL", "MySQL"],
  },
];

export const PROJECTS = [
  {
    title: "360-Admin Portal",
    image: project1,
    description:
      "This web application is an essential tool for managing borrower and investor details in the existing loan application. By providing a user-friendly interface, powerful reporting capabilities, and robust security measures, the application will enable the admin to manage their operations efficiently and effectively.",
    technologies: ["Python", "FastAPI", "MySql", "MongoDB"],
  },
  {
    title: "SCM-Loan Portal",
    image: project2,
    description:
      "The Loan Management System consists of three distinct portals catering to sellers, buyers, and administrators. Sellers can apply for loans on behalf of buyers, while buyers can directly request loans. Administrators oversee the entire process. Integration with external APIs such as Wathq, Gosi, and IBAN verifies financial details, reducing processing times by up to 75%. The system handles three loan types (POS, Flat, Bullet), ensuring efficient loan processing, transparency, and compliance, facilitating seamless communication among all parties involved.",
    technologies: ["Php", "Laravel", "Javascript", "Ajax", "Bootstrap", "MySql"],
  },
  {
    title: "Khadi India",
    image: project3,
    description:
      "This system, developed for a state government body, oversees approximately 1000 employees and 500 centers across the state. Its responsibility lies in converting raw materials into finished products, which are subsequently supplied to retail shops for sale to customers. Additionally, the system includes supply chain management reports based on timelines. It features a comprehensive system for managing finished product sales orders and billing for retailer shops, aiming at optimizing operations and sales processes to achieve a 65% increase in efficiency.",
    technologies: ["Php", "Laravel", "Javascript", "Ajax", "Bootstrap", "MySql"],
  },
  {
    title: "TIDCO",
    image: project4,
    description:
      "Developed for the Tamil Nadu Industrial Development Corporation Ltd, this system handles private company details. It efficiently manages multiple users with distinct roles, each assigned different operations based on their requirements. The system meticulously oversees expenses, investments, and shares of every company registered within it. Additionally, it generates comprehensive reports detailing the profits, expenses, and share market values of each company. Furthermore, the project includes real-time tracking of the day-to-day share market values for all registered companies in the system.",
    technologies: ["Php", "Laravel", "Javascript", "Ajax", "Bootstrap", "MySql"],
  },
  {
    title: "Onboarding",
    image: project5,
    description:
      "Developed for Hinduja Housing Finance, this system streamlines the employee onboarding process by effectively managing HR personnel, administrators, and employees throughout the organization. It encompasses detailed information on various aspects of onboarding, including PF, ESI, bank details, educational qualifications, and previous work experience. This comprehensive management ensures a smooth onboarding experience for employees. Furthermore, the system generates detailed reports on the onboarding process, conveniently available for download in PDF format.",
    technologies: ["Php", "Laravel", "Javascript", "Ajax", "Bootstrap", "MSSQL"],
  },
  {
    title: "Vehicle Finance",
    image: project6,
    description:
      "Developed specifically for Hinduja Leyland Finance, the Vehicle Finance project focuses on facilitating loan requests for two-wheelers and three-wheelers. Utilizing PHP and Android technologies, it provides a streamlined platform for marketing agents to handle loan applications for these vehicle types. The system includes authentication methods utilizing Aadhaar or PAN to verify customer details, as well as credit score validation based on these identifiers. Furthermore, it offers multiple user roles to cater to the diverse needs of stakeholders within the organization.",
    technologies: ["Php", "Slim", "MSSQL"],
  },
];

export const FRONTTECH = [
  {
    title: "HTML",
    image: front1,
  }, {
    title: "CSS",
    image: front2,
  }, {
    title: "JavaScript",
    image: front3,
  }, {
    title: "BootStrap",
    image: front4,
  }, {
    title: "Tailwind CSS",
    image: front5,
  },
];

export const BACKTECH = [
  {
    title: "PHP",
    image: back1,
  }, {
    title: "Python",
    image: back2,
  }, {
    title: "Laravel",
    image: back3,
  }, {
    title: "FastAPI",
    image: back4,
  }, {
    title: "MySql",
    image: back5,
  }, {
    title: "MSSQL",
    image: back6,
  }, {
    title: "Slim",
    image: back7,
  }, {
    title: "Lumen",
    image: back8,
  }
];

export const CONTACT = {
  address: "Tamil Nadu, India.",
  phoneNo: "+91 91235 28334",
  email: "kennedy1.vijay@gmail.com",
};
