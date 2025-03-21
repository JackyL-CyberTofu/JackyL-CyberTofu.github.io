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
        id: 0,
        location: "Burnaby, BC",
        company: "Microchip Technology",
        position: "Software Engineer Intern",
        period: "Sep 2024 - Apr 2025",
        responsibilities: [
            "Engineered critical Python software modules and validation tools to ensure compliance and address all stringent NASA JPL certification requirements for the HPSC (High Performance Space Computing) project.",
            "Enhanced a Jenkins CI/CD pipeline for developer regression testing, improving feedback time by 50% and empowering developers by accelerating their iteration cycles and while reducing software defects.",
            "Transformed firmware validation with C and C++ data transfer modules, integrated into 75% of validation tests.",
            "Implemented PKCS11-based cryptographic operations, enabling secure key management and seamless Hardware Secure Module (HSM) integration for encryption and authentication.",
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
            "Engineered efficient backend API testing workflows using JavaScript and Postman, boosting error detection by 25% and enhancing web application stability.",
            "Developed robust UI automation frameworks with Katalon Studio and Java, drastically reducing the manual testing effort and demonstrably improving user experience (UX) by minimizing production bugs by 20%.",
            "Developed and deployed MySQL database integration scripts using SQL, ensuring data integrity and minimizing data incidents.improving data reliability for user features and minimizing data-related incidents.",
        ],
        type: "work"
    },
]
