import React from "react";

interface LinkedinIconProps {
    color: string;
    size: number;
}

export default function LinkedinIcon({ color, size, ...rest }: LinkedinIconProps) {
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
            <rect x="2" y="2" width="20" height="20" rx="3" ry="3" />
            <circle cx="8" cy="8" r="1.5" />
            <line x1="8" y1="10" x2="8" y2="16" />
            <path d="M12 10h4v6h-4z" />
            <line x1="12" y1="10" x2="12" y2="10" />
        </svg>
    );
}
