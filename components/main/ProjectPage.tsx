'use client'
import React, { useState } from "react";
import { projectData} from "@/data/ProjectData";
import { Armata, Noto_Sans_Bassa_Vah } from 'next/font/google';
import ProjectCard from "@/components/common/ProjectCard";

const armata = Armata({ weight: "400", subsets: ['latin'] });
const noto_sans_bassa_vah = Noto_Sans_Bassa_Vah({ weight: "400", subsets: ['latin'] });

export default function ProjectPage() {

    return (
        <div className="mx-auto text-left max-w-5xl leading-normal px-6">
            <section className="work-section py-12">
                <h2 className="section-title text-3xl font-bold mb-8">
                    <span className={`${armata.className} text-lg text-[#64e8cb]`}>02.</span>
                    <span className={`${noto_sans_bassa_vah.className} text-2xl ml-2`}>Software that I've Built</span>
                </h2>

                <div>
                    <div className="container mx-auto px-4">
                        <div className="space-y-8">
                            {projectData.map((project, index) => (
                                <ProjectCard key={index} project={project} />
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}