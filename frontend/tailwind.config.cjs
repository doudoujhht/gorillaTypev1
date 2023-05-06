/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            'bg-color': 'var(--bg-color)',
            "main-color": "var(--main-color)",
            "caret-color": "var(--caret-color)",
            "sub-color": "var(--sub-color)",
            "sub-alt-color": "var(--sub-alt-color)",
            "text-color": "var(--text-color)",
            "error-color": "var(--error-color)",
            "error-extra-color": "var(--error-extra-color)",
            "colorful-error-color": "var(--colorful-error-color)",
            "colorful-error-extra-color": "var(--colorful-error-extra-color)",
        }
    },
    plugins: [],
}