const qs = require('querystring')
const blogHandler = require('./src/router/blog')
const userHandler = require('./src/router/user')

const serverHandle = (req, res) => {
    const url = req.url
    req.path = url.split('?')[0]
    req.query = qs.parse(url.split('?')[1])

    res.setHeader('Content-type', 'application/json')

    const blogData = blogHandler(req, res)
    if (blogData) {
        res.end(
            JSON.stringify(blogData)
        )
        return
    }

    const userData = userHandler(req, res)
    if (userData) {
        res.end(
            JSON.stringify(userData)
        )
        return
    }
    res.end()
}

module.exports = serverHandle