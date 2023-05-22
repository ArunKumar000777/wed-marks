/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#ffffff",
                secondary: "#ccb37f",
                accent_primary: "#edf7f8",
                text_primary: "black",
                text_secondary: "gray",
                text_terinery: "white",
                accent_secondary: "#f4a492",
                bg_gold: "#eccf8d",
                accent_ivory: "#ccb37f",
                secondary1: "#eee6d4",
                dark: "#9accc9",
                light: "#edf7f8",
                text_light: "#fffafa",
                accent: "#9dccc9",
                line: "#e1eaeb",
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

// gold #eab85f,#ddad60,#eccf8d
// ivory #dacbab,#d9b884,#d4d6c9
// blue #9accc9
// accent_primary #edf7f8 light blue
// accent_primary #fdf2b6 ivory
// #dark:#694d30
// light : #d5cbb6
