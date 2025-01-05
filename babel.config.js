module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '@': './', // Resolves '@' to the root folder
                },
            },
        ],
    ],
};
