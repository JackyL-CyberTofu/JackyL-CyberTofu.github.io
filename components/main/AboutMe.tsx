'use client'
import React, { useState } from "react";
import Image from 'next/image';
import { Armata, Noto_Sans_Bassa_Vah } from 'next/font/google';
import { FaPython, FaJava, FaReact, FaHtml5  } from "react-icons/fa";
import { FaJs, FaAws, FaCss3Alt, FaNode, FaGraduationCap, FaCode, FaPerson, FaAward  } from "react-icons/fa6";

const armata = Armata({ weight: "400", subsets: ['latin'] });
const noto_sans_bassa_vah = Noto_Sans_Bassa_Vah({ weight: "400", subsets: ['latin'] });

export default function AboutMe() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="mx-auto text-left max-w-5xl leading-normal px-6 py-16 md:py-24">
            <section className="work-section">
                <h2 className="section-title text-3xl font-bold mb-8 md:mb-8">
                    <span className={`${armata.className} text-lg text-[#64e8cb]`}>02.</span>
                    <span className={`${noto_sans_bassa_vah.className} text-2xl ml-2`}>About Me</span>
                </h2>

                <div className="md:flex md:items-start md:justify-between space-y-8 md:space-y-0 md:space-x-12">
                    {/* Responsive Grid: Fitting 3 columns on full width */}
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                        <div className="bg-gray-800 p-6 rounded shadow rounded-2xl border-2 border-gray-700">
                            <div className="inline-block p-2 border border-gray-400 dark:border-gray-500 rounded-full">
                                <FaCode className="text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Software Engineer</h3>
                            <p className="text-lg">
                                I am a Software Engineer at Microchip Technology working on spaceflight technology.
                                I'm passionate about crafting digital experiences that are beautiful and user-centric.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded shadow rounded-2xl border-2 border-gray-700">
                            <div className="inline-block p-2 border border-gray-400 dark:border-gray-500 rounded-full">
                                <FaGraduationCap className="text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Student</h3>
                            <p className="text-lg">
                                I am a new-grad student at Simon Fraser University studying Computer Science and Mathematics.
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded shadow rounded-2xl border-2 border-gray-700">
                            <div className="inline-block p-2 border border-gray-400 dark:border-gray-500 rounded-full">
                                <FaAward className="text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Some Technologies</h3>
                            <p>
                            Certified in AWS Developer Associate.
                            </p>
                            <p className="text-3xl mt-2">
                            <FaJs className="inline ml-1 mr-1 mt-1" />
                            <FaReact className="inline ml-1 mr-1 mt-1" />
                            <FaJs className="inline ml-1 mr-1 mt-1" />
                            <FaReact className="inline ml-1 mr-1 mt-1" />
                            <FaNode className="inline ml-1 mr-1 mt-1" />
                            <FaCss3Alt className="inline ml-1 mr-1 mt-1" /> 
                            <FaHtml5 className="inline ml-1 mr-1 mt-1" />
                            <FaPython className="inline ml-1 mr-1 mt-1" />
                            <FaJava className="inline ml-1 mr-1 mt-1" />
                            <FaAws className="inline ml-1 mr-1 mt-1" />
                            </p>
                            
                        </div>
                        {/* <div className="bg-gray-800 p-6 rounded shadow">
                            <div className="inline-block p-2 border border-gray-400 dark:border-gray-500 rounded-full">
                                <FaAward className="text-4xl" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Certifications</h3>
                            <p className="text-lg">
                            Certified in AWS Developer Associate.
                            </p>
                        </div> */}
                        
                    </div>

                    {/* Profile Picture with 3D and Unique Hover Effect */}
                    {/*
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-gray-500 to-gray-700 p-1 shadow-lg shadow-gray-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-700/80">
                            <Image
                                src={"/portrait.jpg"}
                                width={250}
                                height={250}
                                className="rounded-full filter saturate-50 transition-all duration-300 hover:saturate-100"
                                alt="Your Profile Picture"
                            />
                        </div>
                    </div>
                    */}
                </div>
                
                <div className="flex items-center justify-center mt-12">
                    <button 
                        onClick={() => setModalOpen(true)}
                        className="bg-[#64e8cb] text-black px-4 py-2 rounded hover:bg-teal-500 transition-colors"
                    >
                        Show All Technologies
                    </button>
                </div>
            </section>

            {/* Modal Popup */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-50" onClick={() => setModalOpen(false)}></div>
                    <div className="bg-[#0f334d] text-white rounded-lg shadow-lg z-10 w-11/12 md:w-1/2 p-6">
                        <h3 className="text-2xl mb-4 font-bold">Technologies</h3>
                        <ul className="space-y-4">
                            <li className="text-lg">
                                <span className="font-bold inline">Languages: </span>
                                <span className="inline">C, C++, Python, Java, JavaScript, TypeScript, SQL, NoSQL, Bash</span>
                            </li>
                            <li className="text-lg">
                                <span className="font-bold inline">Frameworks: </span>
                                <span className="inline">React, Next.js, Node.js, Express, Spring Boot, FastAPI</span>
                            </li>
                            <li className="text-lg">
                                <span className="font-bold inline">Libraries: </span>
                                <span className="inline">Bootstrap React, MongoDB, Numpy, Pandas, Selenium, Tailwind CSS, Tensorflow, Sklearn</span>
                            </li>
                            <li className="text-lg">
                                <span className="font-bold inline">Tools: </span>
                                <span className="inline">AWS, Google Cloud, Docker, Kubernetes, Git, Jenkins, Jira, Confluence, Jupyter Notebook, Linux, Trace32</span>
                            </li>
                        </ul>
                        <button 
                            onClick={() => setModalOpen(false)}
                            className="mt-6 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}