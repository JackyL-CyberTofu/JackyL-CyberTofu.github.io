'use client'
import React from "react";
import FrontPage from "@/components/main/front_page";
import InfoPage from "@/components/main/InfoPage";
import ProjectPage from "@/components/main/ProjectPage";
import ContactPage from "@/components/main/ContactPage";
import AboutMe from "@/components/main/AboutMe";
import SidebarNav from "@/components/common/SidebarNav"; // replaced SidebarIcons
import useScrollFade from "@/hooks/useScrollFade";

export default function MyPage() {
    const frontPageOpacity = useScrollFade("front-page", 200);
    const infoPageOpacity = useScrollFade("info-page", 200);
    const projectPageOpacity = useScrollFade("project-page", 200);
    const contactPageOpacity = useScrollFade("contact-page", 200);

    return (
        <div className="relative min-h-screen flex overflow-hidden">
            {/* Fixed Sidebar */}
            <SidebarNav />

            {/* Main Content with left margin to avoid overlap */}
            <div className="relative flex-1 overflow-y-auto z-10 ml-8">
                {/* FrontPage */}
                <div id="front-page" className={`min-h-screen flex items-center justify-center transition-opacity duration-500`}>
                    <FrontPage />
                </div>

                {/* AboutMePage */}
                <div id="aboutme-page" className={`flex justify-center transition-opacity duration-500 bg-transparent py-12`}>
                    <AboutMe />
                </div>


                {/* InfoPage */}
                <div id="info-page" className={`flex justify-center transition-opacity duration-500 bg-transparent py-12`}>
                    <div className="w-full max-w-6xl">
                        <InfoPage />
                    </div>
                </div>

                {/* ProjectPage */}
                <div id="project-page" className={`flex justify-center transition-opacity duration-500 bg-transparent py-12`}>
                    <div className="w-full max-w-6xl">
                        <ProjectPage />
                    </div>
                </div>

                {/* ContactPage */}
                <div id="contact-page" className={`flex justify-center transition-opacity duration-500 bg-transparent py-12`}>
                    <div className="w-full max-w-6xl">
                        <ContactPage />
                    </div>
                </div>

                <div className="h-24"></div>
            </div>
        </div>
    );
}