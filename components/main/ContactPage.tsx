'use client'
import React, { useState } from "react";
import { Armata, Noto_Sans_Bassa_Vah } from 'next/font/google';

const armata = Armata({ weight: "400", subsets: ['latin'] });
const noto_sans_bassa_vah = Noto_Sans_Bassa_Vah({ weight: "400", subsets: ['latin'] });

export default function ContactPage() {

    return (
        <div className="mx-auto text-left max-w-5xl leading-normal px-6">
            <section className="work-section py-12">
                <h2 className="section-title text-3xl font-bold mb-8">
                    <span className={`${armata.className} text-lg text-[#64e8cb]`}>04.</span>
                    <span className={`${noto_sans_bassa_vah.className} text-2xl ml-2`}>Get in Touch!</span>
                </h2>

                <div>
                    <h1 className="text-lg text-[#a2a9db]">I'm always open to connecting. Feel free to reach out if you have any questions or just want to say hello! I'll do my best to respond.</h1>
                </div>

                <div className="mt-10">
                    <a href="mailto:jackydroid68@gmail.com">
                        <button className="group bg-[#64e8cb] hover:bg-[#52c2a8] text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out text-black hover:scale-110 hover:shadow-xl">
                            Contact Me
                            <span className="hidden group-hover:inline ml-2">&#8594;  &#x1F4E7;</span>
                        </button>
                    </a>
                </div>

            </section>
        </div>
    );
}