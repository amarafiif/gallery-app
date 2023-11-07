const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    router = require('./routers'),
    errorHandling = require('./middlewares/errorHandling'),
    swaggerUi = require('swagger-ui-express'),
    documentation = require('./documentation/openapi.json')

require('dotenv').config()

app.use(express.json({ strict:false }))
app.use(cors())
app.use('/images', express.static('public/images'))
app.use('/api/v1', router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(documentation));
app.use(errorHandling)

app.get('*', (req, res) => {
    return res.status(404).json({
        error: 'Endpoint is not registered!'
    })
})

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`)
})
