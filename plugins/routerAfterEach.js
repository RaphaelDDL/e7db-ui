export default ({ app }) => {
    app.router.afterEach((/* to, from */) => {
        if ("scrollTo" in window) {
            window.scrollTo({
                top: 0,
                left: 0,
                // behavior: 'smooth',
            });
        }
    });
};
