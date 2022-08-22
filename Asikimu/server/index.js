const express = require('express')

const stripe = require('stripe')('sk_test_51LTKxJAsXiYXNoyRwrhBliGf4Mf3Lw1IDwhTPNEO42tOBtzaqvkY4RE8hXdEcGQauJADOeXFyKPm0fq26p8wuNMv00DuI6TJI2')

const cors = require('cors')

const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({extended: false}))

app.use(bodyparser.json())

app.use(cors)

app.post('/checkout', async (req, res) => {
    console.log(req, res);
})

app.listen(5000, () => {
    console.log("App is listening on port 5000");
})