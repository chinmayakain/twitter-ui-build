/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                twitterBlue: "#2AA4F4",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
