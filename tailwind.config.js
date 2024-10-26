/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Futura PT", "Arial", "sans-serif"],
            },
            colors: {
                blue: "#001a30",
                red: "#ea1d2d",
                grey: "#a8a9ac",
                yellow: "#fcd700",
            },
        },
    },
    plugins: [],
};
