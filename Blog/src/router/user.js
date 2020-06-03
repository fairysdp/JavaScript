const userHandler = (req, res) => {
    const method = req.method
    const path = req.url.split('?')[0]
    if (method === 'GET' && path === '/api/user/login') {
        return '这是用户登录接口'
    }
}

module.exports = userHandler