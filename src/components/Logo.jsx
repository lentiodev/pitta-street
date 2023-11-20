import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center">
            <svg
                className="w-8 h-8 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <h1 className="ml-2 text-2xl font-bold text-gray-800">PITTA STREAT</h1>
        </div>
    );
};

export default Logo;
