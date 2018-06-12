module.exports = {
    outputDir: '../dist',
    devServer: {
        proxy: {
            "/api": {
                target: "http://0.0.0.0:8000",
                secure: false
            }
        }
    }
};