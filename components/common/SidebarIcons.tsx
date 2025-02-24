import ResumeIcon from "@/components/icons/resume_icon";
import GithubIcon from "@/components/icons/github_icon";
import LinkedinIcon from "@/components/icons/linkedin_icon";
import EmailIcon from "@/components/icons/email_icon";
import React from "react";

export default function SidebarIcons() {
    return (
        <div className="hidden md:flex flex-col items-center fixed right-4 bottom-4 space-y-2 z-20">
            <button className="p-3 rounded-full transition-transform duration-200 hover:scale-125">
                <ResumeIcon color="#64e8cb" size={35} />
            </button>

            <button className="p-3 rounded-full transition-transform duration-200 hover:scale-125">
                <GithubIcon color="#64e8cb" size={35} />
            </button>

            <button className="p-3 rounded-full transition-transform duration-200 hover:scale-125">
                <LinkedinIcon color="#64e8cb" size={35} />
            </button>

            <button className="p-3 rounded-full transition-transform duration-200 hover:scale-125">
                <EmailIcon color="#64e8cb" size={35} />
            </button>
        </div>
    );
}