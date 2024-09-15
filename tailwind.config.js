/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "theme-red": "hsl(14, 86%, 42%)",
                "theme-rose": {
                    50: "hsl(20, 50%, 98%)",
                    100: "hsl(13, 31%, 94%)",
                    300: "hsl(14, 25%, 72%)",
                    400: "hsl(7.5, 19.61%, 60%)",
                    500: "hsl(12, 20%, 44%)",
                    900: "hsl(14, 65%, 9%)",
                },
                "theme-green": "hsl(159, 69%, 38%)",
            },
            keyframes: {
                fadeInUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                slideUp: {
                    "0%": {
                        transform: "translateY(100%)",
                    },
                    "100%": {
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                fadeInUp: "fadeInUp 0.3s ease-out",
                slideUp: "slideUp 0.4s ease-out",
            },
            gridTemplateColumns: {
                "auto-fit": "repeat(auto-fit, minmax(200px, 1fr))",
            },
        },
    },
    plugins: ["prettier-plugin-tailwindcss"],
};
