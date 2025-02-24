export type Project = {
    image: string
    title: string
    description: string
    languages: string[]
    deploymentLink: string | null,
    githubLink: string | null,
    pdfLink: string | null,
}

export const projectData: Project[] = [
    
    {
        image: '/miracle_buddy.jpg',
        title: 'Miracle Buddy',
        description: 'A CRUD application where users can view and bookmark companies providing resources for those who are unable to meet their basic necessities. ',
        languages: ['Node.js', 'React', 'Tailwind CSS', 'Javascript'],
        deploymentLink: null,
        githubLink: 'https://github.com/michvong/miracle-buddy',
        pdfLink: null,
    },
    {
        image: '/port.jpg',
        title: 'Multivariate Time Series Forecasting for Port Logistics',
        description: 'Developed a deep learning-based forecasting model using a Long Short-Term Memory (LSTM) network to predict daily container throughput at the Port of Vancouver.',
        languages: ['Python', 'PyTorch', 'Pandas', 'Plotly'],
        deploymentLink: null,
        githubLink: null,
        pdfLink: '/port_project.pdf',
    },
    {
        image: '/smartbus.jpg',
        title: 'Smartbus Alert System',
        description: 'A dynamic notification platform designed to enhance public transit accessibility through real-time updates and personalized alert settings.',
        languages: ['C', 'Python', 'Linux'],
        deploymentLink: null,
        githubLink: 'https://github.com/JackyL-CyberTofu/SmartBus-Alert-System',
        pdfLink: null,
    },
];
