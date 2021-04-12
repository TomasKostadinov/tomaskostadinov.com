const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            colors: {
                rose: colors.rose,
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
    ],
    purge: {
        enabled: true,
        content: ['./src/**/*.html'],
    },
};
