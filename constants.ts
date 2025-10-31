
import type { NavLink, Experience, Project, SkillCategory } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCES: Experience[] = [
    {
        title: 'Full-Stack Web Developer | Internship',
        institution: 'Kantor Camat Bintan Timur',
        dates: 'July 2024 - August 2024',
        description: [
            'Designed and developed a full-stack web application to digitize the office\'s archival process.',
            'Collaborated with office staff to gather requirements and ensure the application met their needs.',
        ],
        image: "/images/internship.jpeg",
    },
    {
        title: 'Practicum Assistant for Computer Networks Course',
        institution: 'Universitas Maritim Raja Ali Haji',
        dates: 'February 2024 - July 2024',
        description: [
            'Guided students in using network simulation tools like Cisco Packet Tracer and Wireshark.',
            'Assisted lecturers in preparing practicum materials and evaluating student assignments.',
        ],
        image: "/images/asprac.jpeg",
    },
    {
        title: 'Red Hat Certified System Administrator - IBM AI & Cybersecurity',
        institution: 'Infinite Learning, PT Kinema Systrans Multimedia',
        dates: 'August 2023 - December 2023',
        description: [
            'Developed a generative AI virtual assistant named "Nuraga" using IBM Watsonx.ai.',
            'Completed intensive training on Red Hat Enterprise Linux, system administration, and cybersecurity principles.',
            'Gained hands-on experience with IBM\'s AI platforms and tools.',
        ],
        image: "/images/IL.jpeg",
    },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Nuraga: Virtual Assistant',
    techStack: ['IBM Watsonx.ai','Watson Assistant', 'Virtual Assistant'],
    imageUrl: '/images/nuraga-mockup.png',
    screenshots: [
      "/images/nuraga5.png",
      "/images/nuraga6.png",
      "/images/nuraga7.png",
    ],
    description: 'A generative AI virtual assistant developed using IBM Watsonx.ai.',
    longDescription: 'This project was part of the IBM AI & Cybersecurity program. Nuraga is a generative AI virtual assistant developed using IBM Watsonx.ai (LLaMA-2-70B-Chat) and Watson Assistant to promote self-growth and mental well-being among Indonesian youth. It leverages advanced natural language understanding to deliver empathetic and context-aware responses, offering advice on mental health, personal development, and balanced living.Through prompt engineering and supervised fine-tuning, Nuraga ensures consistent and relevant interactions. Integrated into a web-based chat interface, it serves as an intelligent and supportive companion blending human empathy with AI precision.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/Nuraga.git',
  },
  {
    id: 2,
    title: 'SIMANTAP (Sistem Informasi Manajemen Data Terpadu)',
    techStack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    imageUrl: '/images/mockup-simantap.png',
    screenshots: [
      "/images/landing-page.jpg",
      "/images/login-page.jpg",
      "/images/dashboard-umum.jpg",
      "/images/dashboard-pmd.jpg",
      "/images/tambahnotdinas.jpg",
    ],
    description: 'A full-stack web application for digitizing office archival processes.',
    longDescription: 'SIMANTAP is a web-based information system designed to manage and centralize official documents for the Bintan Timur Subdistrict Office. The system provides division-specific dashboards and supports CRUD operations, document uploads, and digital previews to improve workflow efficiency and record management. Built with PHP, MySQL, and standard web technologies, SIMANTAP enables staff from each division including Pemberdayaan Masyarakat dan Desa (PMD) and General Affairs & Personnel to access only their respective archives securely through a role-based authentication system.The project was developed during a professional internship to assist government offices in transitioning from manual to digital data management, improving both transparency and accessibility.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/SIMANTAP.git',
  },
  {
    id: 3,
    title: 'Squid Freshness Identification',
    techStack: ['CapsNet', 'Python', 'Deep Learning'],
    imageUrl: '/images/skripsi-mockup.png',
    screenshots: [
      "/images/skripsi1.png",
      "/images/skripsi2.png",
      "/images/skripsi3.png"
    ],
    description: 'A deep learning model to identify the freshness of squid from images.',
    longDescription: 'This project focuses on developing an automated system to identify the freshness level of squids through deep learning image classification. The research involved dataset collection, preprocessing, and model training using Capsule Networks (CapsNet). The system provides a scalable and non-destructive approach for seafood freshness assessment, assisting industries in maintaining quality standards.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/CapsuleNetwork-Binary-Classification.git',
  },
  {
    id: 4,
    title: 'PalVoice: Palestine Voice',
    techStack: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore', 'News API'],
    imageUrl: '/images/iphone-multiple-screens-mockup.png',
    screenshots: [
      "/images/palvoice-mockup.png",
      "/images/palvoice2.png",
    ],
    description: 'A mobile application that amplifies awareness and solidarity for the Palestinian.',
    longDescription: 'PalVoice is a mobile application built with Flutter that empowers users to stay informed and take meaningful action in support of Palestine. It integrates multiple features, including real-time news updates using the News API, donation links to trusted humanitarian organizations, and curated petitions to raise global awareness. The app also includes a boycott product database stored in Firebase Cloud Firestore, complete with search and category filters. With its intuitive interface and seamless integration of Firebase services, PalVoice serves as both an information hub and a platform for activism and solidarity.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/PalVoice.git',
  },
  {
    id: 5,
    title: 'Real Estate Price Prediction',
    techStack: ['Machine Learning', 'Python', 'Streamlit'],
    imageUrl: '/images/predict-mockup.png',
    screenshots: [
      "/images/predict1.png",
      "/images/predict2.png",
      "/images/predict3.png",
      "/images/predict4.png",
    ],
    description: 'A machine learning model to predict real estate prices based on features.',
    longDescription: 'The Real Estate Prediction web app is designed to estimate property prices through advanced machine learning techniques. Built with Streamlit, it integrates two core models — Multiple Linear Regression and Backpropagation Neural Network — to provide accurate predictions based on property features such as land area, building size, and number of rooms. The app also allows users to test model accuracy with custom datasets and visualize performance comparisons between models. With its clean and responsive interface, it delivers an intuitive experience for both technical and non-technical users.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/RealEstatePrediction-Streamlit.git',
  },
  {
    id: 6,
    title: 'NST PHONESHOP E-Catalog',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Supabase', 'TypeScript'],
    imageUrl: '/images/nst-mockup.png',
    screenshots: [
      "/images/nst1.png",
      "/images/nst2.png",
      "/images/nst3.png",
      "/images/nst4.png",
      "/images/nst5.png",
      "/images/nst6.png",
      "/images/nst7.png",
    ],
    description: 'A web-based digital e-catalog for NST Phoneshop to display products in a modern and accessible way.',
    longDescription: 'This project is an electronic catalog created for NST Phoneshop. Its purpose is to digitize how customers view available products, complete with images, specifications, and other details. This application serves as a digital storefront that simplifies product searching and browsing.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/NST-Catalog.git',
  },
    {
    id: 7,
    title: 'QuizGen - Smart Quiz Generator',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Supabase', 'TypeScript', 'Gemini API', 'Pollinations.ai'],
    imageUrl: '/images/quizgen-mockup.png',
    screenshots: [
      "/images/quizgen1.png",
      "/images/quizgen2.png",
      "/images/quizgen3.png",
      "/images/quizgen4.png",
      "/images/quizgen5.png",
      "/images/quizgen6.png",
      "/images/quizgen7.png",
    ],
    description: 'An AI-powered platform for educators to instantly create custom English topics quizzes.',
    longDescription: 'QuizGen is a modern web application that revolutionizes quiz creation for educators by leveraging Google Gemini AI. Teachers can generate comprehensive quizzes tailored to specific grade levels and topics in seconds, complete with AI-generated illustrations, reading passages, and bilingual explanations (English/Indonesian). The platform supports multiple question types including multiple-choice, fill-in-the-blank, and essay questions, while providing instant auto-grading and detailed performance analytics for students.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/QuizGen---SmartQuizGenerator.git',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: ['Python', 'PHP', 'Dart', 'HTML/CSS', 'JavaScript', 'TypeScript'],
    },
    {
        title: 'Technologies & Frameworks',
        skills: ['IBM Watsonx.ai', 'Firebase', 'Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MySQL'],
    },
   {
      title: "Certifications",
      skills: [
        {
          name: "Red Hat Certified System Administrator (RHCSA)",
          issuer: "Red Hat",
          link: "https://www.credly.com/badges/010cf75f-b912-4690-b7e7-221ad3d8d832/public_url",
        },
        {
          name: "MSIB Certificate",
          issuer: "Infinite Learning and MSIB Kampus Merdeka",
          link: "https://drive.google.com/file/d/1ksi2Gtry6osCv0bkK2vOacLezyKUsak-/view?usp=sharing",
        },
        {
          name: "Python for Data Science",
          issuer: "IBM",
          link: "https://www.credly.com/badges/ade2b700-120c-47c6-865d-8e1e939ddb56",
        },
        {
          name: "Getting Started with Enterprise-grade AI",
          issuer: "IBM",
          link: "https://www.credly.com/badges/7586fac9-3c23-4eb5-8bee-422da1c80bc6",
        },
        {
          name: "Building AI Solutions Using Advanced Algorithms and Open Source Frameworks",
          issuer: "IBM",
          link: "https://www.credly.com/badges/cc07f4f3-6229-43e8-b17d-d7a8358ec108",
        },
        {
          name: "Getting Started with Threat Intelligence and Hunting",
          issuer: "IBM",
          link: "https://www.credly.com/badges/ddd594e6-a48e-4965-8975-e4829fdc65da",
        },
        {
          name: "Enterprise Design Thinking Practitioner",
          issuer: "IBM",
          link: "https://www.credly.com/badges/fd8ef961-8412-4d55-a3e9-89a9d9dc83ad",
        },
        {
          name: "Security Operations Center in Practice",
          issuer: "IBM",
          link: "https://www.credly.com/badges/0ba7f9db-bf01-45eb-8f11-99c5401cf855",
        },
      ],
    },
    {
        title: 'Soft Skills',
        skills: ['Communication', 'Problem-Solving', 'Adaptability', 'Collaboration', 'Teamwork'],
    },
];

export const CONTACT_INFO = {
    email: 'adamvinandra767@gmail.com',
    phone: '085363619829',
    socials: {
        github: 'https://github.com/Vinandra-Adam-Saputra', 
        linkedin: 'https://www.linkedin.com/in/vinandra-adam-saputra/', 
    }
};
