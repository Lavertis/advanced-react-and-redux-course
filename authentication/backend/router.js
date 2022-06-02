module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send(['water', 'fire', 'earth', 'air']);
    });
}