import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [{
        id: 1,
        name: 'CropDoc',
        description: "CropDoc is an AI-powered crop disease detection system that helps farmers identify and diagnose crop diseases through image processing. Using a deep learning model trained on a vast dataset, it provides accurate predictions and suggests treatments. Built with Python, TensorFlow, and OpenCV, the system ensures real-time analysis and actionable insights for improved agricultural productivity.",
        tools: ["Python", "TensorFlow", "OpenCV", "Deep Learning", "Flask"],
        role: 'AI/ML Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'QuantumCorp',
        description: "QuantumCorp is an advanced company management system designed to streamline business operations. It includes modules for HR, payroll, finance, project tracking, and analytics, offering an all-in-one solution for corporate management. Built with a microservices architecture, it ensures scalability and high performance.",
        tools: ["Spring Boot", "Angular", "Microservices", "MySQL", "Kafka"],
        role: 'Project Lead',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Absensync',
        description: "Absensync is a powerful leave management application designed for seamless employee leave tracking. Built with Spring Boot for the backend and Angular for the frontend, it ensures a smooth user experience with automated leave approvals, real-time status updates, and secure database management using MySQL. The system enhances HR efficiency with its intuitive dashboard and streamlined request handling.",
        tools: ["Spring Boot", "Angular", "MySQL", "RESTful API"],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Attendosync',
        description: "Attendosync is an advanced attendance management system that automates and simplifies attendance tracking for businesses and institutions. Utilizing modern biometric integration and real-time database synchronization, it ensures accurate and tamper-proof records. The system is built using Spring Boot and Angular, providing a scalable and user-friendly experience.",
        tools: ["Spring Boot", "Angular", "MySQL", "Biometric Integration"],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: ayla,
    },
    {
        id: 5,
        name: 'E-Tech',
        description: "E-Tech is an innovative e-learning platform that enhances digital education by providing interactive courses, real-time assessments, and AI-driven learning recommendations. Built with modern web technologies, it ensures an engaging learning experience for students while enabling educators to create and manage content efficiently.",
        tools: ["Spring Boot", "Angular", "MySQL", "AI/ML"],
        role: 'Project Lead',
        code: '',
        demo: '',
        image: realEstate, // Add image reference if available
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },