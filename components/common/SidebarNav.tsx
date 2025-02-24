'use client'
import React, { useState, useEffect } from "react";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope, FaUser } from "react-icons/fa";

const sections = [
    { id: "front-page", icon: <FaHome /> },
    { id: "aboutme-page", icon: <FaUser /> },
    { id: "info-page", icon: <FaInfoCircle /> },
    { id: "project-page", icon: <FaProjectDiagram /> },
    { id: "contact-page", icon: <FaEnvelope /> },
];

const SidebarNav = () => {
    const [active, setActive] = useState(sections[0].id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0,
                // This rootMargin creates a center band (roughly the middle 20% of the viewport)
                rootMargin: "-40% 0px -40% 0px"
            }
        );
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });
        return () => observer.disconnect();
    }, []);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-1/2 left-1 transform -translate-y-1/2 bg-transparent p-4">
            <ul>
                {sections.map(section => (
                    <li key={section.id} className="mb-2">
                        <button
                            onClick={() => handleClick(section.id)}
                            className={`text-2xl transition-transform duration-150 hover:scale-110 ${
                                active === section.id ? "opacity-100" : "opacity-50"
                            } text-white`}
                        >
                            {section.icon}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SidebarNav;