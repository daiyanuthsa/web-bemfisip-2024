/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    theme: {
        extend: {
            translate: {
                110: "110%",
            },
            fontFamily: {
                "alfa-slab": ["Alfa Slab One", "serif"],
                inter: ["Inter", "serif"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};