module.exports = {
    content: [
        './docs/.vitepress/**/*.{js,ts,vue}',
        './docs/**/*.md',
        './src/**/*.js',
        './src/**/*.{js,ts,vue}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3f51b5',
                secondary: '#ff9800',
                accent: '#795548',
                error: '#f44336',
                warning: '#ffeb3b',
                info: '#2196f3',
                success: '#4caf50',
            }
        },
    },
    plugins: [],
}
