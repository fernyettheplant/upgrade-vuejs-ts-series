export default (app) => {
  app.get('/test', (req, res) => {
    res.json({ test: 'success' })
  })
}
