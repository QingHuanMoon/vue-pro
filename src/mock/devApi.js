module.exports = {
    apis: (app) => {
        app.get('/api/hello', (req, res, next) => {
            res.json(
                {name: 'Hello', value: 'World'}
            )
        })
    }
}
