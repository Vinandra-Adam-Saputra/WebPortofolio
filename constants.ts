
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
        title: 'Internship',
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
    techStack: ['IBM Watsonx.ai','Watson Assistant'],
    imageUrl: '/public/images/nuraga-mockup.png',
    screenshots: [
      "/images/nuraga5.png",
      "/images/nuraga6.png",
      "/images/nuraga7.png",
    ],
    description: 'A generative AI virtual assistant developed using IBM Watsonx.ai.',
    longDescription: 'This project was part of the IBM AI & Cybersecurity program. Nuraga is a sophisticated virtual assistant designed to understand natural language and perform various tasks. The development process involved training models, designing conversational flows, and integrating with external APIs. This placeholder can be updated with more details about the architecture and challenges.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/Nuraga.git',
  },
  {
    id: 2,
    title: 'SIMANTAP',
    techStack: ['PHP', 'CodeIgniter', 'MySQL'],
    imageUrl: '/images/mockup-simantap.png',
    screenshots: [
      "/images/landing-page.jpg",
      "/images/login-page.jpg",
      "/images/dashboard-umum.jpg",
      "/images/dashboard-pmd.jpg",
      "/images/tambahnotdinas.jpg",
    ],
    description: 'A full-stack web application for digitizing office archival processes.',
    longDescription: 'SIMANTAP (Sistem Manajemen Arsip Terpadu) was developed during the internship at Kantor Camat Bintan Timur. It is a web-based system built with PHP and CodeIgniter to replace the manual archival process, improving efficiency and data accessibility.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/SIMANTAP.git',
  },
  {
    id: 3,
    title: 'Squid Freshness Identification',
    techStack: ['CapsNet', 'Python', 'TensorFlow'],
    imageUrl: '/images/skripsi-mockup.png',
    screenshots: [
      "/images/skripsi1.png",
      "/images/skripsi2.png",
      "/images/skripsi3.png"
    ],
    description: 'A deep learning model to identify the freshness of squid from images.',
    longDescription: 'This academic project explores the use of Capsule Networks (CapsNet) for image classification. The model was trained on a dataset of squid images to classify them into different freshness levels. This project demonstrates skills in deep learning, computer vision, and Python. More details on model accuracy and methodology can be added here.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/CapsuleNetwork-Binary-Classification.git',
  },
  {
    id: 4,
    title: 'PalVoice',
    techStack: ['Flutter', 'Firebase', 'Dart'],
    imageUrl: '/images/iphone-multiple-screens-mockup.png',
    screenshots: [
      "/images/palvoice-mockup.png",
      "/images/palvoice2.png",
    ],
    description: 'A mobile application for anonymous voice-based social interaction.',
    longDescription: 'PalVoice is a Flutter-based mobile app that allows users to connect and chat with others anonymously using only their voice. It utilizes Firebase for real-time database and authentication. This placeholder can be filled with information about the app\'s features, design choices, and development journey.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/PalVoice.git',
  },
  {
    id: 5,
    title: 'Real Estate Price Prediction',
    techStack: ['Machine Learning', 'Python', 'Scikit-learn'],
    imageUrl: '/images/predict-mockup.png',
    screenshots: [
      "/images/predict1.png",
      "/images/predict2.png",
      "/images/predict3.png",
      "/images/predict4.png",
    ],
    description: 'A machine learning model to predict real estate prices based on features.',
    longDescription: 'This project involves building and evaluating a regression model to predict housing prices. The process included data cleaning, feature engineering, model selection (e.g., Linear Regression, Gradient Boosting), and performance evaluation. This section can be updated with details about the dataset, model performance metrics, and insights gained.',
    sourceCodeUrl: 'https://github.com/Vinandra-Adam-Saputra/RealEstatePrediction-Streamlit.git',
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
        linkedin: '#', 
    }
};
