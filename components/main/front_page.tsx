// FrontPage.tsx
import { Armata, Noto_Sans_Bassa_Vah } from 'next/font/google';

const armata = Armata({ weight: "400", subsets: ['latin'] });
const noto_sans_bassa_vah = Noto_Sans_Bassa_Vah({ weight: "400", subsets: ['latin'] });

export default function FrontPage() {
    return (
        <div className="mx-auto text-left max-w-5xl leading-normal ml-6 mr-6">
            <h1 className={`${armata.className} text-lg text-[#64e8cb]`}>Hi, my name is</h1>
            <h2 className={`${noto_sans_bassa_vah.className} text-4xl sm:text-6xl font-bold mt-7 text-[#dce0fc]`}>&lt; Jacky Lim    /&gt;</h2>
            <h2 className={`${noto_sans_bassa_vah.className} text-4xl sm:text-5xl font-semibold mt-7 text-[#a2a9db] typewriter`}>I build software that turns ideas to reality.</h2>
            <p className="text-xl mt-7 max-w-[70%] text-left text-[#a2a9db]">
                I’m a software engineer from Vancouver, Canada passionate about creating user-focused products that make a difference.
                Currently, I’m focused on spaceflight technology at Microchip Technology.
            </p>
            <style jsx>{`
                @keyframes typing {
                    from { width: 0; }
                    to { width: 100%; }
                }

                @keyframes blink {
                    50% { border-color: transparent; }
                }

                .typewriter {
                    overflow: hidden;
                    border-right: 2px solid #64e8cb;
                    display: inline-block;
                    animation: typing 2s steps(40, end), blink 0.75s step-end infinite;
                }

                @media (min-width: 640px) {
                    .typewriter {
                        white-space: nowrap;
                    }
                }
            `}</style>
        </div>
    );
}