'use client'
import React, { useState } from "react";
import { workExperienceData } from "@/data/WorkExperience";

import {Armata, Noto_Sans_Bassa_Vah} from 'next/font/google'

const armata = Armata({ weight: "400", subsets: ['latin'] })
const noto_sans_bassa_vah = Noto_Sans_Bassa_Vah()

export default function InfoPage() {
    const [activeCompany, setActiveCompany] = useState<number>(1);

    return (
        <div className="mx-auto text-left max-w-5xl leading-normal ml-6 mr-6">
            <section className="work-section px-6 py-8">
                <h2 className="section-title text-2xl font-bold mb-6">
                    <span className={`${armata.className} text-lg text-[#64e8cb]`}>02.</span>
                    <span className={`${noto_sans_bassa_vah.className}`}>  Where I’ve Worked</span>
                </h2>
                {/* Use a custom grid definition to fix the widths */}
                <div className="work-container grid grid-cols-[25%,75%] gap-6">
                    {/* Menu (Fixed 25% width) */}
                    <div className="company-list space-y-4">
                        {workExperienceData.map((workExperience) => (
                            <button
                                key={workExperience.id}
                                onClick={() => setActiveCompany(workExperience.id)}
                                className={`block text-left w-full p-2 rounded-md transition hover:bg-[#303869] ${noto_sans_bassa_vah.className} ${
                                    activeCompany === workExperience.id ? "font-light text-[#64e8cb] bg-[#303869]" : "text-[#a2a9db]"
                                }`}
                            >
                                {workExperience.company}
                            </button>
                        ))}
                    </div>

                    {/* Main Content (Fixed 75% width) */}
                    <div className="responsibilities space-y-4">
                        <div>
                            <h3 className="text-lg font-bold">
                                {workExperienceData[activeCompany].position}
                                <span className={`text-[#64e8cb]`}> @ {workExperienceData[activeCompany].company}</span>
                            </h3>
                            <h3 className={`${armata.className} text-[#a2a9db]`}>{workExperienceData[activeCompany].period}</h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-2">
                            {workExperienceData[activeCompany].responsibilities.map(
                                (item: string, index: number) => (
                                    <li key={index} className={"text-[#a2a9db]"}>{item}</li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}