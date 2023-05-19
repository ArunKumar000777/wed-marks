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
                dark: "#694d30",
                light: "#d5cbb6",
                text_light: "#fffafa",
                accent: "rgba(105,77,48,.9)",
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
