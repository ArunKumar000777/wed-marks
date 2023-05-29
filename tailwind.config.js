/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Playfair: "Playfair, serif",
            },
            animation: {
                wiggle: "wiggle 1s ease-in-out infinite",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            colors: {
                dark: "#000000",
                secondary: "#d19324",
                secondaryDark: "#a7761d",
                light: "#111111",
                text_light: "#fffafa",
                accent: "#9dccc9",
                line: "#e1eaeb",
                dark_gray: "#939393",
                text_primary: "#d19324",
                light_white: "#ffffffae",
                line_shade: {
                    100: "#f9fbfb",
                    200: "#f3f7f7",
                    300: "#edf2f3",
                    400: "#e7eeef",
                    500: "#e1eaeb",
                    600: "#b4bbbc",
                    700: "#878c8d",
                    800: "#5a5e5e",
                    900: "#2d2f2f",
                },
            },
            aspectRatio: {
                "5/6": "5 / 6",
                "32/27": "32 / 27",
                "22/15": "22 / 15",
                "44/21": "44 / 21",
            },
        },
    },
    plugins: [],
};

// dark: "#9accc9",
//                 light: "#edf7f8",
// gold #eab85f,#ddad60,#eccf8d
// ivory #dacbab,#d9b884,#d4d6c9
// blue #9accc9
// accent_primary #edf7f8 light blue
// accent_primary #fdf2b6 ivory
// #dark:#694d30
// light : #d5cbb6
