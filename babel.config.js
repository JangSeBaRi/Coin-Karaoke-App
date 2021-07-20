module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        // presets: ['module:metro-react-native-babel-preset'],
        plugins: ['babel-plugin-styled-components',
            [
                "module-resolver",
                {
                    root: ["."],
                    extensions: [".ios.ts", ".android.ts", ".ts", ".ios.tsx", ".android.tsx", ".tsx", ".jsx", ".js", ".json"],
                    alias: {
                        "~": "./src",
                        "@navigation": "./src/navigation",
                        "@page": "./src/page",
                        "@mainPage" : "./src/page/main",
                        "@drawerPage" : "./src/page/drawer",
                        "@subMainPage" : "./src/page/subMain",
                        "@utils": "./src/utils",
                        "@components": "./src/components",
                        "@style": "./src/style",
                        "@assets" : "./assets",
                    },
                },
            ],
        ],
    };
};
