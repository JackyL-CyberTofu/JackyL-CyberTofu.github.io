export type WorkExperience = {
    id: number
    location: string
    company: string
    position: string
    period: string
    responsibilities: string[]
    type: string
}

export const workExperienceData: WorkExperience[] = [
    {
        id: 3,
        location: "Burnaby, BC",
        company: "Simon Fraser University",
        position: "Bachelor of Science in Computing Science",
        period: "Graduated Dec 2024",
        responsibilities: [
    
        ],
        type: "education"
    },
    {
        id: 2,
        location: "Toronto, ON",
        company: "AMD",
        position: "Software Development Engineer",
        period: "Apr 2025 - Aug 2026",
        responsibilities: [
            "Designed and implemented scalable cloud architectures on AWS",
            "Reduced infrastructure costs by 25% through optimization and automation",
            "Implemented robust disaster recovery and backup solutions",
        ],
        type: "work"
    },
    {
        id: 0,
        location: "Burnaby, BC",
        company: "Microchip Technology",
        position: "Software Engineer Intern",
        period: "Sep 2024 - Apr 2025",
        responsibilities: [
            "Led a team of 5 developers in creating a new cloud-based platform",
            "Implemented CI/CD pipelines, reducing deployment time by 40%",
            "Mentored junior developers and conducted code reviews",
        ],
        type: "work"
    },
    {
        id: 1,
        location: "Vancouver, BC",
        company: "Gravit-e Technologies",
        position: "Software Developer in Test Intern",
        period: "Sep 2022 - Apr 2023",
        responsibilities: [
            "Developed and maintained multiple web applications using React and Node.js",
            "Optimized database queries, improving application performance by 30%",
            "Collaborated with UX designers to implement responsive designs",
        ],
        type: "work"
    },
]
