import Image from 'next/image';
import Link from 'next/link';
import { Project } from "@/data/ProjectData";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { image, title, description, languages, deploymentLink, githubLink, pdfLink } = project;

    return (
        <div className="relative w-full min-h-[20rem] bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 border-2 border-gray-700 flex overflow-hidden md:flex-row flex-col">
            {/* Left Content Section */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full w-full md:w-1/2">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-white">{title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
                    
                    {/* Language Tags */}
                    <div className="flex flex-wrap gap-2">
                        {languages.map((language, index) => (
                            <span
                                key={index}
                                className="bg-gray-700 text-gray-100 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                            >
                                {language}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 items-center pt-4">
                    {deploymentLink && (
                        <Link href={deploymentLink} passHref legacyBehavior>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                            >
                                Live Demo
                            </a>
                        </Link>
                    )}
                    {pdfLink && (
                        <Link href={pdfLink} passHref legacyBehavior>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                            >
                                View PDF
                            </a>
                        </Link>
                    )}
                    {githubLink && (
                        <Link href={githubLink} passHref legacyBehavior>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                            >
                                GitHub
                            </a>
                        </Link>
                    )}
                </div>
            </div>

            {/* Right Image Section */}
            <div className="relative w-full md:w-1/2 h-48 md:h-auto">
                <Image
                    src={image}
                    alt={`${title} preview`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-r-2xl"
                    priority
                />
            </div>

            {/* Updated Blend Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-gray-800 via-gray-800/90 to-transparent pointer-events-none" style={{ zIndex: 1 }}></div>
        </div>
    );
};

export default ProjectCard;