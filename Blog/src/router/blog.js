const { Success, Error } = require('../model/base')
const { getList } = require('../controller/blog')

const blogHandler = (req, res) => {
    if (req.method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author
        const listData = getList()
        return new Success(listData)
    } else if (method === 'POST') {

    }
}

module.exports = blogHandler