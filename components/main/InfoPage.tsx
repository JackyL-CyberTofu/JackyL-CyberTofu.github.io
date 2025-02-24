'use client'
import React from "react";
import { workExperienceData } from "@/data/WorkExperience";
import { Armata, Noto_Sans_Bassa_Vah } from 'next/font/google';
import Link from "next/link";

const armata = Armata({ weight: "400", subsets: ['latin'] });
const noto_sans_bassa_vah = Noto_Sans_Bassa_Vah({ weight: "400", subsets: ['latin'] });

export default function InfoPage() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-12">
            <h2 className="section-title text-3xl font-bold mb-12">
                <span className={`${armata.className} text-lg text-[#64e8cb]`}>02.</span>
                <span className={`${noto_sans_bassa_vah.className} text-2xl ml-2`}>Where I’ve Worked</span>
            </h2>
            <div className="relative">
                {/* Main vertical timeline line */}
                <div className="absolute left-4 top-0 h-full border-l-2 border-[#303869]"></div>

                {workExperienceData.map((work, index) => (
                    <div
                        key={work.id}
                        className="relative ml-12 mb-12 opacity-0 animate-slide-in"
                        style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
                    >
                        {/* Bullet with icon based on work.type */}
                        <div className="absolute -left-12 top-0">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d1d1cf] ring-4 ">
                                {work.type === "work" ? (
                                    <svg className="h-4 w-4 text-[#0f113a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7V6a2 2 0 012-2h3.5a1 1 0 01.867.5L12 7M20 7V6a2 2 0 00-2-2h-3.5a1 1 0 00-.867.5L12 7" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7" />
                                    </svg>
                                ) : work.type === "education" ? (
                                    <svg className="h-4 w-4 text-[#0f113a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                                    </svg>
                                ) : null}
                            </span>
                        </div>
                        {/* Content */}
                        <div className="p-4 rounded-md bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 border-2 border-gray-700">
                            <h3 className="text-lg font-bold text-[#64e8cb]">
                                {work.position} <span className="text-[#d1d1cf]">@ {work.company}</span>
                            </h3>
                            <span className={`block ${armata.className} mb-2`}>{work.period}</span>
                            <ul className="list-disc pl-5 space-y-2">
                                {work.responsibilities.map((item: string, idx: number) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <Link href={"/Resume_Jacky_FT.pdf"} passHref legacyBehavior>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#64e8cb] text-black px-4 py-2 inline-block rounded hover:bg-teal-500 transition-colors ml-5"
                >
                    View Resume
                </a>
            </Link>

            <style jsx>{`
                @keyframes slide-in {
                    0% {
                        opacity: 0;
                        transform: translateX(-20px) scale(0.95);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
}