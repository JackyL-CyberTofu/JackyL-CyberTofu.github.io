import React from "react";

interface GithubIconProps {
    color: string;
    size: number;
}

export default function GithubIcon({ color, size, ...rest }: GithubIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={size}
            height={size}
            {...rest}
        >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.71c-2.78.61-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.44-1.11-1.44-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.29.1-2.7 0 0 .84-.27 2.75 1.02A9.55 9.55 0 0 1 12 6.8a9.55 9.55 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.41.2 2.44.1 2.7.64.69 1.03 1.58 1.03 2.67 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.16.57.67.48A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
    );
}
