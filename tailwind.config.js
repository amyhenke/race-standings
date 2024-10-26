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
            fontSize: {
                "6xl": ["4.5rem", { lineHeight: "0.9" }],
                "7xl": ["10rem", { lineHeight: "0.8" }],
                "8xl": ["12rem", { lineHeight: "0.8" }],
                "9xl": ["15rem", { lineHeight: "0.8" }],
            },
        },
    },
    plugins: [],
};
