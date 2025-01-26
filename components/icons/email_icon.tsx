import React from "react";

interface EmailIconProps {
    color: string;
    size: number;
}

export default function EmailIcon({ color, size, ...rest }: EmailIconProps) {
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
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
            <path d="M2 4l10 8 10-8" />
        </svg>
    );
}
