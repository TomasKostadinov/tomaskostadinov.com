const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            colors: {
                'aqua': {
                    100: '#F2FBF9',
                    200: '#E0F4F1',
                    300: '#CDEDE9',
                    400: '#A7E0D8',
                    500: '#81D2C7',
                    600: '#74BDB3',
                    700: '#4D7E77',
                    800: '#3A5F5A',
                    900: '#273F3C',
                },

                'ruby': {
                    100: '#F3E9EC',
                    200: '#E2C7CF',
                    300: '#D1A5B2',
                    400: '#AE6279',
                    500: '#8B1E3F',
                    600: '#7D1B39',
                    700: '#531226',
                    800: '#3F0E1C',
                    900: '#2A0913',
                },

                'cyan': {
                    100: '#F3F3FF',
                    200: '#E1E0FF',
                    300: '#CFCEFF',
                    400: '#ACA9FF',
                    500: '#8884FF',
                    600: '#7A77E6',
                    700: '#524F99',
                    800: '#3D3B73',
                    900: '#29284D',
                },

                'orange': {
                    100: '#FFEFEC',
                    200: '#FFD6CF',
                    300: '#FFBDB1',
                    400: '#FF8C77',
                    500: '#FF5A3D',
                    600: '#E65137',
                    700: '#993625',
                    800: '#73291B',
                    900: '#4D1B12',
                },

                'dark': {
                    100: '#E6E9EA',
                    200: '#BFC9CA',
                    300: '#99A9AA',
                    400: '#4D686B',
                    500: '#00272B',
                    600: '#002327',
                    700: '#00171A',
                    800: '#001213',
                    900: '#000C0D',
                },
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
